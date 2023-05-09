const { Shops } = require("../models");
const { Op } = require("sequelize");
const SearchService = require("../services/search.service");

class searchController {
  searchService = new SearchService();

  searchShop = async (req, res, next) => {
    try {
      const { searchName } = req.body;

      //가게 정보 가져오기
      const findAllDataShop = await this.searchService.findAllShop(searchName);

      //로그인 했을 경우 기록하기
      if (res.locals.user) {
        const { userId } = res.locals.user;
        this.searchService.createSearchHistory(userId, searchName);
        this.searchService.findAllSearchHistory(userId);
      }

      res.status(200).send(findAllDataShop);
    } catch (err) {
      console.log(err);
      res.status(400).json({ msg: "예기치 못한 오류가 발생했습니다" });
    }
  };

  searchHistory = async (req, res, next) => {
    try {
      if (res.locals.user) {
        const { userId } = res.locals.user;
        let searchHistoryData = await this.searchService.findAllSearchHistory(userId);

        searchHistoryData = await searchHistoryData.map((value) => {
          return value.searchContent;
        });

        return res.send(searchHistoryData);
        
      } else {
        return res.status(204).json({ msg: "로그인 하지 않아 기록이 없습니다" });
      }
    } catch (err) {
      console.log(err);
      res.status(400).json({ msg: "예기치 못한 오류가 발생했습니다" });
    }
  };

  searchSummary = async (req, res, next) => {
    const findAllDataShop = await this.searchService.findAllShop();
    const guList = await this.searchService.summaryShop(findAllDataShop);

    res.status(200).json({ guList });
  };
}

module.exports = searchController;