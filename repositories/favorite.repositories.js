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
    

    findOnebyFolder = async(folderName) => { 
        const value2 = await Folders.findOne({where : {folderName}});
        return value2
    };


    findAllbyFolder = async() => { 
        const value2 = await Folders.findAll({});
        return value2
    };

    findOnebyLists = async(ListId) => { 
         const value2 = await Lists.findOne({where : {listId :ListId}})
        return value2
    };

    findOnebyFolderName =  async(folderId) => { 
        return await Folders.findOne({where : {folderId }})
    }

    findOnebyScrap = async(userId,shopId) => { 
        return await Scrap.findAll({where:{UserId : userId, ShopId : shopId}});
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