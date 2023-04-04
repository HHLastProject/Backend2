const express = require("express");
const router = express.Router();
const authLoginMiddleware = require("../middlewares/auth-middleware");
const UserController = require("../controllers/user.controllers");
const userController = new UserController();

// 회원가입
router.post("/signup", userController.userSignup);

// 로그인
router.post("/login", userController.userLogin);

router.get("/checkMiddleware",authLoginMiddleware, userController.checkMiddleware);

// // 로그 아웃
// router.get("/logout", userController.userlogout);

// // 회원 조회
// router.get("/allUsers", userController.getAllusers);


// 소셜 로그인에서 가져온것



module.exports = router;
