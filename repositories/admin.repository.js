const { Admins, Shops, Menus, Likes, Reviews } = require('../models');
const { parseModelToFlatObject } = require('../helpers/sequelize.helper');
const { Op } = require('sequelize');

class AdminRepository {
    constructor() {}

    signup = async (adminEmail, hashedPassword) => {
        const admin = await Admins.create({
            AdminPassword: hashedPassword,
            adminEmail: adminEmail
        });
        return admin;
    }

    isExistingEmail = async (adminEmail) => {
        const isExist = await Admins.findOne({where: {adminEmail}});
        return !!isExist;
    }

    findOndAdmin = async (adminEmail) => {
        const admin = await Admins.findOne({where: { adminEmail }});
        return admin;
    };

    getAllShops = async () => {
        const allShops = await Shops.findAll({
            attributes: [ 'shopName', 'category', 'address'],
            order: [['createdAt', 'DESC']]
        });
        return allShops;
    };

    postShop = async (adminId, shopName, category, address, operatingTime, phoneNumber, thumbnail, menuName, price, menuDesciption) => {
        const createdShop = await Shops.create({
            adminId, shopName, category, address, operatingTime, phoneNumber, thumbnail
        });
        if(createdShop) {
            const shopId = createdShop.shopId;
            await Menus.create({
                ShopId:shopId, menuName, price, menuDesciption
            })
        }
        return createdShop;
    };

    updateShop = async (shopId, adminId, shopName, category, address, operatingTime, phoneNumber, thumbnail, menuName, price, menuDesciption) => {
        const updatedShop = await Shops.update(
            { adminId, shopName, category, address, operatingTime, phoneNumber, thumbnail },
            { where: { shopId } }
            );
        if(updatedShop) {
            await Menus.update(
                { menuName, price, menuDesciption },
                { where: { ShopId: shopId } }
            )
        }
        return updatedShop;
    };

    getOneShopInfo = async (shopId) => {
        const shopInfo = await Shops.findOne({
            attributes: ['adminId', 'shopName', 'category', 'address', 'operatingTime', 'phoneNumber', 'thumbnail'],
            where: {shopId},
            include: [
                {
                    model: Menus,
                    attributes: ['menuName', 'price', 'menuDesciption'],
                    where: {shopId}
                }
            ],
            raw: true,
        }).then(parseModelToFlatObject);
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