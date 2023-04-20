const {Shops,SearchHistory}= require("../models");
const { Op } = require("sequelize");

class SearchRepository {

    findAllbyShop = async(searchName) => { 
        // const result = await Shops.findAll({ where : {shopName : { [Op.like]: '%' + searchName + '%' }}});
        const result = await Shops.findAll({ 
            where : {
        [Op.or] : [
            {shopName : {[Op.like]: searchName ? '%' + searchName + '%' :  '%'}},
            ]
        }});

        return result
    };

    createbySearchHistory = async(userId,searchName) => {  
        await SearchHistory.create({
            UserId : userId, 
            searchContent : searchName
        });
    }

    findAllbySearchHistory = async(userId) => {  
        const findAllSearchHistory = await SearchHistory.findAll({
            where :{UserId : userId}
        });
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