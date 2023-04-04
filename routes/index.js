const express = require("express");
const router = express.Router();

const userRouter = require("./user.route");
const shopRouter = require("./shop.route");
const adminRouter = require('./admin.route');
const kakaoRouter = require('./kakao.route');
const naverRouter = require('./naver.route');

router.use("/users", userRouter);
router.use("/shop", shopRouter);
router.use('/admin', adminRouter);
router.use('/kakao', kakaoRouter);
router.use('/naver', naverRouter);

module.exports = router;
