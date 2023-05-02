const express = require("express");
const router = express.Router();

const LikeController = require("../controllers/like.controller");
const likeController = new LikeController();
const authMiddle = require("../middlewares/snsAuthmiddleware");

// 피드 좋아요 기능 API
// localhost:3060/api/feed/:feedId/like
router.put("/feed/:feedId/like",authMiddle,likeController.updateLike)



module.exports = router;