require('dotenv').config();
const AdminRepository = require('../repositories/admin.repository');
const adminRepository = new AdminRepository();
const jwt = require("jsonwebtoken");
const Boom = require("boom");


module.exports = async (req, res, next) => {
    const label = "adminAuthmiddleware.js";
  try {

    console.log("req.headers.authorization");
    console.log(req.headers.authorization);
    console.log("=================================");
    const authorization = req.headers.authorization;
    const [authType, token] = (authorization ?? "").split(" ");

    console.log("authType");
    console.log(authType);
    console.log("token");
    console.log(token);
    console.log("=================================");

    if (authType !== "Bearer" || !token) {
      throw Boom.unauthorized("로그인 후에 이용할 수 있는 기능입니다.");
    }
    
    const { adminEmail } = jwt.verify(token, process.env.SECRET_KEY);
    const admin = await adminRepository.findOneAdmin(adminEmail);

    if (!admin) {
      throw Boom.unauthorized("사용자가 존재하지 않습니다.");
    }

    res.locals.admin = admin;
    next();
  } catch (error) {
    if (Boom.isBoom(error)) {
      res
        .status(error.output.statusCode)
        .json({ errorMessage: error.output.payload.message });
    } else {
      res
        .status(403)
        .json({ errorMessage: "전달된 토큰에서 오류가 발생하였습니다." });
    }
  }
};
