const LoginRepository = require("../repositories/login.repositories.js");
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

  getKakaoToken = async (code,redirectURL) => {
    console.log("서비스 입니다");
    
    const data = {
      grant_type: "authorization_code",
      client_id: KAKAO_CLIENT_ID,  
      redirect_uri: redirectURL, 
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
   
    const { access_token } = responseToken.data;

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

    // 유저 정보 저장하기
    const userInfo = {
      id,
      profilePic : properties.profile_image, 
      nickname : properties.nickname,
      gender : kakao_account.gender,
      email : kakao_account.email
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


      const response = await axios.post('https://nid.naver.com/oauth2.0/token', qs.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
      });
  

      const { access_token } = response.data;
      
      if (!access_token) {
        return res.status(401).send({"errorMsg" : '로그인이 필요합니다.'});
      }

      return access_token;
  };

  getNaverUserInfo = async (code) => {
    console.log("서비스 입니다");

    const meResponse = await axios.get('https://openapi.naver.com/v1/nid/me', {
      headers: {
        Authorization: `Bearer ${code}`,
      },
    });


    const { response } = meResponse.data; 

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
      profilePic : response.profile_image, 
      age : response.age,
      email : response.email,
      gender : gender,
      
    }


    return result;
  };

  saveUser = async (resultUser) => {
    const userData = await this.loginRepository.saveUser(resultUser);

    if(userData) { 
      let UserId = userData.userId
      await this.loginRepository.creatFolder(UserId)
    }

  };
}
module.exports = LoginService;
