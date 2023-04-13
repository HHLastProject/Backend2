const {Users}= require("../models");


class LoginRepository {

    saveUser = async(resultUser) => { 
        // console.log("레파지토리입니다");
        // console.log(resultUser);
        // console.log("========================");
        
        const makeUser = await Users.create({
            userId : resultUser.id,
            email : resultUser.email,
            nickname : resultUser.nickname,
            gender : resultUser.gender,
        }); 
        return makeUser;
    };

    
}
module.exports = LoginRepository;