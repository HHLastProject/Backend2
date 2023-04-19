const {Shops,SearchHistory}= require("../models");
const { Op } = require("sequelize");

class SearchRepository {

    findAllbyShop = async(searchName,shopId) => { 
        // const value2 = await Shops.findAll({ where : {shopName : { [Op.like]: '%' + searchName + '%' }}});
         const result = await Shops.findAll({ where : {
        [Op.or] : [
            {shopName : { [Op.like]: '%' + searchName + '%' }},
            // {shopId : shopId ? shopId : null},
            ]
        }});

        return result
    };

    createbySearchHistory = async(userId,shopId) => {  
        await SearchHistory.create({
            UserId : userId, 
            ShopId : shopId
        });
    }

    findAllbySearchHistory = async(userId) => {  

        const findAllSearchHistory = await SearchHistory.findAll({
            where :{UserId : userId}
        });

        console.log("findAllSearchHistory 레파지토리에서") 
        console.log(findAllSearchHistory) 
        console.log("===============================") 
        return findAllSearchHistory
    }

    deletebySearchHistory = async(userId) => {   
       
        const findOneSearchHistory = await SearchHistory.findOne({
            where :{UserId : userId}
        });

        await findOneSearchHistory.destroy({})

    }
     
}
module.exports = SearchRepository;