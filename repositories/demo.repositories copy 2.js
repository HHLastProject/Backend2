const {Users}= require("../models");


class 대문자이름Repository {

    saveUser = async(resultUser) => { 
        const boolean = await Users.findOne({where : {id : resultUser.id}});
    };

    
}
module.exports = 대문자이름Repository;