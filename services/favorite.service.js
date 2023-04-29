const FavoriteRepository = require("../repositories/favorite.repositories")
const {Folders,Lists,Users} = require("../models");
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
        ListId: value.Lists[0].listId,
      };
    });
    return result;
  };

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
    let finalValue = await Folders.findAll({ where: { userId } });

    finalValue = finalValue.map((value) => {
      return {
        folderId: value.folderId,
        folderName: value.folderName,
      };
    });

    return finalValue;
  };

  listPatch2 = async (folderList, userId) => {
    let shopId = [];
    let folderName = [];
    let scrapId = [];

   
    for (let i = 0; i < folderList.length; i++) {
      console.log("====================")
      console.log(folderList[i].folderName)
      console.log("====================")
      for (let j = 0; j < folderList[i].shopList.length; j++) {
      
        // shopid ,유저를 기준으로 스크랩id가져온다
        let tempdata = await this.favoriteRepository.findOnebyScrap(
          userId,
          folderList[i].shopList[j].shopId
        );
       
        tempdata = tempdata.map((value)=> { 
          return value.scrapId
        })

       
        //순차적으로 가게id를 스크랩id로 변환 완료
         folderName.push(folderList[i].folderName)
         scrapId.push(tempdata);
      }
    }

    let findeFolderId = []
    //폴더이름으로 폴더id찾아오기 
    for(let i =0; i <folderName.length; i++ ){
      let findFolder = await this.favoriteRepository.findOnebyFolder(folderName[i])
      findFolder = findFolder.folderId
     
      findeFolderId.push(findFolder)
    }


    //스크랩 id로 찾아서 forlderid변경하기
    for(let i =0; i < scrapId.length ; i++) { 
      await Lists.update(
        {FolderId : findeFolderId[i]},
        {where : { ScrapId : scrapId[i]}}
        )
      
    }

    return findeFolderId;
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
      let ListId = myAllScrap[i].ListId;

      let shopData = await this.favoriteRepository.findOnebyShop(shopId);
      let isScrap = await this.favoriteRepository.findOnebyScrap(
        userId,
        shopId
      );

      //기존에 가지고 있던 ListId를 통해 해당 lists정보를 가져온다 그 후 거기에 있는 폴더 id를 가져온다
      let findList = await this.favoriteRepository.findOnebyLists(ListId);
      let folderId = findList.FolderId;

      let folderData = await this.favoriteRepository.findOnebyFolderName(
        folderId
      );

      isScrap ? (isScrap = true) : (isScrap = false);

      let value = {
        shopId: shopData.shopId,
        address: shopData.address,
        shopName: shopData.shopName,
        thumbnail: shopData.thumbnail,
        feedCount: shopData.Feeds.length,
        isScrap: isScrap,
        category: shopData.category,
        folderName: folderData.folderName,
      };

      result3.push(value);
    }
    return result3;
  };

  ///////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////
  findAllLists = async (myAllScrap) => {
    let listAllData = [];
    for (let i = 0; i < myAllScrap.length; i++) {
      let ListId = myAllScrap[i].ListId;
      const findListData = await this.favoriteRepository.findOnebyLists(ListId);
      listAllData.push(findListData);
    }
    return listAllData;
  };

  folderDelete = async (userId) => {
    await Folders.destroy({ where: { UserId: userId } });
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
      return true;
    }

    return false;
  };

  findListData = async (userId, shopId) => {};

  folderCreate = async (userId, folderName) => {
    const result = await Folders.create({
      UserId: userId,
      folderName,
    });

    return result;
  };

  deleteFolder = async (folderId) => {
    await Folders.destroy({ where: { folderId } });
  };

  listPatch = async (folderCreate, existFolderId) => {
    let finalData = [];
    for (let i = 0; i < existFolderId.length; i++) {
      let existFolderName = existFolderId[i].folderName;
      for (let j = 0; j < folderCreate.length; j++) {
        if (existFolderName == folderCreate[j].folderName) {
          finalData.push(folderCreate[j].folderId);

          //리스트에서 없어져버린 폴더 id데신 새로 생긴 폴더 id를 넣는다
          console.log("이번호 있어?");
          console.log(existFolderId[i].folderId);
          console.log("이번로 바꿔줘");
          console.log(folderCreate[j].folderId);

          await Lists.update(
            { FolderId: folderCreate[j].folderId },
            { where: { folderId: existFolderId[i].folderId } }
          );
        }
      }
    }

    //  console.log(folderCreate[0].folderName)
    //  console.log(existFolderId[0].folderName)

    return finalData;
  };

  listCreate = async (FolderId, seletedShopId) => {
    const result = await Lists.create({
      FolderId,
      ShopId: seletedShopId,
    });

    return result;
  };

  deleteExistFolderId = async (existFolderId) => {
    existFolderId = existFolderId.map((value) => {
      return value.folderId;
    });

    for (let i = 0; i < existFolderId.length; i++) {
      await Folders.destroy({
        where: { folderId: existFolderId[i] },
      });
    }
  };
}

module.exports = FavoriteService;