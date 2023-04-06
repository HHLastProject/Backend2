const express = require("express");
const router = express.Router();

const userRouter = require("./user.route");
const shopRouter = require("./shop.route");
const adminRouter = require('./admin.route');
const kakaoRouter = require('./kakao.route');
const naverRouter = require('./naver.route');
const loginRouter = require('./login.route');

router.use("/api/users", userRouter);
router.use("/api/shop", shopRouter);
router.use('/api/admin', adminRouter);
router.use('/api/kakao', kakaoRouter);
router.use('/api/naver', naverRouter);
router.use('/api/login', loginRouter);

module.exports = router;
