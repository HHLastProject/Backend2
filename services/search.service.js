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

  summaryShop = async (result) => { 
    result = result.map((value)=> {
        return { 
          shopAddress : value.shopAddress
        }
    })

  let addresSummary =[];
   for(let i = 0 ; i <3699; i++){ 
    let address = result[i].shopAddress
    let cityAddress = address.split(" ");

    
    if(cityAddress[0] == "경기도") {
      addresSummary.push(cityAddress[2])
    } else {
      addresSummary.push(cityAddress[1])
    }
   }

  let addresSummary2 = [];

  // for(let i =0; i < addresSummary.length; i++){
  //    let reuslt = addresSummary2.indexOf(addresSummary[i])

  //    if(reuslt == -1){
  //     addresSummary2.push(addresSummary[i])
  //    }

  // }
  
  // for (let i = 0; i < addresSummary2.length; i++) {
  //   let obj = {};
  //   obj[addresSummary2[i]] = parseInt(addresSummary[i]);
  //   output.push(obj);
  // }


  const result2 = addresSummary.reduce((accu, curr) => { 
    accu[curr] = (accu[curr] || 0)+1; 
    return accu;
  }, {});


  return result2
  }


}

module.exports = SearchService;
