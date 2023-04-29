const { Shops, Menus, Sequelize } = require("../models");
const { Op } = Sequelize;

class ShopRepository {
    constructor() { }
    // 전체 조회
    getAllMainShop = async () => {
        return await Shops.findAll({
            attributes: [
                "shopId",
                "address",
                "lng",
                "lat",
                "shopName",
                "thumbnail",
                "Menus.menuName",
                [
                    Sequelize.fn('max', Sequelize.col('Menus.price')),
                    'maxPrice'
                ],
                [
                    Sequelize.fn('min', Sequelize.col('Menus.price')),
                    'minPrice'
                ],
                "category",
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

    // 전체 조회 (거리 계산 반영)
    getAllMainShop2 = async () => {
        return await Shops.findAll({
            attributes: [
                "shopId",
                "address",
                "lng",
                "lat",
                "shopName",
                "thumbnail",
                "Menus.menuName",
                [
                    Sequelize.fn('max', Sequelize.col('Menus.price')),
                    'maxPrice'
                ],
                [
                    Sequelize.fn('min', Sequelize.col('Menus.price')),
                    'minPrice'
                ],
                "category",
            ],
            include: [
                {
                    model: Menus,
                    attributes: [],
                }
            ],
            order: [['createdAt', 'DESC']],
            group: ['Shops.shopId'],
            raw: true,
        });
    };

    // 베스트 10개만 표시
    getAllBestShop = async () => {
        return await Shops.findAll({
            attributes: [
                "shopId",
                "address",
                "lng",
                "lat",
                "shopName",
                "thumbnail",
                "Menus.menuName",
                [
                    Sequelize.fn('max', Sequelize.col('Menus.price')),
                    'maxPrice'
                ],
                [
                    Sequelize.fn('min', Sequelize.col('Menus.price')),
                    'minPrice'
                ],
                "category",
            ],
            include: [
                {
                    model: Menus,
                    attributes: [],
                    // where: { ShopId: shopId }
                }
            ],
            order: Sequelize.literal('rand()'), // 무작위로 정렬
            group: ['Shops.shopId'], // Shops 테이블의 primary key로 그룹화
            raw: true, // JSON 형태로 반환된 데이터를 처리
        })
        // return await Shops.findAll({
        //     attributes: [
        //         "shopId",
        //         "address",
        //         "lng",
        //         "lat",
        //         "shopName",
        //         "thumbnail",
        //         // "Menus.menuName",
        //         // [
        //         //     Sequelize.fn('max', Sequelize.col('Menus.price')),
        //         //     'maxPrice'
        //         // ],
        //         // [
        //         //     Sequelize.fn('min', Sequelize.col('Menus.price')),
        //         //     'minPrice'
        //         // ],
        //         "category",
        //     ],
        //     include: [
        //         {
        //             model: Menus,
        //             attributes: [
        //                 "menuName",
        //                 [
        //                     Sequelize.fn('max', Sequelize.col('price')),
        //                     'maxPrice'
        //                 ],
        //                 [
        //                     Sequelize.fn('min', Sequelize.col('price')),
        //                     'minPrice'
        //                 ],  
        //             ],
        //         }
        //     ],
        //     order: Sequelize.literal('rand()'), // 무작위로 정렬
        //     // limit: 10, // 상위 10개만 가져옴
        //     group: ['Shops.shopId'], // Shops 테이블의 primary key로 그룹화    
        //     raw: true, // JSON 형태로 반환된 데이터를 처리
        // })
    };

    // 상세 조회
    getFindOneShop = async ({shopId}) => {
        const shop = await Shops.findOne({
            where : {shopId}, 
            attributes: [
                "shopName",
                "thumbnail",
                "category",
                "address",
                "lng",
                "lat",
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