const SearchRepository = require("../repositories/search.repositories");
const { Shops } = require("../models");

class SearchService {
  constructor() {
    this.searchRepository = new SearchRepository();
  }
  
  findAllShop = async (searchName) => {

    let result = await this.searchRepository.findAllbyShop(searchName);
   
    if(result) {
     result = await result.map((value) => {
      return {
        shopId: value.shopId,
        shopName: value.shopName,
        shopAddress: value.address,
      };
    });
  } 

    return result;
  };

  createSearchHistory = async (userId, searchName) => {
    await this.searchRepository.createbySearchHistory(userId, searchName);
  };

  findAllSearchHistory = async (userId) => {
    //전체값  가져오기
    const findAllSearchHistory = await this.searchRepository.findAllbySearchHistory(userId);

    if (5 < findAllSearchHistory.length) {
      await this.searchRepository.deletebySearchHistory(userId);
    }

    return findAllSearchHistory
  };

  // findAllShop = async (shopId) => { 
  //   await this.searchRepository.findAllbyShop(shopId)
  // }

  summaryShop = async (result) => { 
    result = result.map((value)=> {
        return { 
          shopAddress : value.shopAddress
        }
    })

  let addresSummary =[];
   for(let i = 0 ; i <5; i++){ 
    const address = result[i].shopAddress
    // const address2 = address.replace(" ")
    console.log(address)
    addresSummary.push(address)
   }

  return addresSummary
  }
}

module.exports = SearchService;
