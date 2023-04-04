const UserService = require("../services/user.services.js");  
const jwt = require('jsonwebtoken');                    
const axios = require('axios');

class UsersController { 

    userService = new UserService();

    userSignup = async (req, res, next) => { 
        const {email,password, nickname, gender } = req.body; 
        
        console.log("email = " , email);
        
        const result = await this.userService.signupUser({
            email,
            password,
            nickname,
            gender
        });

        res.status(200).json({ msg: "회원가입 성공" });

    };


    userLogin  = async (req, res, next) => { 
        console.log("컨트롤러 입니다");

        const {email,password} = req.body; 
        const result = await this.userService.loginUser({
            email,
            password
        });


        const token = jwt.sign(
            { nickname: result.nickname, email: result.email },
            process.env.SECRET_KEY
        ); 

        res.header("authorization", token); //토큰값을  body가 아닌 해더에 보내준다

        const { authorization } = req.headers;
        console.log("===================================");
        console.log("authorization = ", authorization);


        // res.cookie("token", `Bearer ${token}`);

        
        return  res.json({"result" : result});
    };

    checkMiddleware = async (req, res, next) => { 
        console.log("미들웨어 확인용");
        const { userId} = res.locals.user;   

        return  res.json({"uesrId" : userId});
    };

    userSingupKaKao = async (req, res, next) => { 
    
        const { code } = req.query;

        const data = {
          grant_type: 'authorization_code',
          client_id: KAKAO_CLIENT_ID,
          redirect_uri: KAKAO_REDIRECT_URI,
          code,
        };
      
        try {
          const response = await axios.post('https://kauth.kakao.com/oauth/token', qs.stringify(data), {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
            },
          });
       
          const { access_token: accessToken } = response.data;
        
          req.session.accessToken = accessToken;
    
          res.status(200).json({accessToken});
      
        } catch (error) {
          console.error(error);
          res.status(400).send('카카오톡 로그인에 실패하였습니다.');
        }





        
    };
}


module.exports = UsersController;