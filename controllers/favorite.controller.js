const { Scrap, Shops, Feeds,Folders } = require("../models");
const FavoriteService = require("../services/favorite.service");
class favoriteController {
  favoriteService = new FavoriteService();

  //즐겨찾기 리스트 보여주기
  listFavorite = async (req, res, next) => {
  
    const { userId } = res.locals.user;

    //내가 Scrap한 데이터 가져오기
    const myAllScrap = await this.favoriteService.findAllScraps(userId);

    //Scrap 데이터에 가계정보 가져오기
    const scrapList = await this.favoriteService.findAllShops(
      myAllScrap,
      userId
    );

    const folderList = await this.favoriteService.findAllFolders(userId);
   
    res.status(200).json({ scrapList, folderList });
  };
  //////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////

  modifyFolders = async (req, res, next) => {
    try {
      console.log( "======================================================================");
      console.log(" ★ 파일 위치 옮기는 api입니다");
      console.log( "======================================================================");

      const { userId } = res.locals.user;
      const { folderList } = req.body;

      //내가 Scrap한 데이터 가져오기
      const myAllScrap = await this.favoriteService.findAllScraps(userId);
      const myAllScrapShopId = myAllScrap.map((value) => { return value.shopId});

      //나의 전체 폴더 가져오기 - folderId, folderName
      let existFolderId = await this.favoriteService.findAllFolders(userId);
      existFolderId = existFolderId.map((value) => {return value.folderName;});

      /*
      //추가한 shopList중에 즐겨 찾기를 안 하면 파일 생성을 할 수 없도록 구현
      // await this.favoriteService.checkFolderLists(folderList, myAllScrapShopId);
      for (let i = 0; i < folderList.length; i++) {
        for (let j = 0; j < folderList[i].shopList.length; j++) {
          const oneFolderShopId = folderList[i].shopList[j].shopId;
          const isMyScrapbyshopList = myAllScrapShopId.indexOf(oneFolderShopId);
          if (isMyScrapbyshopList == -1) {
            return res.status(400).json({"msg" : "즐겨찾기에 추가된 목록이 아닙니다"});
          }
        }
      }

      const folderListName = folderList.map((value) => {return value.folderName});
      for (let i = 0; i < folderListName.length; i++) {
        if (existFolderId[i] != folderListName[i]) {
          return res.status(400).json({"msg" : "기존에 폴더를 수정하여 문제가 발생"});
        }
      }

      */
      await this.favoriteService.listPatch2(folderList, userId);

      console.log("======================================================================");
      console.log("===스크랩 폴더 변경 api종료=======================================================");
      console.log("======================================================================");

      return res.status(200).json({ msg: "업로드에 성공했습니다" });
    } catch (err) {
      next(err);
    }
  };
  //////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////
  makeFolder = async (req, res, next) => {
   
    const { userId } = res.locals.user;
    const { folderList } = req.body;

    //폴더 리스트에서 동일한 이름이 존재하는지 확인
    const FolderListNameResult = await this.favoriteService.compareFolderListName(folderList);
    if (FolderListNameResult) {
      return res.status(410).json({ msg: "동일한 파일 이름을 설정하였습니다" });
    }

    //나의 전체 폴더 가져오기 - folderId, folderName
    const existFolderId = await this.favoriteService.findAllFolders(userId);

    //폴더를 생성
    let createdfolder = [];
    for (let i = 0; i < folderList.length; i++) {
      const createOneDataFolder = await this.favoriteService.folderCreate(
        userId,
        folderList[i]
      );
      createdfolder.push(createOneDataFolder);
    }

    //리스트를 수정(폴더 이름으로)
     await this.favoriteService.listPatch(
      createdfolder,
      existFolderId
    );

    await this.favoriteService.deleteExistFolderId(existFolderId);

    return res.status(200).json({ msg: "폴더를 생성했습니다" });
  };

  //////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////


  deleteFolder = async (req, res, next) => {

    const { folderId } = req.params;
    const { userId } = res.locals.user;

    await this.favoriteService.deleteFolder(folderId);
    await this.favoriteService.findAllFolderLists(folderId, userId);

    res.status(200).json({ msg: "폴더를 삭제하였습니다" });
  };
}

module.exports = favoriteController;
