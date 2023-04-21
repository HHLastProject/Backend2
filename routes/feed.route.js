
const express = require("express");
const router = express.Router();
const authMiddle = require("../middlewares/snsAuthmiddleware");
 const middle = require("../middlewares/snsMiddleware");   //★★★★★★ 프론트에서는 이거를 실행

const multer = require('multer');  // ★★★★★ 사용법 알아내기
const { upload } = require('../middlewares/multer');

const FeedController = require("../controllers/feed.controller");
const feedController = new FeedController();

//피드전체보기  
router.get("/feed",middle,feedController.listsFeed)
//상세페이지  업체 피드 조회    
router.get("/shop/:shopId/feed",feedController.detailFeed)
router.get("/shop/:shopId/feed2",middle,feedController.detailShopFeed)
//피드작성                       
// router.post("/shop/:shopId/feed",middle, upload.fields([{ name: 'thumbnail', maxCount: 1 },{ name: 'menuPictures'}]), feedController.postFeed);
// router.post("/shop/:shopId/feed",authMiddle, upload.fields([{ name: 'feedPic', maxCount: 1 }]), feedController.postFeed);
router.post("/shop/:shopId/feed",authMiddle, upload.single('feedPic'), feedController.postFeed);
router.post("/shop/:shopId/feed22",authMiddle, upload.single('feedPic'), feedController.postFeed22);
router.post("/shop/:shopId/feed2",authMiddle, upload.fields([{ name: 'feedPic', maxCount: 1 }]), feedController.postFeed2);




//피드수정(보류) 
//router.put("/shop/:shopId/feed/:feedId",feedController.test)


module.exports =router;