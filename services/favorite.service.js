const FavoriteRepository = require("../repositories/favorite.repositories")
const {Folders,Lists} = require("../models");
class FavoriteService {
  constructor() {
    this.favoriteRepository = new FavoriteRepository();
  }

  findAllScrap = async (userId) => {
    const value2 = await this.favoriteRepository.findAllbyScrap(userId);

    let result = await value2.map((value) => {
      return {
        scrapId: value.scrapId,
        shopId: value.ShopId,
      };
    });
    return result;
  };

  
  ///////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////

//   findAllFolder = async (myAllScrap) => {
//     // 스크랩에서 스크랩id가져오기
//     myAllScrap = myAllScrap.map((value) => {
//       return value.scrapId;
//     });

//     let finalValue = [];
//     //스크랩ID
//     for (let i = 0; i < myAllScrap.length; i++) {
//       let myAllScrapId = myAllScrap[i];
//       let value = await this.favoriteRepository.findOnebyFolder(myAllScrapId);
//       if (value) {
//         finalValue.push(value);
//       }
//     }

//     finalValue = finalValue.map((value) => {
//       return {
//         folderId: value.folderId,
//         folderName: value.folderName,
//       };
//     });
//     return finalValue;
//   };


findAllFolder = async (userId) => {
  
    let finalValue = await Folders.findAll({where : {userId}})
    
    finalValue = finalValue.map((value) => {
      return {
        folderId: value.folderId,
        folderName: value.folderName,
      };
    });

    return finalValue;
  };
  
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////



  findOneShops = async (myAllScrap, userId) => {
    let result3 = [];

    for (let i = 0; i < myAllScrap.length; i++) {
      let shopId = myAllScrap[i].shopId;
      let scrapId = myAllScrap[i].scrapId;

      let result2 = await this.favoriteRepository.findOnebyShop(shopId);
      let isScrap = await this.favoriteRepository.findOnebyScrap(
        userId,
        shopId
      );

      let folderName = await this.favoriteRepository.findOnebyFolderScrapId(
        scrapId
      );

      isScrap ? (isScrap = true) : (isScrap = false);

      let value = {
        shopId: result2.shopId,
        address: result2.address,
        shopName: result2.shopName,
        thumbnail: result2.thumbnail,
        feedCount: result2.Feeds.length,
        isScrap: isScrap,
        category: result2.category,
        folderName: folderName ? folderName.folderName : null,
      };

      result3.push(value);
    }
    return result3;
  };

  folderDelete = async (myAllScrapId) => {
    await Folders.destroy({ where: { ScrapId: myAllScrapId } });
  };

  compareFolderName = async (folderList) => {
    let data = null;

    for (let i = 0; i < folderList.length; i++) {
      //폴더 찾기에서 폴더이름 넣어 null값이 떠야 만들기 허용 값이 존재할경우 폴더 생성 불가능
      let findFolderName = await Folders.findOne({
        where: { folderName: folderList[i] },
      });

      if (findFolderName != null) {
        return (data = "값이 존재합니다");
      }
    }

    return data;
  };

  compareFolderListName = async (folderList) => {
    const set = new Set(folderList);

    if (folderList.length !== set.size) {
        return true
    }

    return false
  };


  folderCreate = async (ScrapId, userId, folderName) => {
    const result = await Folders.create({
      ScrapId,
      UserId: userId,
      folderName,
    });

    return result;
  };

  deleteFolder  = async (folderId) => {
    await Folders.destroy({where : { folderId}})
  };


  listCreate = async (FolderId, seletedShopId) => {
    const result = await Lists.create({
      FolderId,
      ShopId: seletedShopId,
    });

    return result;
  };
}

module.exports = FavoriteService;