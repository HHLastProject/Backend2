require("dotenv").config();
// const AdminRepository = require('../repositories/admin.repository');
// const adminRepository = new AdminRepository();
const { Users } = require("../models");
const jwt = require("jsonwebtoken");
const Boom = require("boom");

module.exports = async (req, res, next) => {
  try {
    const authorization = req.headers.authorization;
    const [authType, token] = (authorization ?? "").split(" ");

    console.log("token 여기는 로그인이 필수가 아닙니다");
    console.log(token);
    console.log("=============");

   

    if(authorization) { 
      console.log("authorization 값이 있어서 생긴문제")
    } else {
      console.log("authorization 랑 관계없다")
    }

    if(!token){
      res.locals.user = null
      return next();
    }
    
    if (authorization) {
      const { id } = jwt.verify(token, "key");
      const user = await Users.findOne({ where: { id } });
      res.locals.user = user;
    } else { 
      res.locals.user = null;
    }

    next();
  } catch (error) {
    console.log(error);
  }
};
