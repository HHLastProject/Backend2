const FeedService = require("../services/feed.service");

class FeedController {
  feedService = new FeedService();

  listsFeed = async (req, res, next) => {
    try {
      let { pageNumber } = req.query;
      pageNumber = Number(pageNumber);

      let feedFindAll = null;
      if (res.locals.user) {
        const { userId } = res.locals.user;
        feedFindAll = await this.feedService.feedFindAll(userId);
      } else {
        feedFindAll = await this.feedService.feedFindAll();
      }

      let pageFeedFindAll = [];

      if (5 * (pageNumber - 1) >= feedFindAll.length) {
        return res.send(pageFeedFindAll);
      }

      for (let i = 0; i < 5; i++) {
        let feedCount = 5 * pageNumber - 5 + i;
        pageFeedFindAll.push(feedFindAll[feedCount]);
      }

      if (pageNumber) {
        res.status(200).json(pageFeedFindAll);
      } else {
        res.status(200).json(feedFindAll);
      }
    } catch (err) {
      console.log(err);
      res.status(400).json({ msg: "예기치 못한 오류가 발생하였습니다" });
    }
  };

  // detailFeed = async (req, res, next) => {
  //   try {
  //     const { shopId } = req.params;
  //     await this.feedService.shopFindOne(shopId);
  //     const value = await this.feedService.feedFindOne(shopId);
  //     res.send(value);
  //   } catch (err) {
  //     console.log(err);
  //     res.status(400).json({ msg: "예기치 못한 오류가 발생하였습니다" });
  //   }
  // };

  detailShopFeed = async (req, res, next) => {
    try {
      const { shopId } = req.params;

      let feedFindAll = null; 
      if (res.locals.user) {
        const { userId } = res.locals.user;
        feedFindAll = await this.feedService.detailShopFeed(shopId, userId);
      } else {
        feedFindAll = await this.feedService.detailShopFeed(shopId);
      }

      res.send(feedFindAll);
    } catch (err) {
      console.log(err);
      res.status(400).json({ msg: "예기치 못한 오류가 발생하였습니다" });
    }
  };

  postFeed = async (req, res, next) => {
    try {
      const { shopId } = req.params;
      const { comment, tags } = req.body;
      const { userId } = res.locals.user;

      // 썸네일 메인 사진을 0번째 껄로 선택한다
      const feedPic = await req.file.filename;
      const jsonTags = JSON.parse(tags);

      await this.feedService.feedPost(
        userId,
        shopId,
        comment,
        jsonTags,
        feedPic
      );

      res.status(200).json({ msg: "feed작성을 성공하였습니다" });
    } catch (err) {
      console.log(err);
      res.status(400).json({ msg: "예기치 못한 오류가 발생하였습니다" });
    }
  };

}

module.exports = FeedController;
