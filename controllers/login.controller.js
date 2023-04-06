const LoginServices = require("../services/login.service");
class LoginController {

  loginServices = new LoginServices();

  // loginKakao = async (req, res, next) => {
  //   try {
  //     // const { code } = req.query;
  //     // const {code} = req.body

  //     // console.log("code");
  //     // console.log(code);
  //     // console.log("================================");
  //     // const resultToken = await this.loginServices.getKakaoToken(code);

  //     // console.log("resultToken");
  //     // console.log(resultToken);
  //     // console.log("================================");

  //     // const resultUser = await this.loginServices.getKaKaoUserInfo(resultToken);

  //     // console.log("resultUser");
  //     // console.log(resultUser);
  //     // console.log("================================");

  //     // //유저정보 저장
  //     // // await this.loginServices.saveUser(resultUser);

  //     /*
  //         const { accountId, password, secretKey } =req.body; //joi 빼기
  //     // console.log(accountId, password, secretKey);
  //     const adminUser = await this.AdminService.adminLogin(
  //       accountId,
  //       password,
  //       secretKey
  //     );
      
  //     const token = jwt.sign(
  //       { accountId: adminUser.accountId },
  //       env.SECRET_KEY,
  //       { expiresIn: "2H" }
  //     );

  //     res.header("token", token); //토큰값을  body가 아닌 해더에 보내준다 
  // */

    
  //     // res.header("accessToken", code)
  //     // res.set("authorization", `${code}`);


  //       // res.set('authorization', `Bearer ${result.token}`);
  //     const {code} = req.body
  //     console.log(code);
  //     // res.set('authorization', `Bearer ${result.token}`);
  //     res.set("authorization", `${code}`);
  //     res.status(200).json({"완료" : "완료"});
  //     // res.status(200).headers.json({resultToken});
  //   } catch (err) {
  //     console.log(err);
  //     res.status(400).json({ errorMsg: "예기치 못한 오류가 발생했습니다" });
  //   }
  // };


  loginKakao = async (req, res, next) => {
    try {
      // const { code } = req.query;
      const {code} = req.body

      console.log("code");
      console.log(code);
      console.log("================================");
       const resultToken = await this.loginServices.getKakaoToken(code);

      // console.log("resultToken");
      // console.log(resultToken);
      // console.log("================================");

      // const resultUser = await this.loginServices.getKaKaoUserInfo(resultToken);

      // console.log("resultUser");
      // console.log(resultUser);
      // console.log("================================");

      // //유저정보 저장
      // // await this.loginServices.saveUser(resultUser);

      res.set("authorization", `${resultToken}`);
      res.status(200).json({"완료" : "완료"});
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
