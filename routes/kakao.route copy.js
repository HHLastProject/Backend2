const express = require("express");
const qs = require("querystring");
const router = express.Router();
const session = require("express-session");
const axios = require("axios");

const KAKAO_CLIENT_ID = process.env.KAKAO_CLIENT_ID;
const KAKAO_REDIRECT_URI = process.env.KAKAO_REDIRECT_URI;

//로컬에서 할때
router.get("/login10", async (req, res) => {
  const { code } = req.query;

  const data = {
    grant_type: "authorization_code",  //액세스 토큰을 요청하기 위한 인증 플로우에서 필요한 매개 변수 중 하나입니다.
    client_id: KAKAO_CLIENT_ID,        //백 id
    redirect_uri: KAKAO_REDIRECT_URI, // 백 url
    code,
  };

 //하단부터는 로컬,원격  모두 동일
  try {
    const responseToken = await axios.post(
      "https://kauth.kakao.com/oauth/token",
      qs.stringify(data),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        },
      }
    );
    
    const { access_token: accessToken } = responseToken.data;
    req.session.accessToken = accessToken;

    if (!accessToken) {
      return res.status(401).send({ errorMsg: "로그인이 필요합니다." });
    }

    res.status(200).json({ accessToken });
  } catch (error) {
    console.error(error);
    res.status(400).send({"errorMsg" : '카카오톡 로그인에 실패하였습니다.'});
  }
});






//원격
router.post("/login10", async (req, res) => {
  
  const { code } = req.body;

  const data = {
    grant_type: "authorization_code",  
    client_id: KAKAO_CLIENT_ID,       // 백Id
    redirect_uri: "http://localhost:3000/redirect/kakao",  // 프론트 url
    code,
  };

 //하단부터는 로컬,원격  모두 동일
  try {
    const responseToken = await axios.post(
      "https://kauth.kakao.com/oauth/token",
      qs.stringify(data),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        },
      }
    );
    
    const { access_token: accessToken } = responseToken.data;
    req.session.accessToken = accessToken;

    if (!accessToken) {
      return res.status(401).send({ errorMsg: "로그인이 필요합니다." });
    }

    res.status(200).json({ accessToken });
  } catch (error) {
    console.error(error);
    res.status(400).send({"errorMsg" : '카카오톡 로그인에 실패하였습니다.'});
  }
});

module.exports = router;
