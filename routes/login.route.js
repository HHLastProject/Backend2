const express = require("express");
const router = express.Router();
const LoginController = require("../controllers/login.controller");
const loginController = new LoginController();

router.post("/loginKakao", loginController.loginKakao);
// router.get("/loginKakao", loginController.loginKakao);
router.get("/loginNaver", loginController.loginNaver);
router.post("/logintest", loginController.logintest);
module.exports = router;