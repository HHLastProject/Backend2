require("dotenv").config();
// const AdminRepository = require('../repositories/admin.repository');
// const adminRepository = new AdminRepository();
const { Users } = require("../models");
const jwt = require("jsonwebtoken");
const Boom = require("boom");

module.exports = async (req, res, next) => {
  const label = "adminAuthmiddleware.js";
  try {
    const authorization = req.headers.authorization;
    const [authType, token] = (authorization ?? "").split(" ");

    console.log("token 여기는 로그인이 필수가 아닙니다");
    console.log(token);
    console.log("=============");

    if (authorization) {
      console.log("1")
      const { id } = jwt.verify(token, "key");
      console.log("2")
      const user = await Users.findOne({ where: { id } });
      console.log("3")
      res.locals.user = user;
    } else { 
      res.locals.user = null;
    }

    next();
  } catch (error) {
    console.log(error);
    // if (Boom.isBoom(error)) {
    //   res
    //     .status(error.output.statusCode)
    //     .json({ errorMessage: error.output.payload.message });
    // } else {
    //   res
    //     .status(403)
    //     .json({ errorMessage: "전달된 토큰에서 오류가 발생하였습니다." });
    // }
  }
};
