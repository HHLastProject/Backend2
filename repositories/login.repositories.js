const {Users,Folders}= require("../models");


class LoginRepository {

    saveUser = async(resultUser) => { 
        const boolean = await Users.findOne({where : {id : resultUser.id}});

        let userData = null

        if(!boolean){
            userData = await Users.create({
            id : resultUser.id,
            email : resultUser.email,
            profilePic : resultUser.profilePic, //이름 바꿔야햄
            nickname : resultUser.nickname,
            gender : resultUser.gender,
        })}
    return userData
    };

    creatFolder = async(UserId) => { 
        Folders.create({
            UserId,
            folderName : "즐겨찾기"
        })
    }


}
module.exports = LoginRepository;