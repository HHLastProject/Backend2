const {Scrap,Lists,Folders} = require("../models");


class ScrapRepository {

    findOnebyScrap = async(shopId,userId) => { 
        return await Scrap.findOne({
            where : {ShopId : shopId,UserId :userId}
        });
    };

    findOnebyFolder = async(userId) => { 
         return await Folders.findOne({
            where : {UserId :userId, folderName : "즐겨찾기"}
        });
    };

    createbyScrap = async (userId,shopId) => { 
        return await Scrap.create({
                UserId : userId,
                ShopId : shopId
        }); 
    }
  
    //스크랩을 기본폴더를 즐겨찾기로 수정하기
    createLists = async(FolderId,ScrapId) => {
        Lists.create({
            FolderId,
            ScrapId
        },
        {where: { 
            FolderId,
            ScrapId
        }})
    } 


    deletebyScrap = async (userId,shopId) => { 
        await Scrap.destroy({
            where : {UserId : userId ,ShopId : shopId}
        });   
    }

}
module.exports = ScrapRepository;