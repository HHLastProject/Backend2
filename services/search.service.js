const SearchRepository = require("../repositories/search.repositories");

class SearchService {
  constructor() {
    this.searchRepository = new SearchRepository();
  }
  
  findAllShop = async (searchName) => {
   
    let findAllDatabyShop = await this.searchRepository.findAllbyShop(searchName);
  
    if(findAllDatabyShop) {
      findAllDatabyShop = await findAllDatabyShop.map((value) => {
      return {
        shopId: value.shopId,
        shopName: value.shopName,
        shopAddress: value.address,
        lng : value.lng,
        lat : value.lat
      };
    });
  } 
  
    return findAllDatabyShop;
  };

  createSearchHistory = async (userId, searchName) => {
    await this.searchRepository.createbySearchHistory(userId, searchName);
  };

  findAllSearchHistory = async (userId) => {
    //전체값  가져오기
    const findAllDataSearchHistory = await this.searchRepository.findAllbySearchHistory(userId);

    if (5 < findAllDataSearchHistory.length) {
      await this.searchRepository.deletebySearchHistory(userId);
    }

    return findAllDataSearchHistory
  };

  summaryShop = async (findAllDataShop) => { 
    findAllDataShop = findAllDataShop.map((value)=> {
        return { 
          shopAddress : value.shopAddress
        }
    })

  let addresSummary =[];
   for(let i = 0 ; i <findAllDataShop.length; i++){ 
    const address = findAllDataShop[i].shopAddress
    const cityAddress = address.split(" ");

    if(cityAddress[0] == "경기도") {
      addresSummary.push(cityAddress[2])
    } else {
      addresSummary.push(cityAddress[1])
    }
   }

  const addresDataSummary = addresSummary.reduce((accu, curr) => {
    const existingObj = accu.find(item => Object.keys(item)[0] === curr);
    if (existingObj) {
      existingObj[curr] += 1; // 이미 존재하는 키라면 값을 1 증가
    } else {
      accu.push({ [curr]: 1 }); // 존재하지 않는 키라면 새로운 객체 추가
    }
    return accu;
  }, []);


  return addresDataSummary
  }


}

module.exports = SearchService;
