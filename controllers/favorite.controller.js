const { Scrap, Shops, Feeds,Folders } = require("../models");
const FavoriteService = require("../services/favorite.service");
class favoriteController {
  favoriteService = new FavoriteService();



  //즐겨찾기 리스트 보여주기
  listFavorite = async (req, res, next) => {
    const { userId } = res.locals.user;

    //내가 Scrap한 데이터 가져오기
    const myAllScrap = await this.favoriteService.findAllScrap(userId);

    //Scrap 데이터에 가계정보 가져오기
    const result2 = await this.favoriteService.findOneShops(myAllScrap, userId);

    // let folderList = await this.favoriteService.findAllFolder(myAllScrap);
    let folderList = await this.favoriteService.findAllFolder(userId);
    //수정
    // let folderList = await Folders.findAll({})
    // folderList = folderList.map((value)=> {
    //   return value.folderName
    // })
    /*
    //원하는 결과물
    {
      scrapList : [
       {
       shopId : number,
       address: string, //도로명으로 통일
       shopName: string, 
       thumbnail : string,
       feedCount : number,
       isScrap: boolean,
       category : string,
       folderName : string (추가됨),
     }
      ],
      folderList : [ {
       folderId : number,
       folderName : string
     }, ]
     }
      */

    res.status(200).json({ scrapList: result2, folderList });
  };


  makeFolders = async (req, res, next) => {
    const { userId } = res.locals.user;
    let { folderList } = req.body;

    //내가 Scrap한 데이터 가져오기
    const myAllScrap = await this.favoriteService.findAllScrap(userId);

    //나의 스크랩한 shopId 전체
    let myAllScrapShopId = myAllScrap.map((value) => {
      return value.shopId;
    });

    //나의 스크랩한 scrapId전체
    let myAllScrapId = myAllScrap.map((value) => {
      return value.scrapId;
    });

    //내가 만든 folder 전체 가져오기
    // const myAllFolder = await this.favoriteService.findAllFolder()

    //추가한 shopList중에 즐겨 찾기를 않하면 파일 생성을 할 수 없도록 구현
    for (let i = 0; i < folderList.length; i++) {
      // let isMyFolderName = myAllFolder.indexOf(folderList[i].folderName)
      // if(isMyFolderName != -1){
      //   return res.send("중복된 가게 이름이 있습니다")
      // }

      for (let j = 0; j < folderList[i].shopList.length; j++) {
        let result = folderList[i].shopList[j].shopId;
        let isMyScrapbyshopList = myAllScrapShopId.indexOf(result);
        if (isMyScrapbyshopList == -1) {
          return res.send("즐겨찾기에 추가된 목록이 아닙니다");
        }
      }
    }

    //기존 폴더 삭제
    await this.favoriteService.folderDelete(myAllScrapId);

    //폴더 생성 (스크랩ID,폴더이름 )
    for (let i = 0; i < folderList.length; i++) {
      const createFolder = await this.favoriteService.folderCreate(
        myAllScrap[i].scrapId,
        userId,
        folderList[i].folderName
      );

      const folder = createFolder.folderId;

      //내용물 가게작성(폴더Id,가게Id)
      for (let j = 0; j < folderList[i].shopList.length; j++) {
        let seletedShopId = folderList[i].shopList[j].shopId;
        await this.favoriteService.listCreate(folder, seletedShopId);
      }
    }

    return res.status(200).json({ msg: "업로드에 성공했습니다" });
  };

  // //빈 폴더 1개 만들기 (폴더는 만들어지는데 하나라도 이름이 다르면 폴더들이 생성이 안됨)
  // makeFolder = async (req, res, next) => {

  //   const { userId } = res.locals.user;
  //   const { folderList } = req.body;
  //   //생성된 폴더가 기존 폴더이름과 동일한지 비교 
  //   let test = await this.favoriteService.compareFolderName(folderList)

  //   for (let i = 0; i < folderList.length; i++) {
  //     await this.favoriteService.folderCreate(null, userId, folderList[i]);
  //   }
  //   return res.send("폴더를 생성했습니다");
  // };
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

//빈 폴더 1개 만들기 (폴더는 만들어지는데 하나라도 이름이 다르면 폴더들이 생성이 안됨)
makeFolder = async (req, res, next) => {

  const { userId } = res.locals.user;
  const { folderList } = req.body;

  //폴더 리스트에서 동일한 이름이 존재하는지 확인 
  const FolderListNameResult = await this.favoriteService.compareFolderListName(folderList)
  if(FolderListNameResult){ return res.status(410).json({"msg" : "동일한 파일 이름을 설정하였습니다" })}


  //나의 전체 스크랩 가져오기 - scrapId,shopId,listId
  const myAllScrapData = await this.favoriteService.findAllScrap(userId);

  //나의 전체 리스트 가져오기 - ScrapId,listId,FolderId
  const findAllListsData = await this.favoriteService.findAllLists(myAllScrapData)

  //나의 전체 폴더 가져오기 - folderId, folderName
  let existFolderId = await this.favoriteService.findAllFolder(userId)


 
  /*
  🟥 List 만들기 위한 조건 
   createLists = async(FolderId,ScrapId) 

  🟨 Folders 만들기 위한 조건
 folderCreate = async (ScrapId, userId, folderName)
  */
  
  //나의 전체 Lists 자료 가져오기


  //가지고 있는것 : userId, folderName
  //찾고 싶은것 : 나의 list 전체
  // const findListData = await this.favoriteService.findListData(userId,shopId)


  // 생성하기전 기존 폴더 삭제 
  // await this.favoriteService.folderDelete(userId)

  //폴더를 생성
  let createdfolder = []
  for (let i = 0; i < folderList.length; i++) {
    const folderOneData = await this.favoriteService.folderCreate(userId, folderList[i]);
    createdfolder.push(folderOneData)
  }

  //만들어진 폴더 (folderId, folderName) 폴더이름
  //folderCreate 
  //기존 폴더 (folderId, folderName)
  //findAllFoldersData

  //리스트를 수정(폴더 이름으로)
  const finallData = await this.favoriteService.listPatch(createdfolder,existFolderId)



  await this.favoriteService.deleteExistFolderId(existFolderId)

  return res.status(200).json({"msg" : "폴더를 생성했습니다"});
  return res.json({myAllScrapData,findAllListsData,findAllFoldersData})
};
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////


/*
기존파일 삭제 하지 않고 만듬
makeFolder = async (req, res, next) => {

  const { userId } = res.locals.user;
  const { folderList } = req.body;

  //폴더 리스트에서 동일한 이름이 존재하는지 확인 
  const FolderListNameResult = await this.favoriteService.compareFolderListName(folderList)

  if(FolderListNameResult){ 
    return res.status(410).json({"msg" : "동일한 파일 이름을 설정하였습니다" })
  }

  for (let i = 0; i < folderList.length; i++) {
    await this.favoriteService.folderCreate(null, userId, folderList[i]);
  }

  return res.status(200).json({"msg" : "폴더를 생성했습니다"});
};
*/

deleteFolder = async (req, res, next) => {
  let { folderId } = req.params

  await this.favoriteService.deleteFolder(folderId)

  res.status(200).json({"msg" : "폴더를 삭제하였습니다"})
}

}

module.exports = favoriteController;
