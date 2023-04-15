const express = require("express");
const router = express.Router();

const MypageController = require("../controllers/mypage.controller");
const mypageController = new MypageController();
const midle = require("../middlewares/snsAuthmiddleware");

// 마이페이지 전체조회 API
// localhost:3060/api/mypage
router.get("/mypage", midle, mypageController.getAllMypage)
// 마이페이지 상세조회 API
// localhost:3060/api/mypage/:feedId
router.get("/mypage/:feedId", midle, mypageController.getOneMypage)
// 마이페이지 피드삭제 API
// localhost:3060/api/mypage/:feedId
router.delete("/mypage/:feedId", midle, mypageController.deleteMypage)



module.exports = router;