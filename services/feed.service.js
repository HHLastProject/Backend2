const FeedRepository = require("../repositories/feed.repositories");

class FeedService {
  feedRepository = new FeedRepository();

  //전체 피드 가져오기
  feedFindAll = async (userId) => {
    const findAllDataFeed = await this.feedRepository.findAllByFeed();

    const feedDataSummary = await Promise.all(
      findAllDataFeed.map(async (feed) => {
        const { Shop, Tags, User } = feed;

        let isScrap;
        if (userId) {isScrap = await this.feedRepository.findOnebyScrap(userId,Shop.shopId)}
        isScrap ? (isScrap = true) : (isScrap = false);

        // 좋아요 유무 확인
        let isLike;
        if (userId) {isLike = await this.feedRepository.findOnebyLike(feed.feedId, userId);}
        isLike ? (isLike = true) : (isLike = false);

        // 해당 피드 좋아요 개수
        let likeCount = await this.feedRepository.findAllbyLikes(feed.feedId);
        likeCount = likeCount.length;

        // 해당 피드의 댓글 개수
        let feedCommentCount = await this.feedRepository.findAllbyFeedComments(feed.feedId);
        feedCommentCount = feedCommentCount.length;

        // 해당 피드의 본인 확인
        let isMine;
        if (userId) {isMine = await this.feedRepository.findOnebyFeed(feed.feedId, userId)}
        isMine ? (isMine = true) : (isMine = false);

        return {
          feedId: feed.feedId,
          nickname: User.nickname,
          profilePic: User.profilePic,
          createdAt: feed.createdAt,
          feedPic: feed.feedPic,
          comment: feed.comment,
          tag: Tags.map((value) => value.tag),
          shopId: Shop.shopId,
          shopName: Shop.shopName,
          shopAddress: Shop.address,
          shopThumbnail: Shop.thumbnail,
          shopCategory: Shop.category,
          isScrap,
          isMine,
          isLike,
          likeCount,
          feedCommentCount,
        };
      })
    );

    return feedDataSummary;
  };

  //하나의 가게를 가져오기
  shopFindOne = async (shopId) => {
    return await this.feedRepository.findOneByShop(shopId);
  };

  //피드 작성하기
  feedPost = async (userId, shopId, comment, jsonTags, feedPic) => {
    const feed = await this.feedRepository.postFeed(
      userId,
      shopId,
      comment,
      feedPic
    );

    for (let i = 0; i < jsonTags.length; i++) {
      let tag = jsonTags[i];
      tag = jsonTags[i].tag;
      this.feedRepository.postTag(feed, tag);
    }
  };

  detailShopFeed = async (shopId, userId) => {
    const findAllDataShopFeed = await this.feedRepository.findAllByShopFeed(shopId);

    const ShopFeedSummary = await Promise.all(findAllDataShopFeed.map(async (feed) => {
        const { Shop, Tags, User } = feed;

        // 카페 스크랩 유무 확인(새로 변경된 코드)
        let isScrap;
        if (userId) {isScrap = await this.feedRepository.findOnebyScrap(userId,Shop.shopId)}
        isScrap ? (isScrap = true) : (isScrap = false);

        // 좋아요 유무 확인
        let isLike;
        if (userId) {isLike = await this.feedRepository.findOnebyLike(feed.feedId, userId)}
        isLike ? (isLike = true) : (isLike = false);

        // 해당 피드 좋아요 개수
        let likeCount = await this.feedRepository.findAllbyLikes(feed.feedId);
        likeCount = likeCount.length;

        // 해당 피드의 댓글 개수
        let feedCommentCount = await this.feedRepository.findAllbyFeedComments(feed.feedId);
        feedCommentCount = feedCommentCount.length;

        // 해당 피드의 본인 확인
        let isMine;
        if (userId) {isMine = await this.feedRepository.findOnebyFeed(feed.feedId, userId)}
        isMine ? (isMine = true) : (isMine = false);

        return {
          feedId: feed.feedId,
          nickname: User.nickname,
          profilePic: User.profilePic,
          createdAt: feed.createdAt,
          feedPic: feed.feedPic,
          comment: feed.comment,
          tag: Tags.map((value) => {
            return value.tag;
          }),
          shopId: Shop.shopId,
          shopName: Shop.shopName,
          shopAddress: Shop.address,
          shopThumbnail: Shop.thumbnail,
          isMine,
          isScrap,
          isLike,
          likeCount,
          feedCommentCount,
        };
      })
    );

    return ShopFeedSummary;
  };

  //하나의 피드 가져오기
  // feedFindOne = async (shopId) => {

  //     let findOneDataShop = await this.feedRepository.findOneByShop(shopId);

  //     let isScrap = await this.feedRepository.findOnebyScrap(findOneDataShop.UserId,findOneDataShop.ShopId)
  //     isScrap ? isScrap = true : isScrap = false;

  //     let likeCount = await this.feedRepository.findAllbyLikes(findOneDataShop.feedId)
  //     likeCount = likeCount.length

  //     // 좋아요 유무 체크
  //     let isLike = await this.feedRepository.findOnebyLike(findOneDataShop.feedId)
  //     isLike ? (isLike = true) : (isLike = false)

  //     // 해당 피드의 코멘트 전체 조회
  //     let feedCommentResult = []
  //     // let findAllFeedComment = await FeedComments.findAll({ where : { FeedId : findOneDataShop.feedId }})
  //     let findAllFeedComment = await this.feedRepository.findAllbyFeedComments(findOneDataShop.feedId)

  //     for (let i = 0; i < findAllFeedComment.length; i++) {
  //        let findFeedComment = await FeedComments.findAll({ where : { FeedId : findOneDataShop.feedId }})

  //       let result = {
  //           userNickName : findOneDataShop.User.nickname,
  //           // userComment : findFeedComment[i].feedComment,
  //           userComment : findAllFeedComment[i].feedComment,
  //           userProfile : findOneDataShop.User.profilePic,
  //           // createdAt : findFeedComment[i].createdAt,
  //           createdAt : findAllFeedComment[i].createdAt
  //       }

  //       feedCommentResult.push(result)
  //     }

  //     let result = {
  //         feedId : findOneDataShop.feedId,
  //         nickname : findOneDataShop.User.nickname,
  //         profilePic : findOneDataShop.User.profilePic,
  //         createdAt : findOneDataShop.createdAt,
  //         feedPic: findOneDataShop.feedPic,
  //         comment : findOneDataShop.comment,
  //         tag : findOneDataShop.Tags.map((value) => value.tag ),
  //         shopId : findOneDataShop.ShopId,
  //         shopName : findOneDataShop.Shop.shopName,
  //         shopAddress : findOneDataShop.Shop.address,
  //         shopThumbnail : findOneDataShop.Shop.thumbnail,
  //         isScrap,
  //         isLike,
  //         likeCount,
  //         feedComment : feedCommentResult,

  //     }

  //     return result
  //   };
}
module.exports = FeedService;


