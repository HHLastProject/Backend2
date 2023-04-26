const express = require("express");
const router = express.Router();


const shopRouter = require("./shop.route");
const adminRouter = require('./admin.route');
const loginRouter = require('./login.route');
const feedRouter = require('./feed.route');
const mypageRouter = require('./mypage.route');
const searchRouter = require('./search.route');
const scrapRouter = require('./scrap.route');
const favoriteRouter = require('./favorite.route');
const likeRouter = require('./like.route');

router.use("/api/shop", shopRouter);
router.use('/api/admin', adminRouter);
router.use('/api/login', loginRouter);
router.use("/api", feedRouter,mypageRouter,searchRouter,scrapRouter,favoriteRouter,likeRouter);

const tempRouter = require('./temp.js');
router.use('/api/temp', tempRouter);

module.exports = router;
