const {Scrap,Shops,Feeds} = require("../models");

class FavoriteRepository {

    findAllbyScrap = async(userId) => { 
        const value2 = await Scrap.findAll({where:{UserId:userId}});
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
}
module.exports = FavoriteRepository;