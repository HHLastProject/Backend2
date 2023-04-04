// module.exports = UserRepository;
const {Users}= require("../models");
const jwt = require('jsonwebtoken');

class UserRepository {

    signupUser = async({  email, nickname, password, gender }) => { 
        console.log("레파지토리입니다");
        const makeUser= await Users.create({
            email,
            nickname,
            password,
            gender,
        });

        return makeUser;

    };


    loginUser = async({  email }) => { 
        console.log("레파지토리입니다");

        const findUser= await Users.findOne({
        
        attributes: ['email', "nickname"],
        where : {
            email : email
        }
        
    });

        return findUser;

    }; 

}
module.exports = UserRepository;