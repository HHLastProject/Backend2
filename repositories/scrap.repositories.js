const {Scrap} = require("../models");


class ScrapRepository {

    findOnebyScrap = async(shopId,userId) => { 
        const findScrap = await Scrap.findOne({
            where : {ShopId : shopId,UserId :userId}
        });
        return findScrap
    };

    createbyScrap = async (userId,shopId) => { 
        await Scrap.create({
                UserId : userId,
                ShopId : shopId
        }); 
    }
    
    deletebyScrap = async (shopId) => { 
        await Scrap.destroy({
            where : {ShopId : shopId}
        });   
    }

}
module.exports = ScrapRepository;