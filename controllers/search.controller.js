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
      this.searchService.createSearchHistory(userId, searchName);
      this.searchService.findAllSearchHistory(userId);
    }

    res.status(200).send(result);
  };

  searchHistory = async (req, res, next) => {
    if (res.locals.user) {
      const { userId } = res.locals.user;
      const value2 =  await this.searchService.findAllSearchHistory(userId);
      console.log("value2.shopId")
      console.log(value2[0])
       const value3 = await value2.map((value) => { 
        return { 
            shopId: value.shopId,
            shopName: value.shopName,
            shopAddress: value.address,
        }
      })
   
      return res.send({ value3 });
    } else {
      return res.send("로그인 하지 않아 기록이 없습니다");
    }
  };


  searchSummary = async (req, res, next) => { 
  const result = await this.searchService.findAllShop();
  const re = await this.searchService.summaryShop(result);

  res.send(re)
  }

}

module.exports = searchController;