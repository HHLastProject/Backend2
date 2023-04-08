const { Admin, Shops, Menus, Likes, Reviews } = require('../models');
const { parseModelToFlatObject } = require('../helpers/sequelize.helper');
const { Op } = require('sequelize');

class AdminRepository {
    constructor() {}

    signup = async (adminEmail, hashedPassword) => {
        const admin = await Admin.create({
            adminPassword: hashedPassword,
            adminEmail: adminEmail
        });
        return admin;
    }

    isExistingEmail = async (adminEmail) => {
        const isExist = await Admin.findOne({
            where: {adminEmail}
        });
        return !!isExist;
    }

    findOneAdmin = async (adminEmail) => {
        const admin = await Admin.findOne({where: { adminEmail }});
        console.log(admin);
        return admin;
    };

    getAllShops = async () => {
        const allShops = await Shops.findAll({
            attributes: [ 'shopId', 'shopName', 'category', 'address', 'x', 'y'],
            order: [['createdAt', 'DESC']]
        });
        return allShops;
    };

    postShop = async (adminId, shopName, category, address, detailAddress, x, y, operatingTime, phoneNumber, thumbnail) => {
        
        const createdShop = await Shops.create({
            AdminId: adminId, shopName, category, address, detailAddress, x, y, operatingTime, phoneNumber, thumbnail
        });

        return createdShop;
    };

    postMenu = async (shopId, menuName, price, menuDescription, picture) => {

        const createdMenu = await Menus.create({
            ShopId: shopId, menuName, price, menuDescription, picture
        });
   
        return createdMenu;
    }
 

    updateShop = async (shopId, shopName, category, address,detailAddress, x, y, operatingTime, phoneNumber, thumbnail) => {
        const updatedShop = await Shops.update(
            { shopName, category, address,detailAddress, x, y, operatingTime, phoneNumber, thumbnail },
            { where: { shopId } }
            );
        return updatedShop;
    };

    updateMenu = async ( ShopId, menuName, price, menuDescription, picture ) => {

     
        let updatedMenu = await Menus.update(
            { menuName, price, menuDescription, picture },
            { where: { ShopId } }
        )

        return updatedMenu;
    };

    // if(updatedShop) {
    //     await Menus.update(
    //         { menuName, price, menuDesciption },
    //         { where: { ShopId: shopId } }
    //     )
    // }


    getOneShopInfo = async (shopId) => {
        const shopInfo = await Shops.findOne({
            attributes: ['shopId', 'adminId', 'shopName', 'category', 'address', 'x', 'y', 'operatingTime', 'phoneNumber', 'thumbnail'],
            where: {shopId},
            include: [
                {
                    model: Menus,
                    attributes: ['menuId', 'menuName', 'price', 'menuDescription','picture'],
                }
            ],
        });
        return shopInfo;
    };


    findOneShop = async (shopId) => {
        const shop = await Shops.findOne({where: {shopId}});
      
        return shop;
    };

    deleteShop = async (shopId) => {
        await Shops.destroy({where: {shopId}});
    };
}

module.exports = AdminRepository;