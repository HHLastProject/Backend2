const express = require("express");
const router = express.Router();

const FeedController = require("../controllers/feed.controller");
const feedController = new FeedController();
const midle = require("../middlewares/snsAuthmiddleware");

//피드전체보기  
router.get("/feed",feedController.test)
//상세페이지  업체 피드 조회    
router.get("/shop/:shopId/feed",feedController.test)
//피드작성                       
router.post("/shop/:shopId/feed",feedController.test)

//피드수정(보류) 
//router.put("/shop/:shopId/feed/:feedId",feedController.test)


module.exports =router;