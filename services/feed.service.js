const FeedRepository = require("../repositories/feed.repositories");
const {Scrap,Feeds,Users,Menus}= require("../models");


class FeedService {
  feedRepository = new FeedRepository();
 
//전체 피드 가져오기
  feedFindAll = async (userId) => {
     const value = await this.feedRepository.findByFeed();

      const result = await Promise.all(value.map(async (feed) => {
      
        const {Shop,Tags,User } = feed;

      let isScrap = await Scrap.findOne({where : {ShopId : Shop.shopId, UserId : userId }})
  
       isScrap ? (isScrap = true) : (isScrap = false)

      return {
        feedId : feed.feedId,
        nickname : User.nickname,
        profilePic : User.profilePic,
        createdAt : feed.createdAt,
        feedPic: feed.feedPic,
        comment : feed.comment,
        // tag : Tags.map((value) => ({ tag: value.tag })) ,
        tag : Tags.map((value) => value.tag) ,
        shopId : Shop.shopId,
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
    let isScrap = await Scrap.findOne({where :{ UserId : value.UserId, ShopId : value.ShopId}})
    isScrap ? isScrap = true : isScrap = false

    let result = {
        feedId : value.feedId,
        nickname : value.User.nickname,
        profilePic : value.User.profilePic,
        createdAt : value.createdAt,
        feedPic: value.feedPic,
        comment : value.comment,
        // tag : value.Tags.map((value) => ({ tag: value.tag })),
        tag : value.Tags.map((value) => value.tag ),
        shopId : value.ShopId,
        shopName : value.Shop.shopName,
        shopAddress : value.Shop.address,
        shopThumbnail : value.Shop.thumbnail,
        isScrap
    } 

    return result
  };

//피드 작성하기
  feedPost = async (userId,shopId,comment,jsonTags,feedPic) => {
    
    const feed = await this.feedRepository.postFeed(userId,shopId,comment,feedPic);
    
    for(let i =0; i < jsonTags.length; i++){
      let tag = jsonTags[i]
      tag = jsonTags[i].tag
      this.feedRepository.postTag(feed,tag);
    }
    
    return 0;
  };
  
  detailShopFeed = async (shopId) => {
    const value = await this.feedRepository.findByShopFeed(shopId);

    const result = await Promise.all(value.map(async (feed) => {
    
      const {Shop,Tags,User } = feed;

     let isScrap = await Scrap.findOne({where : {ShopId : Shop.shopId, UserId : User.userId }})

     isScrap ? (isScrap = true) : (isScrap = false)

    return {
      feedId : feed.feedId,
      nickname : User.nickname,
      profilePic : User.profilePic,
      createdAt : feed.createdAt,
      feedPic: feed.feedPic,
      comment : feed.comment,
      tag : Tags.map((value) => ({ tag: value.tag })) ,
      shopId : Shop.shopId,
      shopName : Shop.shopName,
      shopAddress : Shop.address,
      shopThumbnail : Shop.thumbnail,
      isScrap
    }
  }));


  return result
  
  }
 


}
module.exports = FeedService;


