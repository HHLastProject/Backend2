const { Feeds, Shops, Tags, Users,Scrap,Likes,FeedComments } = require("../models");

class FeedRepository {
  // 전체 피드 가져오기
  findAllByFeed = async () => {
    return await Feeds.findAll({
      attributes: ["feedPic", "comment", "createdAt", "feedId"],
      include: [
        {
          model: Users,
          attributes: ["nickname", "profilePic", "userId"],
        },
        {
          model: Tags,
          attributes: ["tag"],
        },
        {
          model: Shops,
          attributes: [
            "shopName",
            "address",
            "thumbnail",
            "shopId",
            "category",
          ],
        },
      ],
      order: [["createdAt", "DESC"]],
    });
  };

  findAllByShopFeed = async (shopId) => {
    return await Feeds.findAll({
      attributes: ["feedPic", "comment", "createdAt", "feedId"],
      include: [
        {
          model: Users,
          attributes: ["nickname", "profilePic", "userId"],
        },
        {
          model: Tags,
          attributes: ["tag"],
        },
        {
          model: Shops,
          attributes: ["shopName", "address", "thumbnail", "shopId"],
        },
      ],
      where: { ShopId: shopId },
      order: [["createdAt", "DESC"]],
    });
  };

  //하나의 가게를 가져오기
  findOneByShop = async (shopId) => {
    return await Feeds.findOne({
      attributes: [
        "feedPic",
        "comment",
        "createdAt",
        "feedId",
        "UserId",
        "ShopId",
      ],
      include: [
        {
          model: Users,
          attributes: ["nickname", "profilePic"],
        },
        {
          model: Tags,
          attributes: ["tag"],
        },
        {
          model: Shops,
          attributes: ["shopName", "address", "thumbnail"],
        },
      ],
      where: { ShopId: shopId },
    });
  };

  //피드 작성하기
  postFeed = async (userId, shopId, comment, feedPic) => {
    return await Feeds.create({
      ShopId: shopId,
      UserId: userId,
      feedPic,
      comment,
    });
  };

  //태그 작성하기
  postTag = async (feed, tag) => {
    await Tags.create({FeedId: feed.feedId,tag});
  };

  findOnebyScrap = async (userId,shopId) => {
    return await Scrap.findOne({
      where: { UserId: userId,ShopId:shopId  },
    });
  };

  findOnebyLike = async (feedId,userId) => {
    return await Likes.findOne({
      where : { 
        FeedId : feedId, 
        UserId : userId ? userId : '%'
      }
    })
  }

  findAllbyLikes = async (feedId) => { 
    return await Likes.findAll({where : { FeedId : feedId }})
  }
  findAllbyFeedComments = async(feedId) =>{
    return await FeedComments.findAll({ where : { FeedId : feedId }})
  }
  
  findOnebyFeed = async(feedId,userId) => { 
    return await Feeds.findOne({where : { FeedId : feedId, UserId : userId }})
  }
  

}
module.exports = FeedRepository;
