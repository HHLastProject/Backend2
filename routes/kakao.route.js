const express = require("express");
const qs = require("querystring");
const router = express.Router();
const session = require("express-session");

const KAKAO_CLIENT_ID = process.env.KAKAO_CLIENT_ID;
const KAKAO_REDIRECT_URI = process.env.KAKAO_REDIRECT_URI;
const axios = require("axios");

router.get("/login", async (req, res) => {
  const { code } = req.query;

  console.log(code);

  const data = {
    grant_type: "authorization_code",
    client_id: KAKAO_CLIENT_ID,
    redirect_uri: KAKAO_REDIRECT_URI,
    code,
  };

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
   
   
   //유저 정보 가져오기
    const responseUser = await axios.get("https://kapi.kakao.com/v2/user/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const { id, properties, kakao_account } = responseUser.data;

    const userInfo = {
      id,
      nickname: properties.nickname,
      email: kakao_account.email,
      gender: kakao_account.gender,
      age: kakao_account.age_range,
    };

    console.log(userInfo);
    res.status(200).json({ accessToken });
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
    // res.status(400).send({"errorMsg" : '카카오톡 로그인에 실패하였습니다.'});
  }
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////          내 id  프론트 uri
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

router.post("/login2", async (req, res) => {
  const { code } = req.body;
 
  const data = {
    grant_type: "authorization_code",
    client_id: "552308e28dcc9e6296fed9c2a196525e",  //v프론트 id
    redirect_uri: "http://localhost:3000/redirect/kakao", //프론트 url
    code,
  };

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

    const { access_token : access_token } = responseToken.data;

    if (!access_token) {
      return res.status(401).send({ errorMsg: "로그인이 필요합니다." });
    } 

    res.status(200).json({ access_token });
  } catch (error) {
    console.error(error);
    res.status(400).send({"errorMsg" : '카카오톡 로그인에 실패하였습니다.'});
  }
});

module.exports = router;
