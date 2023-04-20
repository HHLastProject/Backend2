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
   

   console.log("=====================================")
   console.log("req.file")
   console.log(req.file)
   console.log("=====================================")
   console.log("shopId = " + shopId);
   console.log("comment = " + comment);
   console.log("userId = " + userId);
   console.log("tags = " + tags);
   console.log("=====================================")

   
    // 썸네일 메인 사진을 0번째 껄로 선택한다
    const feedPic = await req.file.filename;
    console.log("feedPic")
    console.log(feedPic)
    // const jsonTags = JSON.parse(tags)

    const createFeed = await this.feedService.feedPost(
      userId,
      shopId,
      comment,
      // jsonTags,
      feedPic 
    );
    //shopId값 가져오기
    // this.feedService.feedDetail
    //입력 받은값 저장/확인

    res.send("완료");
  };

/*
  postFeed = async (req, res, next) => {
    const { shopId } = req.params;
    const {comment, tags } = req.body;
    const { userId } = res.locals.user;
   
   console.log("=====================================")
  //  console.log("req")
  //  console.log(req)
   console.log("=====================================")
   console.log("req.file")
   console.log(req.file)
   console.log("=====================================")
  //  console.log("shopId = " + shopId);
  //  console.log("comment = " + comment);
  //  console.log("userId = " + userId);
  //  console.log("tags = " + tags);
  //  console.log("=====================================")

    //멀터 사용해보기
    // 썸네일 메인 사진을 0번째 껄로 선택한다
    const feedPic = await req.file;
    const jsonTags = JSON.parse(tags)
    console.log(feedPic)

    // const createFeed = await this.feedService.feedPost(
    //   userId,
    //   shopId,
    //   comment,
    //   jsonTags,
    //   feedPic 
    // );
    //shopId값 가져오기
    // this.feedService.feedDetail
    //입력 받은값 저장/확인

    res.send("완료");
  };
*/

  postFeed22  = async (req, res, next) => { 
    const { shopId } = req.params;
    const {comment, tags } = req.body;
    const { userId } = res.locals.user;
   
   console.log("shopId = " + shopId);
   console.log("comment = " + comment);
   console.log("userId = " + userId);
   console.log("tags = " + tags);
   console.log("req.file")
   console.log(req.file)
   
   res.send("ghs")
  }


  postFeed2 = async (req, res, next) => {
    const { shopId } = req.params;
    const {comment, tags } = req.body;
    const { userId } = res.locals.user;
   
   console.log("shopId = " + shopId);
   console.log("comment = " + comment);
   console.log("userId = " + userId);

  //  console.log(feedPic.get('feedPic'))
   
    // console.log("==============================")
    // console.log("[ ■ req.files] = " + typeof(req.files))
    // console.log("[ ■ req.files]")
    // console.log("req")
    // console.log(req)
    console.log("==============================")
    console.log("req.files")
    console.log(req.files)
    console.log("==============================")
    console.log("여기는 사진 추출")
    console.log("[ ■ req.files.feedPic[0].filename ] = "  + req.files.feedPic[0].filename)
    // console.log("[ ■ req.files typeof] = " + typeof(req.files.feedPic[0].filename))
    
    // console.log("tags = " + tags);
    console.log("==============================")
    
    res.send("완료")
  }

}

module.exports = FeedController;
