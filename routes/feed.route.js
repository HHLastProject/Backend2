const multer = require('multer');
const express = require("express");
const router = express.Router();
const middle = require("../middlewares/snsAuthmiddleware");

const { upload } = require('../middlewares/multer');

const FeedController = require("../controllers/feed.controller");
const feedController = new FeedController();


//피드전체보기  
router.get("/feed",feedController.listsFeed)
//상세페이지  업체 피드 조회    
router.get("/shop/:shopId/feed",feedController.detailFeed)
//피드작성                       
// router.post("/shop/:shopId/feed",middle, upload.fields([{ name: 'thumbnail', maxCount: 1 },{ name: 'menuPictures'}]), feedController.postFeed);
router.post("/shop/:shopId/feed",middle, upload.fields([{ name: 'feedPic', maxCount: 1 }]), feedController.postFeed);
//피드수정(보류) 
//router.put("/shop/:shopId/feed/:feedId",feedController.test)


module.exports =router;