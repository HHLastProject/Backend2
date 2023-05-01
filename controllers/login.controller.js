const LoginServices = require("../services/login.service");
const jwt = require("jsonwebtoken");

const {Users}= require("../models");

class LoginController {
  loginServices = new LoginServices();

  loginKakao = async (req, res) => {
    try {
      // const { code } = req.query;       //백에서만 할때
      const { code } = req.body;        //프론트에 배포할때

      const resultToken = await this.loginServices.getKakaoToken(code);
      
      const resultUser = await this.loginServices.getKaKaoUserInfo(resultToken);

      //유저정보 저장
      await this.loginServices.saveUser(resultUser);

      const token = jwt.sign(
        { id :  resultUser.id },
        "key", //나중에 .env로 바꿔서 해야함
        );

      res.set("authorization", `Bearer ${token}`);  
      res.status(200).json({ "유저정보 jwt, 추후에 토큰 값은 해더로 보내지 않도록 수정": `Bearer ${token}`});
      // res.status(200).json({"msg" : "로그인 완료되었습니다"});
    } catch (err) {
      console.log(err);
      res.status(400).json({ errorMsg: "예기치 못한 오류가 발생했습니다" });
    }
  };



  loginNaver = async (req,res) => {
    try {
      // const { code } = req.query;     //백에서 할때
      const { code } = req.body    //프론트에서 할때

      console.log("=========================")
      console.log("code 프톤트에서 넘겨 받을때")
      console.log(code)
      console.log("=========================")
      //백에서 사용
      // const resultToken = await this.loginServices.getNaverToken(code);
      // const resultUser = await this.loginServices.getNaverUserInfo(resultToken);
    
      //프론트에서 사용
      // 현재 발급 받은 토큰이 유저 정보가 담긴 토큰인지 확인
      const resultUser = await this.loginServices.getNaverUserInfo(code);

      console.log("인가코드 받고 유저 값 보낼때")
      console.log(resultToken)
      

      //유저정보저장
      await this.loginServices.saveUser(resultUser);

      const token = jwt.sign(
        { id :  resultUser.id },
        "key",  //나중에 .env로 바꿔서 해야함
        );

      res.set("authorization", `Bearer ${token}`);  
      res.status(200).json({ "유저정보 jwt, 추후에 토큰 값은 해더로 보내지 않도록 수정": `Bearer ${token}`});
      // res.status(200).json({"msg" : "토큰발급"});
      } catch (err) {
      console.log(err);
      res.status(400).json({ errorMsg: "예기치 못한 오류가 발생했습니다" });
    }
  };

  //유저 정보 저장
  saveUser = async () => {
     this.loginServices.saveUser();
  };


  //미들웨어 작동하는지 검사
  test = async (req,res,next) => { 
    const {nickname, id} = res.locals.user

    console.log(nickname, id);
    return res.send(nickname)
  }

}
module.exports = LoginController;
