const {Scrap,Shops,Feeds,Folders,Lists} = require("../models");

class FavoriteRepository {

    findAllbyScrap = async(userId) => { 
        const result = await Scrap.findAll({
            attributes: ['ShopId',"scrapId"],
            include: [
                {
                    model: Lists,
                    attributes: ['listId'],
                }
            ],
            where:{UserId:userId}
        
        });
        return result
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
        const value2 = await Folders.findOne({where : {folderId }})
        return value2
    }

    findOnebyScrap = async(userId,shopId2) => { 
     
        const value2 = await Scrap.findAll({where:{UserId:userId, ShopId : shopId2}});
        return value2
    }; 

    findOnebyShop = async(shopId) => { 
        let result2 = await Shops.findOne({
            attributes: ['shopName', "address","thumbnail","shopId","category"],
            include: [
                {
                    model: Feeds,             
                    attributes: ["feedId"],
                },
            ],
            where: {shopId}
        });

        return result2
    }

    findOnebyFolderList = async() => { 
        return 
    }
}
module.exports = FavoriteRepository;