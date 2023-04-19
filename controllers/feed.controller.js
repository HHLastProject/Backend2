const FeedService = require("../services/feed.service");

const bcrypt = require("bcrypt");
const Joi = require("joi");
const multer = require("multer");

class FeedController {
  feedService = new FeedService();

  listsFeed = async (req, res, next) => {
    const feedFindAll = await this.feedService.feedFindAll();
    res.send(feedFindAll);
  };

  detailFeed = async (req, res, next) => {
    const { shopId } = req.params;
    await this.feedService.shopFindOne(shopId);
    const value = await this.feedService.feedFindOne(shopId);
    res.send(value);
  };

  postFeed = async (req, res, next) => {
    const { shopId } = req.params;
    const {comment, tags } = req.body;
    const { userId } = res.locals.user;
   
   console.log("shopId = " + shopId);
   console.log("comment = " + comment);
   console.log("userId = " + userId);
   
    //멀터 사용해보기
    // 썸네일 메인 사진을 0번째 껄로 선택한다
    const feedPic = await req.files.feedPic[0].filename;
    const jsonTags = JSON.parse(tags)

    const createFeed = await this.feedService.feedPost(
      userId,
      shopId,
      comment,
      jsonTags,
      feedPic 
    );
    //shopId값 가져오기
    // this.feedService.feedDetail
    //입력 받은값 저장/확인

    res.send("완료");
  };


  postFeed2 = async (req, res, next) => {
    const { shopId } = req.params;
    const {comment, tags } = req.body;
    const { userId } = res.locals.user;
   
   console.log("shopId = " + shopId);
   console.log("comment = " + comment);
   console.log("userId = " + userId);
   
    console.log("==============================")
    console.log("[ ■ req.files] = " + typeof(req.files))
    console.log("[ ■ req.files]")
    console.log(req.files)

    console.log("여기는 사진 추출")

    console.log("[ ■ req.files typeof] = " + typeof(req.files.feedPic[0].filename))
    console.log("[ ■ req.feedPic]")
    console.log(req.feedPic)
    const feedPic = await req.files.feedPic[0].filename;
    console.log("[ ■ feedPic] = " + feedPic);
    console.log("tags = " + tags);
    console.log("==============================")
    
    res.send("완료")
  }


  postFeed3 = async (req, res, next) => { 
    const { shopId } = req.params;
    const {comment, tags } = req.body;
    const { userId } = res.locals.user;
   
   console.log("shopId = " + shopId);
   console.log("comment = " + comment);
   console.log("userId = " + userId);
   console.log("tags = " + tags);

    console.log("==============================")
    console.log("[ ■ req.feedPic]")
    console.log(req.feedPic)
    console.log("==============================")
    
    res.send("완료")
  
  }


}

module.exports = FeedController;
