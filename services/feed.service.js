const FeedRepository = require("../repositories/feed.repositories");
const {Scrap,Feeds}= require("../models");


class FeedService {
  feedRepository = new FeedRepository();
 
//전체 피드 가져오기
  feedFindAll = async () => {
    console.log("서비스 입니다");
     const value = await this.feedRepository.findByFeed();

      const result = await Promise.all(value.map(async (feed) => {
      
        const {Shop,Tegs,User } = feed;

       let data = await Scrap.findOne({
          where : {ShopId : Shop.shopId, UserId : User.userId }
       })

      data ? data = true : data = false

      return {
        nickname : User.nickname,
        profilePic : User.profilePic,
        createdAt : feed.createdAt,
        feedPic: feed.feedPic,
        comment : feed.comment,
        tag : Tegs.map((value) => ({ tag: value.tag })) ,
        shopName : Shop.shopName,
        shopAddress : Shop.address,
        shopThumbnail : Shop.thumbnail,
        isScrap : data
      }
    }));


    return result
  };

//하나의 가게를 가져오기
shopFindOne = async (shopId) => {
    console.log("서비스 입니다");
   
    return this.feedRepository.findOneByShop(shopId);
  };

//하나의 피드 가져오기
feedFindOne = async (shopId) => {
    console.log("서비스 입니다");
    let value = await this.feedRepository.findOneByShop(shopId);

    console.log(value);
    let data = await Scrap.findOne({where :{ UserId : value.User.userId, ShopId : value.Shop.shopId}})
    
    data ? data = true : data = false

    let result ={
      nickname : value.User.nickname,
        profilePic : value.User.profilePic,
        createdAt : value.createdAt,
        feedPic: value.feedPic,
        comment : value.comment,
        tag : value.Tegs.map((value) => ({ tag: value.tag })) ,
        shopName : value.Shop.shopName,
        shopAddress : value.Shop.address,
        shopThumbnail : value.Shop.thumbnail,
        isScrap : data
    } 

    console.log(result)


    return result
  };

//피드 작성하기
  feedPost = async (userId,shopId,feedPic,comment,jsonTags,thumbnail) => {
    console.log("서비스 입니다");
    
    const feed = await this.feedRepository.postFeed(userId,shopId,feedPic,comment,thumbnail);
    console.log("여기가 문제일텐데")
    console.log(jsonTags);
    console.log("jsonTags " + jsonTags);
    console.log(jsonTags.length)
    console.log("=======================")
    for(let i =0; i < jsonTags.length; i++){
      let tag = jsonTags[i]
      tag = jsonTags[i].tag
      this.feedRepository.postTag(feed,tag);
    }
    
    return 0;
  };
}
module.exports = FeedService;


