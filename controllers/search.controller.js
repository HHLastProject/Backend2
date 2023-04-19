const { Shops } = require("../models");
const { Op } = require("sequelize");
const SearchService = require("../services/search.service");

class searchController {
  searchService = new SearchService();

  searchShop = async (req, res, next) => {
    const { searchName } = req.body;
    //가게 정보 가져오기
    const result = await this.searchService.findAllShop(searchName);

    //로그인 했을 경우 기록하기
    if (res.locals.user) {
      const { userId } = res.locals.user;
      const shopId = result[0].shopId; //이부분 조정 해보기
      this.searchService.createSearchHistory(userId, shopId);
      this.searchService.findAllSearchHistory(userId);
    }

    res.status(200).send(result);
  };

  searchHistory = async (req, res, next) => {
    if (res.locals.user) {
      const { userId } = res.locals.user;
      const value2 =  await this.searchService.findAllSearchHistory(userId);
      const value33 = await this.searchService.findAllSearchHistory(userId);

       const value3 = await value2.map((value) => { 
        return { 
            shopId: value.shopId,
            shopName: value.shopName,
            shopAddress: value.address,
            test : "t"
        }
      })
   
      return res.send({ value3 });
    } else {
      return res.send("로그인 하지 않아 기록이 없습니다");
    }
  };


  count = async (req, res, next) => { 
    //  const value = Shops.findAll({});
    //  res.send(value)
    res.send("확인")
  }

}

module.exports = searchController;