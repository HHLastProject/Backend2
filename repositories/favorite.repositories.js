const {Scrap,Shops,Feeds,Folders} = require("../models");

class FavoriteRepository {

    findAllbyScrap = async(userId) => { 
        const value2 = await Scrap.findAll({where:{UserId:userId}});
        return value2
    };
    

    findOnebyFolder = async(myAllScrapId) => { 
        const value2 = await Folders.findOne({where : {scrapId : myAllScrapId}});
        return value2
    };


    findAllbyFolder = async() => { 
        const value2 = await Folders.findAll({});
        return value2
    };

    findOnebyFolderScrapId = async(scrapId) => { 
        const value2 = await Folders.findOne({where:{scrapId}});
        return value2
    };


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