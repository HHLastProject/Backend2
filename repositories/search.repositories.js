const {Shops,SearchHistory}= require("../models");
const { Op } = require("sequelize");

class SearchRepository {

    findAllbyShop = async(searchName) => { 
        return await Shops.findAll({ 
            where : {
        [Op.or] : [
            {shopName : {[Op.like]: searchName ? '%' + searchName + '%' :  '%'}},
            ]
        }});
    };

    createbySearchHistory = async(userId,searchName) => {  
        await SearchHistory.create({
            UserId : userId, 
            searchContent : searchName
        });
    }

    findAllbySearchHistory = async(userId) => {  
        return await SearchHistory.findAll({
            where :{UserId : userId}
        });
    }

    deletebySearchHistory = async(userId) => {   
        const findOneSearchHistory = await SearchHistory.findOne({
            where :{UserId : userId}
        });

        await findOneSearchHistory.destroy({})
    }
     
}
module.exports = SearchRepository;