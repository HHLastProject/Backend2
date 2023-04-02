const express = require('express');
const axios = require('axios');
const qs = require('querystring');
const session = require('express-session');

require("dotenv").config();
const PORT = process.env.SERVER_PORT;

const app = express();
app.listen(PORT, () => {
    console.log(PORT, "포트 번호로 서버가 실행되었습니다");
  });

//카카오 API 연동을 위해 사용될 클라이언트 ID, 클라이언트 시크릿, 리다이렉트 URI를 
//상수로 정의합니다.
// const KAKAO_REDIRECT_URI = "http://localhost:3060/api/users/kakao";

const KAKAO_CLIENT_ID = '92e15ddd07c08d5fd1734a941c3f539c';
const KAKAO_CLIENT_SECRET = 'YOUR_CLIENT_SECRET';
const KAKAO_REDIRECT_URI = "http://localhost:3060/oauth";

//express-session을 사용하기 위해 미들웨어를 추가합니다.
app.use(session({
  secret: 'YOUR_SESSION_SECRET',
  resave: false,
  saveUninitialized: true,
}));

//카카오톡 로그인 버튼 생성
//login 경로에 GET 요청이 들어올 경우, 카카오톡 로그인 버튼 URL을 생성하여 클라이언트에게 리다이렉트합니다.
//클라이언트는 해당 URL로 이동하면 카카오톡 로그인 페이지로 이동하게 됩니다.
app.get('/login', (req, res) => {
    const kakaoLoginUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;
    res.redirect(kakaoLoginUrl);
  });


  // 토큰 발급 받기(인증 코드를 받아와서 토큰 발급 요청에 사용합니다.)
app.get('/oauth', async (req, res) => {
    const { code } = req.query;
  
    //발급 요청에 필요한 정보를 data 객체에 저장
    const data = {
      grant_type: 'authorization_code',
      client_id: KAKAO_CLIENT_ID,
      redirect_uri: KAKAO_REDIRECT_URI,
      code,
      client_secret: KAKAO_CLIENT_SECRET,
    };
  
    try {
        //axios.post() 메서드를 이용하여 토큰을 발급 받습니다.
      const response = await axios.post('https://kauth.kakao.com/oauth/token', qs.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
      });
      
      const { access_token: accessToken } = response.data;
  
      // 세션에 토큰 저장
      req.session.accessToken = accessToken;
      //user 경로로 리다이렉트합니다.
      res.redirect('/user');
    } catch (error) {
      console.error(error);
      res.status(400).send('카카오톡 로그인에 실패하였습니다.');
    }
  });

  // 사용자 정보 가져오기
app.get('/user', async (req, res) => {
    const { accessToken } = req.session;
  
    if (!accessToken) {
      return res.status(401).send('로그인이 필요합니다.');
    }
  
    try {
        //axios.get() 메서드를 이용하여 사용자 정보를 가져오고, 필요한 정보를 userInfo 객체에 저장합니다.
      const response = await axios.get('https://kapi.kakao.com/v2/user/me', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
  
      const { id, properties ,kakao_account } = response.data;
  
      const userInfo = {
        id,
        nickname: properties.nickname,
        profile_image: properties.profile_image, 
        email : kakao_account.email
      };
      

      res.json({"userInfo" : userInfo});

    } catch (error) {
      console.error(error);
      res.status(400).send('사용자 정보를 가져오는데 실패하였습니다.');
    }
  });


  
  /*
  설치한것
  npm install passport passport-kakao 
  npm install express-session memorystore
  
  */ 