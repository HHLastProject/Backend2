const {Scrap,Lists,Folders} = require("../models");


class ScrapRepository {

    findOnebyScrap = async(shopId,userId) => { 
        const findScrap = await Scrap.findOne({
            where : {ShopId : shopId,UserId :userId}
        });
        return findScrap
    };

    findOnebyFolder = async(userId) => { 
        const findFolder = await Folders.findOne({
            where : {UserId :userId, folderName : "즐겨찾기"}
        });
        return findFolder
    };

    createbyScrap = async (userId,shopId) => { 
        const scrapData = await Scrap.create({
                UserId : userId,
                ShopId : shopId
        }); 

        return scrapData
    }
  
    // //스크랩을 기본폴더를 즐겨찾기로 수정하기
    // upDatebyFolder = async(userId,scrapId) => {
    //     Folders.update({
    //         // UserId : userId,
    //         ScrapId : scrapId,
    //         // folderName : "즐겨찾기"
    //     },
    //     {where: { 
    //         UserId : userId,
    //         folderName : "즐겨찾기"
    //     }}
    //     )
    // } 

/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////


    //스크랩을 기본폴더를 즐겨찾기로 수정하기
    createLists = async(FolderId,ShopId) => {
        Lists.create({
            FolderId,
            ShopId
        },
        {where: { 
            FolderId,
            ShopId
        }})
    } 

    deleteLists = async(FolderId,ShopId) => {
        await Lists.destroy(
        {where: { 
            FolderId,
            ShopId
        }})
    } 
      

/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////


    deletebyScrap = async (shopId) => { 
        await Scrap.destroy({
            where : {ShopId : shopId}
        });   
    }

}
module.exports = ScrapRepository;