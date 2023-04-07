const express = require("express");
const router = express.Router();


const shopRouter = require("./shop.route");
const adminRouter = require('./admin.route');
const kakaoRouter = require('./kakao.route');
const naverRouter = require('./naver.route');
const loginRouter = require('./login.route');

router.use("/api/shop", shopRouter);
router.use('/api/admin', adminRouter);
router.use('/api/login', loginRouter);

module.exports = router;
