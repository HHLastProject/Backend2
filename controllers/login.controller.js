const LoginServices = require("../services/login.service");
const jwt = require("jsonwebtoken");

const {Users}= require("../models");

// reuqire
class LoginController {

  loginServices = new LoginServices();

  loginKakao = async (req, res, next) => {
    try {
      const { code } = req.query;   //백에서만 할때
      // const {code} = req.body         //프론트에 배포할때

       const resultToken = await this.loginServices.getKakaoToken(code);

      const resultUser = await this.loginServices.getKaKaoUserInfo(resultToken);

      //유저정보 저장
      await this.loginServices.saveUser(resultUser);

      const token = jwt.sign(
        { 
          id :  resultUser.id,
        },
        "key",
        );

      res.set("authorization", `Bearer ${token}`);  
      res.status(200).json({ "유저정보 jwt": `Bearer ${token}`});
     
     //프론트에게 돌려주어야 한값 
      // res.set("authorization", `Bearer ${userData}`);
      // res.status(200).json({"msg" : userData});
    } catch (err) {
      console.log(err);
      res.status(400).json({ errorMsg: "예기치 못한 오류가 발생했습니다" });
    }
  };



  loginNaver = async (req,res,next) => {
    try {
      // const { code } = req.query;
      const { code } = req.body

      // const resultToken = await this.loginServices.getNaverToken(code);
     
      // const resultUser = await this.loginServices.getNaverUserInfo(resultToken);
      

     


      // 현재 발급 받은 토큰이 유저 정보가 담긴 토큰인지 확인
      const resultUser = await this.loginServices.getNaverUserInfo(code);
      
      console.log("resultUser");
      console.log(resultUser);
      console.log("================================");

      //유저정보저장
      // this.loginServices.saveUser(resultUser);

      // res.set("authorization", `${resultToken}`)
      // res.status(200).json({"msg" : "토큰발급"});

      const userData = jwt.sign(
        { 
          id :  resultUser.id,
        },
        "key",
        );


      res.set("authorization", `Bearer ${userData}`);  
      res.status(200).json({ "유저정보 jwt": " id 를 보냈습니다"});
      } catch (err) {
      console.log(err);
      res.status(400).json({ errorMsg: "예기치 못한 오류가 발생했습니다" });
    }
  };

  saveUser = async () => {
    console.log("컨트롤러 입니다");
    const result = this.loginServices.saveUser();
  };


  test = async (req,res,next) => { 
    console.log("==============================");
    const {nickname, id} = res.locals.user

    console.log(nickname, id);
    return res.send(nickname)
  }

}
module.exports = LoginController;
