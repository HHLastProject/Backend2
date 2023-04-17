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


  //썸내일 바꾸기전 
  // postFeed = async (req, res, next) => {
  //   const { shopId } = req.params;
  //   const { feedPic, comment, tags } = req.body;
  //   const { userId } = res.locals.user;
   
   
  //   //멀터 사용해보기
  //   // 썸네일 메인 사진을 0번째 껄로 선택한다
  //   const thumbnailFilename = await req.files.thumbnail[0].filename;
  //   const thumbnail = thumbnailFilename;
  //   console.log("thumbnailFilename");
  //   console.log(thumbnailFilename);
  //   console.log("===================");
  //   //배열로 받기로 수정
  //   const jsonTags = JSON.parse(tags)



  //   const createFeed = await this.feedService.feedPost(
  //     userId,
  //     shopId,
  //     feedPic,
  //     comment,
  //     jsonTags,
  //     thumbnail  // 멀터사용
  //   );
  //   //shopId값 가져오기
  //   // this.feedService.feedDetail
  //   //입력 받은값 저장/확인

  //   res.send("완료");
  // }; 
  
}

module.exports = FeedController;
