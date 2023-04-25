const { Scrap, Shops, Feeds } = require("../models");
const FavoriteService = require("../services/favorite.service");
class favoriteController {
  favoriteService = new FavoriteService();

  listFavorite = async (req, res, next) => {
    const { userId } = res.locals.user;
    console.log("userId 내 id가 들어 있어야 함");
    console.log(userId);
    console.log("============================");
    //내가 Scrap한 데이터 가져오기
    const result = await this.favoriteService.findAllScrap(userId);
    //Scrap 데이터에 가계정보 가져오기
    const result2 = await this.favoriteService.findOneShops(result, userId);

    res.status(200).json({ scrapList: result2 });
  };

//   makeFolders = async (req, res, next) => {
//     const { userId } = res.locals.user;
//     const { folderName, shopList } = req.body;

//     //중복확인
//     // if(folderName)

//     //내가 Scrap한 데이터 가져오기
//     const result = await this.favoriteService.findAllScrap(userId);

   
//       //Scrap 데이터에 가계정보 가져오기
//       const result2 = await this.favoriteService.findOneShops(result, userId);

//       const result3 = await this.favoriteService.folderCreate(
//         result[0].scrapId,
//         folderName
//       );

//       for (let j = 0; j < shopList.length; j++) {
//         const folder = result3.folderId;
//         let seletedShopId = shopList[j].shopId
//         await this.favoriteService.listCreate(folder,seletedShopId);
//       }
    

//     return res.status(200).json({ msg: "업로드에 성공했습니다" });
//     res.status(200).json({ scrapList: result5 });
//   };


  makeFolders = async (req, res, next) => {
    const { userId } = res.locals.user;
    // const { folderName, shopList } = req.body;
    const  total = req.body;
    
    console.log(total[0].folderName)
   
     //내가 Scrap한 데이터 가져오기
     const result = await this.favoriteService.findAllScrap(userId);


    for(let i = 0; i < total.length ; i++){

      const createFolder = await this.favoriteService.folderCreate(
        1,
        total[i].folderName
      );

      const folder = createFolder.folderId
     
      for (let j = 0; j <total[i].shopList.length ; j++) {
        let seletedShopId = total[i].shopList[j].shopId
        await this.favoriteService.listCreate(folder,seletedShopId);
      }
    }

    return res.status(200).json({ msg: "업로드에 성공했습니다" });
    res.status(200).json({ scrapList: result5 });
  };


}

module.exports = favoriteController;
