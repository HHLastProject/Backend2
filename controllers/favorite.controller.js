const { Scrap, Shops, Feeds,Folders } = require("../models");
const FavoriteService = require("../services/favorite.service");
class favoriteController {
  favoriteService = new FavoriteService();

  listFavorite = async (req, res, next) => {
    const { userId } = res.locals.user;

    //내가 Scrap한 데이터 가져오기
    const myAllScrap = await this.favoriteService.findAllScrap(userId);
    //Scrap 데이터에 가계정보 가져오기
    const result2 = await this.favoriteService.findOneShops(myAllScrap, userId);

   
    let folderList = await this.favoriteService.findAllFolder(myAllScrap);
    //수정
    // let folderList = await Folders.findAll({}) 
    // folderList = folderList.map((value)=> { 
    //   return value.folderName
    // })

    res.status(200).json({ scrapList: result2, folderList});
  };

  // makeFolders = async (req, res, next) => {
  //   const { userId } = res.locals.user;
  //   const { shopList } = req.body;
  //   let total = req.body;
   
  //   //내가 Scrap한 데이터 가져오기
  //    const myAllScrap = await this.favoriteService.findAllScrap(userId);

  //   //나의 스크랩한 shopId 전체
  //   let myAllScrapShopId = myAllScrap.map((value)=> { 
  //     return value.shopId
  //   })

  //   let myAllScrapId = myAllScrap.map((value)=> { 
  //     return value.scrapId
  //   })

  //   //추가한 shopList중에 즐겨 찾기를 않하면 파일 생성을 할 수 없도록 구현
  //   for(let i = 0; i < total.length;i++){
  //     for(let j =0; j < total[i].shopList.length; j++){
  //       let result = total[i].shopList[j].shopId
  //       let isMyScrapbyshopList = myAllScrapShopId.indexOf(result)
  //       if(isMyScrapbyshopList  == -1){
  //         return res.send("즐겨찾기에 추가된 목록이 아닙니다")
  //       }
  //     }
  //   }

  //   //기존 폴더 삭제
  //   await this.favoriteService.folderDelete(myAllScrapId)

  //   //폴더 생성 (스크랩ID,폴더이름 )
  //   for(let i = 0; i < total.length ; i++){
  //     const createFolder = await this.favoriteService.folderCreate(
  //       myAllScrap[i].scrapId,  
  //       total[i].folderName    
  //     );

  //     const folder = createFolder.folderId
     
  //     //내용물 가게작성(폴더Id,가게Id)
  //     for (let j = 0; j <total[i].shopList.length ; j++) {
  //       let seletedShopId = total[i].shopList[j].shopId
  //       await this.favoriteService.listCreate(folder,seletedShopId);
  //     }
  //   }

  //   return res.status(200).json({ msg: "업로드에 성공했습니다" });
  // };

  // makeFolders = async (req, res, next) => {
  //   const { userId } = res.locals.user;
  //   let total = req.body;
   
  //   //내가 Scrap한 데이터 가져오기
  //    const myAllScrap = await this.favoriteService.findAllScrap(userId);

  //   //나의 스크랩한 shopId 전체
  //   let myAllScrapShopId = myAllScrap.map((value)=> { 
  //     return value.shopId
  //   })

  //   let myAllScrapId = myAllScrap.map((value)=> { 
  //     return value.scrapId
  //   })

  //   //추가한 shopList중에 즐겨 찾기를 않하면 파일 생성을 할 수 없도록 구현
  //   for(let i = 0; i < total.folderList.length;i++){
  //     for(let j =0; j < total.folderList[i].shopList.length; j++){
  //       let result = total.folderList[i].shopList[j].shopId
  //       let isMyScrapbyshopList = myAllScrapShopId.indexOf(result)
  //       if(isMyScrapbyshopList  == -1){
  //         return res.send("즐겨찾기에 추가된 목록이 아닙니다")
  //       }
  //     }
  //   }

  //   //기존 폴더 삭제
  //   await this.favoriteService.folderDelete(myAllScrapId)

  //   //폴더 생성 (스크랩ID,폴더이름 )
  //   for(let i = 0; i < total.folderList.length ; i++){
  //     const createFolder = await this.favoriteService.folderCreate(
  //       myAllScrap[i].scrapId,  
  //       total.folderList[i].folderName    
  //     );

  //     const folder = createFolder.folderId
     
  //     //내용물 가게작성(폴더Id,가게Id)
  //     for (let j = 0; j <total.folderList[i].shopList.length ; j++) {
  //       let seletedShopId = total.folderList[i].shopList[j].shopId
  //       await this.favoriteService.listCreate(folder,seletedShopId);
  //     }
  //   }

  //   return res.status(200).json({ msg: "업로드에 성공했습니다" });
  // };

  makeFolders = async (req, res, next) => {
    const { userId } = res.locals.user;
    let {folderList} = req.body;
   
    //내가 Scrap한 데이터 가져오기
    const myAllScrap = await this.favoriteService.findAllScrap(userId);
 ;

    //나의 스크랩한 shopId 전체
    let myAllScrapShopId = myAllScrap.map((value)=> { 
      return value.shopId
    })

    //나의 스크랩한 scrapId전체
    let myAllScrapId = myAllScrap.map((value)=> { 
      return value.scrapId
    })

    //내가 만든 folder 전체 가져오기
    // const myAllFolder = await this.favoriteService.findAllFolder()

    //추가한 shopList중에 즐겨 찾기를 않하면 파일 생성을 할 수 없도록 구현
    for(let i = 0; i < folderList.length;i++){
      
      // let isMyFolderName = myAllFolder.indexOf(folderList[i].folderName)
      // if(isMyFolderName != -1){
      //   return res.send("중복된 가게 이름이 있습니다")
      // }

      for(let j =0; j < folderList[i].shopList.length; j++){
        let result = folderList[i].shopList[j].shopId
        let isMyScrapbyshopList = myAllScrapShopId.indexOf(result)
        if(isMyScrapbyshopList  == -1){
          return res.send("즐겨찾기에 추가된 목록이 아닙니다")
        }
      }
    }

    //기존 폴더 삭제
    await this.favoriteService.folderDelete(myAllScrapId)

    //폴더 생성 (스크랩ID,폴더이름 )
    for(let i = 0; i < folderList.length ; i++){
      const createFolder = await this.favoriteService.folderCreate(
        myAllScrap[i].scrapId,  
        folderList[i].folderName    
      );

      const folder = createFolder.folderId
     
      //내용물 가게작성(폴더Id,가게Id)
      for (let j = 0; j <folderList[i].shopList.length ; j++) {
        let seletedShopId = folderList[i].shopList[j].shopId
        await this.favoriteService.listCreate(folder,seletedShopId);
      }
    }

    return res.status(200).json({ msg: "업로드에 성공했습니다" });
  };


}

module.exports = favoriteController;
