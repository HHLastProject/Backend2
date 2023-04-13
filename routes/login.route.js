const express = require("express");
const router = express.Router();
const LoginController = require("../controllers/login.controller");
const loginController = new LoginController();


const midle = require("../middlewares/snsAuthmiddleware");

router.get("/kakao", loginController.loginKakao);
router.get("/naver", loginController.loginNaver);
// router.post("/kakao", loginController.loginKakao);
// router.post("/naver", loginController.loginNaver);
router.get("/test",midle,loginController.test,)
module.exports = router;