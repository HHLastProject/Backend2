const FeedRepository = require("../repositories/feed.repositories");
const {Scrap,Likes,FeedComments,Feeds,Menus}= require("../models");


class FeedService {
  feedRepository = new FeedRepository();
 
//전체 피드 가져오기
  feedFindAll = async (userId) => {
     const value = await this.feedRepository.findByFeed();

      const result = await Promise.all(value.map(async (feed) => {
      
        const {Shop,Tags,User } = feed;
       
        let isScrap 
        if(userId) {
          isScrap = await Scrap.findOne({where : {ShopId : Shop.shopId, UserId : userId }})
        }
        isScrap ? (isScrap = true) : (isScrap = false)

        // 좋아요 유무 확인
        let isLike
        if(userId) {
          isLike = await Likes.findOne({where : { FeedId : feed.feedId, UserId : userId }})
        }
        isLike ? (isLike = true) : (isLike = false)

        // 해당 피드 좋아요 개수
        let likeCount = await Likes.findAll({where : { FeedId : feed.feedId }})
        likeCount = likeCount.length

        // 해당 피드의 댓글 개수
        let feedCommentCount = await FeedComments.findAll({where : { FeedId : feed.feedId }})
        feedCommentCount = feedCommentCount.length

        // 해당 피드의 본인 확인
        let isMine
        if(userId) {
          isMine = await Feeds.findOne({where : { FeedId : feed.feedId, UserId : userId }})
        }
        isMine ? (isMine = true) : (isMine = false)



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
        shopCategory: Shop.category,
        isScrap,
        isMine,
        isLike,
        likeCount,
        feedCommentCount,

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
    isScrap ? isScrap = true : isScrap = false;
    let likeCount = await Likes.findAll({where : { FeedId :value.feedId}})
    // let commentCount = await FeedComments.findAll({where : { FeedId : value.feedId}});

    // 좋아요 유무 체크
    let isLike = await Likes.findOne({where : { FeedId : value.feedId }})

    isLike ? (isLike = true) : (isLike = false)

    // 해당 피드의 코멘트 전체 조회
    let feedCommentResult = []
    let findAllFeedComment = await FeedComments.findAll({ where : { FeedId : value.feedId }})
    for (let i = 0; i < findAllFeedComment.length; i++) {
      let findFeedComment = await FeedComments.findAll({ where : { FeedId : value.feedId }})

      let result = {
          userNickName : value.User.nickname,
          userComment : findFeedComment[i].feedComment,
          userProfile : value.User.profilePic,
          createdAt : findFeedComment[i].createdAt,
      }

      feedCommentResult.push(result)
    }

   
    let result = {
        feedId : value.feedId,
        nickname : value.User.nickname,
        profilePic : value.User.profilePic,
        createdAt : value.createdAt,
        feedPic: value.feedPic,
        comment : value.comment,
        tag : value.Tags.map((value) => value.tag ),
        shopId : value.ShopId,
        shopName : value.Shop.shopName,
        shopAddress : value.Shop.address,
        shopThumbnail : value.Shop.thumbnail,
        isScrap,
        //구현해야 하는것 
        isLike,
        likeCount : likeCount.length, 
        feedComment : feedCommentResult,
        ///////////////////////////
        
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
  
  detailShopFeed = async (shopId,userId) => {
    const value = await this.feedRepository.findByShopFeed(shopId);

    const result = await Promise.all(value.map(async (feed) => {
    
    const {Shop,Tags,User } = feed;


      // 카페 스크랩 유무 확인(새로 변경된 코드)
      let isScrap 
        if(userId) {
          isScrap = await Scrap.findOne({where : {ShopId : Shop.shopId, UserId : userId }})
        }
      isScrap ? (isScrap = true) : (isScrap = false)

      // 좋아요 유무 확인
      let isLike
        if(userId) {
          isLike = await Likes.findOne({where : { FeedId : feed.feedId, UserId : userId }})
        }
      isLike ? (isLike = true) : (isLike = false)

      // 해당 피드 좋아요 개수
      let likeCount = await Likes.findAll({where : { FeedId : feed.feedId }})
      likeCount = likeCount.length

      // 해당 피드의 댓글 개수
      let feedCommentCount = await FeedComments.findAll({where : { FeedId : feed.feedId }})
      feedCommentCount = feedCommentCount.length

      // 해당 피드의 본인 확인
      let isMine
        if(userId) {
          isMine = await Feeds.findOne({where : { FeedId : feed.feedId, UserId : userId }})
        }
      isMine ? (isMine = true) : (isMine = false)

    return {
      feedId : feed.feedId,
      nickname : User.nickname,
      profilePic : User.profilePic,
      createdAt : feed.createdAt,
      feedPic: feed.feedPic,
      comment : feed.comment,
      tag : Tags.map((value)=> { return value.tag  }) ,
      shopId : Shop.shopId,
      shopName : Shop.shopName,
      shopAddress : Shop.address,
      shopThumbnail : Shop.thumbnail,
      isMine,
      isScrap,
      isLike,
      likeCount,
      feedCommentCount,
    }
  }));


  return result
  
  }
 


}
module.exports = FeedService;


