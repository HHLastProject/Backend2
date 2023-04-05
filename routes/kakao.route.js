const express = require("express");
const qs = require("querystring");
const router = express.Router();
const session = require("express-session");

const KAKAO_CLIENT_ID = process.env.KAKAO_CLIENT_ID;
const KAKAO_REDIRECT_URI = process.env.KAKAO_REDIRECT_URI;
const KAKAO_REDIRECT_URI2 = process.env.KAKAO_REDIRECT_URI2;
const axios = require("axios");

/////////////////////////////////////////////////////////
// app.use(session({
//   secret: 'YOUR_SESSION_SECRET',
//   resave: false,
//   saveUninitialized: true,
// }));

// app.get('/kakaologin', (req, res) => {
//   const kakaoLoginUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;
//   res.redirect(kakaoLoginUrl);
// });
/////////////////////////////////////////////////////////

router.get("/login", async (req, res) => {
  const { code } = req.query;
  const data = {
    grant_type: "authorization_code",
    client_id: "92e15ddd07c08d5fd1734a941c3f539c",
    redirect_uri: "http://localhost:3060/api/kakao/login",
    code,
  };

  // const { code } = req.query;
  //   const data = {
  //     grant_type: 'authorization_code',
  //     client_id: KAKAO_CLIENT_ID,
  //     redirect_uri: KAKAO_REDIRECT_URI,
  //     code,
  //   };

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

    //axios.get() 메서드를 이용하여 사용자 정보를 가져오고, 필요한 정보를 userInfo 객체에 저장합니다.
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
/////////////////////////////////              모든걸 제외하고 code 들어오는지 확인
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

router.post("/login2", async (req, res) => {
  const { code } = req.body;
  console.log(code);
  res.status(400).send({ "받은 code은 잘 출력되나": code });
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////// 프론트 id   프론트 url
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
router.post("/login9", async (req, res) => {
  const { code } = req.body;

  console.log(code );
  const data = {
    grant_type: "authorization_code",
    client_id: "552308e28dcc9e6296fed9c2a196525e",
    redirect_uri: "http://localhost:3000/redirect/kakao",
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

    //axios.get() 메서드를 이용하여 사용자 정보를 가져오고, 필요한 정보를 userInfo 객체에 저장합니다.
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
    // console.error(error);

    res.status(400).send({ errorMsg: "카카오톡 로그인에 실패하였습니다." });
  }
});

module.exports = router;
