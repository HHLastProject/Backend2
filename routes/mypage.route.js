const express = require("express");
const router = express.Router();

const MypageController = require("../controllers/mypage.controller");
const mypageController = new MypageController();
const midle = require("../middlewares/snsAuthmiddleware");

//피드전체보기  
router.get("/feed",mypageController.test)
//상세페이지  업체 피드 조회    
router.get("/shop/:shopId/feed",mypageController.test)
//피드작성                       
router.post("/shop/:shopId/feed",mypageController.test)



module.exports =router;