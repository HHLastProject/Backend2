const { Feeds, Shops, Tags, Users } = require("../models");

class FeedRepository {
  // 전체 피드 가져오기
  findByFeed = async () => {
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
          attributes: ["shopName", "address", "thumbnail", "shopId","category"],
        },
      ],
      order: [['createdAt', 'DESC']],
    });
  };

  findByShopFeed = async (shopId) => {
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
      order: [['createdAt', 'DESC']],
    });
  };

  //하나의 가게를 가져오기
  findOneByShop = async (shopId) => {
    return await Feeds.findOne({
      attributes: ["feedPic","comment","createdAt","feedId","UserId","ShopId",],
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

  //하나의 피드 가져오기
  // findOneByFeed = async(shopId) => {
  //     console.log("레파지토리입니다");
  // };

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
    await Tags.create({
      FeedId: feed.feedId,
      tag,
    });
  };
}
module.exports = FeedRepository;
