const express = require("express");
const router = express.Router();
const LoginController = require("../controllers/login.controller");
const loginController = new LoginController();

router.post("/kakao", loginController.loginKakao);
router.post("/naver", loginController.loginNaver);
module.exports = router;