const {Users}= require("../models");


class LoginRepository {

    saveUser = async(resultUser) => { 
        const boolean = await Users.findOne({where : {id : resultUser.id}});

        if(!boolean){
            await Users.create({
            id : resultUser.id,
            email : resultUser.email,
            profilePic : resultUser.profilePic, //이름 바꿔야햄
            nickname : resultUser.nickname,
            gender : resultUser.gender,
        }); 
    }
       
    };

    
}
module.exports = LoginRepository;