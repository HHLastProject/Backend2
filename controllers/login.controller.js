const LoginServices = require("../services/login.service");

class LoginController {

  loginServices = new LoginServices();

  loginKakao = async (req, res, next) => {
    try {
      // const { code } = req.query;
      const {code} = req.headers

      console.log("code");
      console.log(code);
      console.log("================================");
      const resultToken = await this.loginServices.getKakaoToken(code);

      console.log("resultToken");
      console.log(resultToken);
      console.log("================================");

      const resultUser = await this.loginServices.getKaKaoUserInfo(resultToken);

      console.log("resultUser");
      console.log(resultUser);
      console.log("================================");

      //유저정보 저장
      // await this.loginServices.saveUser(resultUser);

      res.json({resultToken});
    } catch (err) {
      console.log(err);
      res.status(400).json({ errorMsg: "예기치 못한 오류가 발생했습니다" });
    }
  };

  loginNaver = async (req,res,next) => {
    try {
      // const { code } = req.query;
      const { code } = req.headers

      const resultToken = await this.loginServices.getNaverToken(code);
      const resultUser = await this.loginServices.getNaverUserInfo(resultToken);

      //유저정보저장
      // this.loginServices.saveUser(resultUser);
      res.json({resultToken});
    } catch (err) {
      console.log(err);
      res.status(400).json({ errorMsg: "예기치 못한 오류가 발생했습니다" });
    }
  };

  // saveUser = async () => {
  //   console.log("컨트롤러 입니다");
  //   const result = this.loginServices.saveUser();
  // };

  logintest = async (req,res,next)  => {
    try {
      const { code } = req.body;
      
      console.log("code");
      console.log(code);
      console.log("================================");
      const resultToken = await this.loginServices.getKakaoToken(code);

      console.log("resultToken");
      console.log(resultToken);
      console.log("================================");

      const resultUser = await this.loginServices.getKaKaoUserInfo(resultToken);

      console.log("resultUser");
      console.log(resultUser);
      console.log("================================");

      //유저정보 저장
      // await this.loginServices.saveUser(resultUser);

      res.json({resultToken});
    } catch (err) {
      console.log(err);
      res.status(400).json({ errorMsg: "예기치 못한 오류가 발생했습니다" });
    }

  }

}
module.exports = LoginController;
