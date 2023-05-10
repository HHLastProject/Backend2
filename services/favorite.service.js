const FavoriteRepository = require("../repositories/favorite.repositories")
const {Folders,Lists} = require("../models");
class FavoriteService {
  constructor() {
    this.favoriteRepository = new FavoriteRepository();
  }

  findAllScraps = async (userId) => {
    let findAllDataScraps = await this.favoriteRepository.findAllbyScraps(
      userId
    );

    findAllDataScraps = await findAllDataScraps.map((value) => {
      return {
        scrapId: value.scrapId,
        shopId: value.ShopId,
        ListId: value.Lists[0].listId,
      };
    });

    return findAllDataScraps;
  };



  findAllFolders = async (userId) => {
    let findAllDataFolders = await this.favoriteRepository.findAllbyFolders(
      userId
    );

    findAllDataFolders = findAllDataFolders.map((value) => {
      return {
        folderId: value.folderId,
        folderName: value.folderName,
      };
    });

    return findAllDataFolders;
  };

  listMovePatch = async (folderList, userId) => {
    let folderName = [];
    let scrapId = [];

    for (let i = 0; i < folderList.length; i++) {
      for (let j = 0; j < folderList[i].shopList.length; j++) {
        // shopid ,유저를 기준으로 스크랩id가져온다
        const findOneDataScrap = await this.favoriteRepository.findOnebyScrap(
          userId,
          folderList[i].shopList[j].shopId
        );

        //순차적으로 가게id를 스크랩id로 변환 완료
        folderName.push(folderList[i].folderName);
        scrapId.push(findOneDataScrap.scrapId);
      }
    }

    let findFolderId = [];

    //폴더이름으로 폴더id찾아오기
    for (let i = 0; i < folderName.length; i++) {
      const findFolder = await this.favoriteRepository.findOnebyFolder(
        folderName[i],userId
      );
      findFolderId.push(findFolder.folderId);
    }

    //스크랩 id로 찾아서 forlderid변경하기
    for (let i = 0; i < scrapId.length; i++) {
      await Lists.update(
        { FolderId: findFolderId[i] },
        { where: { ScrapId: scrapId[i] } }
      );
    }
  };

  findAllShops = async (myAllScrap, userId) => {
    let findAllDataShops = [];

    for (let i = 0; i < myAllScrap.length; i++) {
      const shopId = myAllScrap[i].shopId;
      const ListId = myAllScrap[i].ListId;

      const findOneDataShop = await this.favoriteRepository.findOnebyShop(shopId);
      let isScrap = await this.favoriteRepository.findOnebyScrap(userId,shopId);

      //기존에 가지고 있던 ListId를 통해 해당 lists정보를 가져온다 그 후 거기에 있는 폴더 id를 가져온다
      const findList = await this.favoriteRepository.findOnebyLists(ListId);
      const folderData = await this.favoriteRepository.findOnebyFolderName(findList.FolderId);

      const redefine = {
        shopId: findOneDataShop.shopId,
        address: findOneDataShop.address,
        shopName: findOneDataShop.shopName,
        thumbnail: findOneDataShop.thumbnail,
        feedCount: findOneDataShop.Feeds.length,
        isScrap: isScrap ? true : false,
        category: findOneDataShop.category,
        folderName: folderData.folderName,
      };

      findAllDataShops.push(redefine);
    }
    return findAllDataShops;
  };

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

  folderCreate = async (userId, folderName) => {
    return await this.favoriteRepository.folderbyCreate(userId, folderName);
  };

  findAllFolderLists = async (folderId, userId) => {

    const favoriteFolder = await Folders.findOne({
      where: { UserId: userId, folderName: "즐겨찾기" },
    });

    await Lists.update(
      { FolderId: favoriteFolder.folderId },
      { where: { FolderId: folderId } }
    );
  };

  deleteFolder = async (folderId) => {
    await this.favoriteRepository.deletebyFolder(folderId);
  };

  listPatch = async (folderCreate, existFolderId) => {

    for (let i = 0; i < existFolderId.length; i++) {
      const existFolderName = existFolderId[i].folderName;
      for (let j = 0; j < folderCreate.length; j++) {
        if (existFolderName == folderCreate[j].folderName) {

          //리스트에서 없어져버린 폴더 id데신 새로 생긴 폴더 id를 넣는다
          console.log("이번호 있어? = " + existFolderId[i].folderId);
          console.log("이번로 바꿔줘 = " + folderCreate[j].folderId);

          await Lists.update(
            { FolderId: folderCreate[j].folderId },
            { where: { folderId: existFolderId[i].folderId } }
          );
        }
      }
    }
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