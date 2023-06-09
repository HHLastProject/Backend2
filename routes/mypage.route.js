const express = require("express");
const router = express.Router();

const MypageController = require("../controllers/mypage.controller");
const mypageController = new MypageController();
const authMiddle = require("../middlewares/snsAuthmiddleware");

// 마이페이지 전체조회 API
router.get("/mypage", authMiddle, mypageController.getAllMypage)
// 마이페이지 상세조회 API
router.get("/mypage/:feedId", authMiddle, mypageController.getOneMypage)
// 마이페이지 피드삭제 API
router.delete("/mypage/:feedId", authMiddle, mypageController.deleteMypage)
// 마이페이지 닉네임 변경 API
router.patch("/mypage/change/nickname",authMiddle,mypageController.patchNickname)



module.exports = router;