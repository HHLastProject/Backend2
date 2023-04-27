const SearchRepository = require("../repositories/search.repositories");
const { Shops } = require("../models");

class SearchService {
  constructor() {
    this.searchRepository = new SearchRepository();
  }
  
  findAllShop = async (searchName) => {

    let result = await this.searchRepository.findAllbyShop(searchName);
   
    console.log("result")
    console.log(result)
    console.log("-=--------------")
    if(result) {
     result = await result.map((value) => {
      return {
        shopId: value.shopId,
        shopName: value.shopName,
        shopAddress: value.address,
        lng : value.lng,
        lat : value.lat
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

  // const result2 = addresSummary.reduce((accu, curr) => { 
  //   accu[curr] = (accu[curr] || 0)+1; 
  //   return accu;
  // }, {});

  // const result2 = addresSummary.reduce((accu, curr) => { 
  //   accu.push({ [curr]: (accu.filter(item => Object.keys(item)[0] === curr).length + 1) || 1 });
  //   return accu;
  // }, []);
  
  const result2 = addresSummary.reduce((accu, curr) => {
    const existingObj = accu.find(item => Object.keys(item)[0] === curr);
    if (existingObj) {
      existingObj[curr] += 1; // 이미 존재하는 키라면 값을 1 증가
    } else {
      accu.push({ [curr]: 1 }); // 존재하지 않는 키라면 새로운 객체 추가
    }
    return accu;
  }, []);


  return result2
  }


}

module.exports = SearchService;
