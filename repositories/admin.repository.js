const { Admin, Shops, Menus} = require('../models');

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
            attributes: [ 'shopId', 'shopName', 'category', 'address', 'lng', 'lat'],
            order: [['createdAt', 'DESC']]
        });
        return allShops;
    };

    postShop = async (adminId, shopName, category, address, lng, lat, operatingTime, phoneNumber, thumbnail) => {
        
        const createdShop = await Shops.create({
            AdminId: adminId, shopName, category, address, lng, lat, operatingTime, phoneNumber, thumbnail
        });

        return createdShop;
    };

    postMenu = async (shopId, menuName, price, menuDescription, picture) => {

        const createdMenu = await Menus.create({
            ShopId: shopId, menuName, price, menuDescription, picture
        });
   
        return createdMenu;
    }

    updateShop = async (shopId, shopName, category, address, lng, lat, operatingTime, phoneNumber, thumbnail) => {
        const updatedShop = await Shops.update(
            { shopName, category, address, lng, lat, operatingTime, phoneNumber, thumbnail },
            { where: { shopId } }
            );
        return updatedShop;
    };

    //shopId를 대신 menuId로 변경
    updateMenu = async ( ShopId, menuId, menuName, price, menuDescription, picture ) => {

        let updatedMenu = await Menus.update(
            { menuName, price, menuDescription, picture },
            { where: { menuId : menuId } }
        )
        return updatedMenu;
    };

    getOneShopInfo = async (shopId) => {
        const shopInfo = await Shops.findOne({
            attributes: ['shopId', 'adminId', 'shopName', 'category', 'address', 'lng', 'lat', 'operatingTime', 'phoneNumber', 'thumbnail'],
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