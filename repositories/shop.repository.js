const { Shops, Menus, Sequelize } = require("../models");

class ShopRepository {
    constructor() { }
    // 전체 조회
    getAllMainShop = async () => {
        return await Shops.findAll({
            attributes: [
                "shopId",
                "address",
                "shopName",
                "thumbnail",
                "category",
                [
                    Sequelize.fn('max', Sequelize.col('Menus.price')),
                    'maxPrice'
                ],
                [
                    Sequelize.fn('min', Sequelize.col('Menus.price')),
                    'minPrice'
                ]
            ],
            include: [
                {
                    model: Menus,
                    attributes: [],
                    // where: { ShopId: shopId }
                }
            ],
            order: [['createdAt', 'DESC']],
            group: ['Shops.shopId'], // Shops 테이블의 primary key로 그룹화
            raw: true, // JSON 형태로 반환된 데이터를 처리
        })
    }
    // 상세 조회
    getFindOneShop = async ({shopId}) => {
        const shop = await Shops.findByPk(shopId, {
            attributes: [
                "shopName",
                "thumbnail",
                "category",
                "address",
                // "operatingTime",
                // "phoneNumber",
            ],
            include: [
                {
                    model: Menus,
                    attributes: [
                        "menuName",
                        "price",
                        "menuDescription",
                        "picture",
                    ]
                }
            ],
            raw: true, // JSON 형태로 반환된 데이터를 처리
            nest: true, // include된 데이터를 객체 내부에 중첩
        });
        if (!shop) {
            return null;
        }
        
        const menu = shop.Menus ? shop.Menus.map((menu) => ({
            menuName: menu.menuName,
            price: menu.price,
            menuDescription: menu.menuDescription,
            picture: menu.picture || null,
        })) : [];
        
        delete shop.Menus;
        return { ...shop, menu };
    }
}

module.exports = ShopRepository;