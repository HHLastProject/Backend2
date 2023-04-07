const LoginServices = require("../services/login.service");
const jwt = require("jsonwebtoken");

class LoginController {

  loginServices = new LoginServices();

  loginKakao = async (req, res, next) => {
    try {
      // const { code } = req.query;
      const {code} = req.body

      // console.log("code");
      // console.log(code);
      // console.log("================================");
       const resultToken = await this.loginServices.getKakaoToken(code);

      console.log("resultToken");
      console.log(resultToken);
      console.log("================================");

      const resultUser = await this.loginServices.getKaKaoUserInfo(resultToken);

      console.log("resultUser");
      console.log(resultUser);
      console.log("================================");

      // //유저정보 저장
      // // await this.loginServices.saveUser(resultUser);

      const userData = jwt.sign(
        { 
          id :  resultUser.id,
        },
        "key",
        );

      res.set("authorization", `Bearer ${userData}`);  
      res.status(200).json({ "유저정보 jwt": " id 를 보냈습니다"});
      // res.set("authorization", `Bearer ${resultToken}`);
      // res.status(200).json({"msg" : resultToken});
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

  // saveUser = async () => {
  //   console.log("컨트롤러 입니다");
  //   const result = this.loginServices.saveUser();
  // };

}
module.exports = LoginController;
