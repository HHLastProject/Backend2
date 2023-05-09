require('dotenv').config();
const { Users } = require("../models");
const jwt = require("jsonwebtoken");
const Boom = require("boom");
require("dotenv").config();

module.exports = async (req, res, next) => {
  try {
    const authorization = req.headers.authorization;
    const [authType, token] = (authorization ?? "").split(" ");

    if (authType !== "Bearer" || !token) {
      req.status(200).json("비로그인")
      next();
    }

    const { id} = jwt.verify(token, process.env.JWT_KEY);
    const user = await Users.findOne( {where: {id}});

    if (!user) {
      throw Boom.unauthorized("사용자가 존재하지 않습니다.");
    }

    res.locals.user = user;
    next();
  } catch (error) {
    console.log(error)
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
