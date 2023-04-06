const LoginRepository = require("../repositories/login.repositories.js");

// 
const qs = require("querystring");
const axios = require("axios");

//env 파일 
require("dotenv").config();
const KAKAO_CLIENT_ID = process.env.KAKAO_CLIENT_ID;
const KAKAO_REDIRECT_URI = process.env.KAKAO_REDIRECT_URI;
const NAVER_CLIENT_ID = process.env.NAVER_CLIENT_ID
const NAVER_CLIENT_SECRET = process.env.NAVER_CLIENT_SECRET
const NAVER_REDIRECT_URI = encodeURI(process.env.NAVER_REDIRECT_URI); 


class LoginService {
  loginRepository = new LoginRepository();

  getKakaoToken = async (code) => {
    console.log("서비스 입니다");
    
    const data = {
      grant_type: "authorization_code",
      client_id: KAKAO_CLIENT_ID,  
      redirect_uri: KAKAO_REDIRECT_URI, 
      code,
    };

    const responseToken = await axios.post(
      "https://kauth.kakao.com/oauth/token",
      qs.stringify(data),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        },
      }
    );
   
    console.log("1번 responseToken.data");
    console.log(responseToken.data);
    console.log("================================");

    const { access_token } = responseToken.data;
    // req.session.accessToken = access_token;   //이게 어떠한 기능인지 알아보기


    console.log("2번 access_token");
    console.log(access_token);
    console.log("================================");


    if (!access_token) {
      return res.status(401).send({ errorMsg: "로그인이 필요합니다." });
    }

    return access_token;

  };

  getKaKaoUserInfo = async (resultToken) => {

    const responseUser = await axios.get("https://kapi.kakao.com/v2/user/me", {
      headers: {
        Authorization: `Bearer ${resultToken}`,
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

    return userInfo;
  };

  getNaverToken = async (code) => {
    const data = {
      grant_type: 'authorization_code',
      client_id : NAVER_CLIENT_ID,
      client_secret :NAVER_CLIENT_SECRET,
      redirectURI : NAVER_REDIRECT_URI,
      code,
      state: 'naver',
    };
  
    console.log("1번 data");
    console.log(data);
    console.log("================================");

      const response = await axios.post('https://nid.naver.com/oauth2.0/token', qs.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
      });
  
      console.log("2번 response");
      console.log(response.data);
      console.log("================================");


      const { access_token } = response.data;
      
      if (!access_token) {
        return res.status(401).send({"errorMsg" : '로그인이 필요합니다.'});
      }

      return access_token;
  };

  getNaverUserInfo = async (resultToken) => {
    console.log("서비스 입니다");

    const meResponse = await axios.get('https://openapi.naver.com/v1/nid/me', {
      headers: {
        Authorization: `Bearer ${resultToken}`,
      },
    });

    console.log("1번 meResponse");
    console.log(meResponse.data);
    console.log("===============================");

    const { response } = meResponse.data; 

    console.log("2번 response");
    console.log(response);
    console.log("===============================");

    let gender = "male"
    if(response.gender == "M"){ 
      gender = "male"
    } else { 
      gender = "women"
    }

    const result = { 
      //원하는 정보만 얻고 싶을때 
      id : response.id,
      nickname : response.nickname,
      age : response.age,
      gender : gender,
      email : response.email,
    }


    return result;
  };

  saveUser = async (resultUser) => {
    console.log("서비스 입니다");
    return this.loginRepository.saveUser(resultUser);
  };
}
module.exports = LoginService;
