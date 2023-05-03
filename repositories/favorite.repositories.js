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
        // return await Scrap.findAll({where:{UserId : userId, ShopId : shopId}});
    }; 
    
    findOnebyFolder = async(folderName) => { 
        return await Folders.findOne({where : {folderName}});
    };

    findAllbyFolders = async(userId) => { 
        return await Folders.findAll({ where: { userId } });
    }

    // findAllbyFolder = async() => { 
    //     const value2 = await Folders.findAll({});
    //     return value2
    // };

    folderbyCreate = async(userId,folderName) => { 
        return await Folders.create({
            UserId: userId,
            folderName,
          });
    }

    deletebyFolder = async(folderId) => {  
        await Folders.destroy({ where: { folderId } });
    }

    findOnebyFolderName =  async(folderId) => { 
        return await Folders.findOne({where : {folderId }})
    }

    findOnebyLists = async(ListId) => { 
        const value2 = await Lists.findOne({where : {listId :ListId}})
       return value2
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

    findOnebyFolderList = async() => { 
        return 
    }
}
module.exports = FavoriteRepository;