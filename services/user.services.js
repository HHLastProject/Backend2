const UserRepository = require('../repositories/user.repositories');


class UserService { 

    userRepository = new UserRepository

    signupUser = async ({email,password, nickname,gender } ) => { 
        console.log("서비스 입니다");
        const result = await this.userRepository.signupUser({
            email,
            password,
            nickname,
            gender
        });

       return result
    };


    loginUser = async ({email,password } ) => { 
        console.log("서비스 입니다");
        const result = await this.userRepository.loginUser({email}); 

   
        if(!result) { 
            console.log("유저가 존재하지 않습니다"); 
        }
 
        return result
    };


} 



module.exports = UserService;