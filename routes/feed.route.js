
const express = require("express");
const router = express.Router();
const authMiddle = require("../middlewares/snsAuthmiddleware");
 const middle = require("../middlewares/snsMiddleware");   

const multer = require('multer'); 
const { upload } = require('../middlewares/multer');

const FeedController = require("../controllers/feed.controller");
const feedController = new FeedController();

//피드전체보기  
router.get("/feed",middle,feedController.listsFeed)

//상세페이지  업체 피드 조회    
// router.get("/shop/:shopId/feed",feedController.detailFeed)
 
router.get("/shop/:shopId/feed2",middle,feedController.detailShopFeed)

//피드작성                       
router.post("/shop/:shopId/feed",authMiddle, upload.single('feedPic'), feedController.postFeed);


module.exports = router;