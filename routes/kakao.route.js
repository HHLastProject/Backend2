const express = require("express");
const qs = require('querystring');
const router = express.Router();
const session = require('express-session');

// const KAKAO_CLIENT_ID = process.env.KAKAO_CLIENT_ID;
// const KAKAO_REDIRECT_URI = process.env.KAKAO_REDIRECT_URI
const axios = require('axios');

router.get("/login",async(req,res)=> {

    const { code } = req.query;

    const data = {
      grant_type: 'authorization_code',
      client_id: KAKAO_CLIENT_ID,
      redirect_uri: KAKAO_REDIRECT_URI,
      code,
    };
    

    try {
      const responseToken = await axios.post('https://kauth.kakao.com/oauth/token', qs.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
      });
   
   
      const { access_token: accessToken } = responseToken.data;
    
      req.session.accessToken = accessToken;
  
    if (!accessToken) {
      return res.status(401).send({"errorMsg" : '로그인이 필요합니다.'});
    }
  
        //axios.get() 메서드를 이용하여 사용자 정보를 가져오고, 필요한 정보를 userInfo 객체에 저장합니다.
      const responseUser = await axios.get('https://kapi.kakao.com/v2/user/me', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
  
      const { id, properties ,kakao_account } = responseUser.data;
  
      const userInfo = {
        id,
        nickname: properties.nickname,
        email : kakao_account.email,
        gender : kakao_account.gender,
        age : kakao_account.age_range
      };
      
      console.log(userInfo);
      res.status(200).json({accessToken});
  
    } catch (error) {
      console.error(error);
      
      res.status(400).send({"errorMsg" : '카카오톡 로그인에 실패하였습니다.'});
    }

});

module.exports = router;