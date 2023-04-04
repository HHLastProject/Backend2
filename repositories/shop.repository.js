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
        const shop = await Shops.findOne({
            where : {shopId}, 
            attributes: [
                "shopName",
                "thumbnail",
                "category",
                "address",
                "operatingTime",
                "phoneNumber",
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
        });
        if (!shop) {
            return null;
        }
        

        return shop;
    }
}

module.exports = ShopRepository;