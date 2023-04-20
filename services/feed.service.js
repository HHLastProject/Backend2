const FeedRepository = require("../repositories/feed.repositories");
const {Scrap,Feeds}= require("../models");


class FeedService {
  feedRepository = new FeedRepository();
 
//전체 피드 가져오기
  feedFindAll = async () => {
     const value = await this.feedRepository.findByFeed();

      const result = await Promise.all(value.map(async (feed) => {
      
        const {Shop,Tags,User } = feed;

       let isScrap = await Scrap.findOne({where : {ShopId : Shop.shopId, UserId : User.userId }})

      data ? data = true : data = false

      return {
        nickname : User.nickname,
        profilePic : User.profilePic,
        createdAt : feed.createdAt,
        feedPic: feed.feedPic,
        comment : feed.comment,
        tag : Tags.map((value) => ({ tag: value.tag })) ,
        shopName : Shop.shopName,
        shopAddress : Shop.address,
        shopThumbnail : Shop.thumbnail,
        isScrap
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
   
    let value = await this.feedRepository.findOneByShop(shopId);

    let isScrap = await Scrap.findOne({where :{ UserId : value.User.userId, ShopId : value.Shop.shopId}})
    isScrap ? isScrap = true : isScrap = false

    let result ={
        nickname : value.User.nickname,
        profilePic : value.User.profilePic,
        createdAt : value.createdAt,
        feedPic: value.feedPic,
        comment : value.comment,
        tag : value.Tags.map((value) => ({ tag: value.tag })) ,
        shopName : value.Shop.shopName,
        shopAddress : value.Shop.address,
        shopThumbnail : value.Shop.thumbnail,
        isScrap
    } 

    return result
  };

//피드 작성하기
  feedPost = async (userId,shopId,comment,feedPic) => {
    
    const feed = await this.feedRepository.postFeed(userId,shopId,comment,feedPic);
    
    // for(let i =0; i < jsonTags.length; i++){
    //   let tag = jsonTags[i]
    //   tag = jsonTags[i].tag
    //   this.feedRepository.postTag(feed,tag);
    // }
    
    return 0;
  };
}
module.exports = FeedService;


