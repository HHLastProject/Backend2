require("dotenv").config();
const { Users } = require("../models");
const jwt = require("jsonwebtoken");
const Boom = require("boom");
require("dotenv").config();

module.exports = async (req, res, next) => {
  try {
    const authorization = req.headers.authorization;
    const [authType, token] = (authorization ?? "").split(" ");

    if (token) {
      const { id } = jwt.verify(token, process.env.JWT_KEY);
      const user = await Users.findOne({ where: { id } });
      res.locals.user = user;
    } else {
      res.locals.user = null
      return next();
    }

    next();
  } catch (error) {
    console.log(error);
  }
};
