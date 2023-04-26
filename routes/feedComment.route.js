const express = require("express");
const router = express.Router();

const FeedCommentController = require("../controllers/feedcomment.controller");
const feedCommentController = new FeedCommentController();
const authMiddle = require("../middlewares/snsAuthmiddleware");
const middle = require("../middlewares/snsMiddleware")

// 피드페이지 댓글 작성 API
// localhost:3060/api/feed/comment/:feedId
router.post('/feed/comment/:feedId',authMiddle,feedCommentController.postFeedComment)

// 피드페이지 댓글 조회 API
// localhost:3060/api/feed/comment/:feedId
router.get('/feed/comment/:feedId',middle,feedCommentController.getAllFeedComment)

// 피드페이지 댓글 삭제 API
// localhost:3060/api/feed/comment/:feedId
router.delete('/feed/comment/:feedId/:feedCommentId',authMiddle,feedCommentController.deleteFeedComment)


module.exports = router;