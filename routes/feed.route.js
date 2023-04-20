
const express = require("express");
const router = express.Router();
const authMiddle = require("../middlewares/snsAuthmiddleware");
// const middle = require("../middlewares/snsMiddleware");   //★★★★★★ 프론트에서는 이거를 실행

const multer = require('multer');  // ★★★★★ 사용법 알아내기
const { upload } = require('../middlewares/multer');

const FeedController = require("../controllers/feed.controller");
const feedController = new FeedController();

//피드전체보기  
router.get("/feed",feedController.listsFeed)
//상세페이지  업체 피드 조회    
router.get("/shop/:shopId/feed",feedController.detailFeed)
//피드작성                       
// router.post("/shop/:shopId/feed",middle, upload.fields([{ name: 'thumbnail', maxCount: 1 },{ name: 'menuPictures'}]), feedController.postFeed);
// router.post("/shop/:shopId/feed",authMiddle, upload.fields([{ name: 'feedPic', maxCount: 1 }]), feedController.postFeed);
router.post("/shop/:shopId/feed",authMiddle, upload.single('feedPic'), feedController.postFeed);
router.post("/shop/:shopId/feed22",authMiddle, upload.single('feedPic'), feedController.postFeed22);
router.post("/shop/:shopId/feed2",authMiddle, upload.fields([{ name: 'feedPic', maxCount: 1 }]), feedController.postFeed2);






// 다중 파일 받는 형식
router.post('/shop/:shopId/feed4', upload.array('feedPic'), (ctx, next) => {
     console.log("ctx.request.body")
   console.log(ctx.request.body)
})

// 단일 파일 받는 형식
router.post('/shop/:shopId/feed5', upload.single('feedPic'), (ctx, next) => { 
    console.log("ctx.request ===========================================================")
    console.log(ctx.request)
    console.log("ctx.request.file ===========================================================")
    console.log(ctx.request.file)
    res.send(ctx.request.file)
});

// 복합 형식 받는 형식
router.post('/shop/:shopId/feed6', upload.fields([{ name: 'feedPic', maxCount: 1 }]), (abc, res, next) => { 
    console.log("===========================================================")
    console.log(abc.files)
    console.log("===========================================================")
    // console.log("ctx.request.file ===========================================================")
    // console.log(ctx.request.file)
    res.send("a")
});

// 복합 형식 받는 형식 (기존)
router.post('/shop/:shopId/feed7', upload.fields([{ name: 'feedPic', maxCount: 1 }]), (req, res, next) => { 
    console.log("==============================")
    console.log("[ ■ req.files]")
    console.log(req.files)
    // console.log("[ ■ req.files typeof] = " + typeof(req.files.feedPic[0].filename))
    // const feedPic = req.files.feedPic[0].filename;
    // console.log("[ ■ feedPic] = " + feedPic);
    console.log("==============================")
    res.send("a")
});


//피드수정(보류) 
//router.put("/shop/:shopId/feed/:feedId",feedController.test)


module.exports =router;