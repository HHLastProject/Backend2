require('dotenv').config();
const AdminRepository = require('../repositories/admin.repository');
const adminRepository = new AdminRepository();
const jwt = require("jsonwebtoken");
const Boom = require("boom");


module.exports = async (req, res, next) => {
    const label = "adminAuthmiddleware.js";
  try {
    const authorization = req.headers.authorization;
    const [authType, token] = (authorization ?? "").split(" ");

    if (authType !== "Bearer" || !token) {
        return res.status(403).json({
          errorMsg : "로그인 후에 이용할 수 있는 기능입니다.",
        });
      }
    
    const { adminEmail } = jwt.verify(token, process.env.SECRET_KEY);
    const admin = await adminRepository.findOndAdmin(adminEmail);

    if (!admin) {
      res.status(401).json({ errorMsg: "사용자가 존재하지 않습니다." });
      return;
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
