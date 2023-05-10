const {Scrap,Shops,Feeds,Folders,Lists} = require("../models");

class FavoriteRepository {

    findAllbyScraps = async(userId) => { 
        return await Scrap.findAll({
            attributes: ['ShopId',"scrapId"],
            include: [
                {
                    model: Lists,
                    attributes: ['listId'],
                }
            ],
            where:{UserId:userId}
        });
    };
    
    findOnebyScrap = async(userId,shopId) => { 
        return await Scrap.findOne({where:{UserId : userId, ShopId : shopId}});
    }; 
    
    findOnebyFolder = async(folderName,userId) => { 
        return await Folders.findOne({where : {folderName,UserId :userId}});
    };

    findOnebyFolderName =  async(folderId) => { 
        return await Folders.findOne({where : {folderId }})
    }

    findAllbyFolders = async(userId) => { 
        return await Folders.findAll({ where: { userId } });
    }

    folderbyCreate = async(userId,folderName) => { 
        return await Folders.create({
            UserId: userId,
            folderName,
          });
    }

    deletebyFolder = async(folderId) => {  
        await Folders.destroy({ where: { folderId } });
    }

    findOnebyLists = async(ListId) => { 
        return await Lists.findOne({where : {listId :ListId}})
   };

    findOnebyShop = async(shopId) => { 
        return await Shops.findOne({
            attributes: ['shopName', "address","thumbnail","shopId","category"],
            include: [
                {
                    model: Feeds,             
                    attributes: ["feedId"],
                },
            ],
            where: {shopId}
        });
    }

}
module.exports = FavoriteRepository;