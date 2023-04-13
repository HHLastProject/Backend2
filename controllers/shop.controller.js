const ShopService = require("../services/shop.service.js"); 
const haversine = require('haversine');

class ShopController {
    constructor() {
        this.ShopService = new ShopService();
    }

    getAllMainShop = async (req, res, next) => {
        // const { userId } = res.locals.user;
        try {
            const shops = await this.ShopService.getAllMainShop();
            res.status(200).json({ shop : shops })
        } catch(error) {
            console.log(error)
            res.status(400).json({ errorMsg: "예기치 못한 오류가 발생했습니다" });
            return;
        }
    }

    // 1. 유저 현 위치 좌표(x, y)와 반경 거리 안에 있는 range를 프론트에서 받아와서 request body로 받는다.
    // 2. for문을 만든다 , 반복횟수 : 전체가게 갯수
    // 3. 가게 하나 현 위치 좌표인 shop 테이블의 x, y 값을 가져온다.
    // 4. 유저 현 위치 좌표(x, y)와 가게 현위치 좌표(x, y)를 참고해서 계산을 한다.
    // 5. 그 계산한 값이 if문을 사용해서 range(예시에는 500) 값보다 작는 조건문을 쓴다. => 3번의 자료를 저장한다
    // 6. 조건에 맞는 가게 정보를 push함수를 사용해서 result 배열에 추가한다
    // 7. for문이 끝난다
    // 8. 그 조건에 맞는 가게들만 API 명세서에 있는 대로 모두 다 출력해서 해당 조건에 맞는 가게 정보의 모든 조회를 도출 한다

    getAllMainShop2 = async (req, res, next) => {
        // 1. 유저 현 위치 좌표(x, y)와 반경 거리 안에 있는 range를 프론트에서 받아와서 request body로 받는다.
        const { x, y, range } = req.body;
        try {
            const shops = await this.ShopService.getAllMainShop2();
            console.log("확인")
            // const shops = await Shops.findAll({
            //     attributes: [
            //         "shopId",
            //         "address",
            //         "x",
            //         "y",
            //         "shopName",
            //         "thumbnail",
            //         "Menus.menuName",
            //         [
            //             Sequelize.fn('max', Sequelize.col('Menus.price')),
            //             'maxPrice'
            //         ],
            //         [
            //             Sequelize.fn('min', Sequelize.col('Menus.price')),
            //             'minPrice'
            //         ],
            //         "category",
            //     ],
            //     include: [
            //         {
            //             model: Menus,
            //             attributes: [],
            //             // where: { ShopId: shopId }
            //         }
            //     ],
            //     order: [['createdAt', 'DESC']],
            //     group: ['Shops.shopId'], // Shops 테이블의 primary key로 그룹화
            //     raw: true, // JSON 형태로 반환된 데이터를 처리
            // })

            let result = [];
            // 2. for문을 만든다 , 반복횟수 : 전체가게 갯수
            for (let i = 0; i < shops.length; i++) {
                // 3. 가게 하나 현 위치 좌표인 shop 테이블의 x, y 값을 가져온다.
                const userLocate = { latitude: x, longitude: y };
                // 4. 유저 현 위치 좌표(x, y)와 가게 현위치 좌표(x, y)를 참고해서 계산을 한다.
                const shopLocate = { latitude: shops[i].x, longitude: shops[i].y };
                const distance = haversine(userLocate, shopLocate, { unit: 'meter' }); // meter가 미터를 뜻함
                console.log(distance.toFixed(2) + " m");
                // 5. 그 계산한 값이 if문을 사용해서 range(예시에는 500) 값보다 작는 조건문을 쓴다. => 3번의 자료를 저장한다
                if (distance <= range) {
                    result.push(shops[i]); // 6. 조건에 맞는 가게 정보를 push함수를 사용해서 result 배열에 추가한다
                } // 7. for문이 끝난다
            }
            // 8. 그 조건에 맞는 가게들만 API 명세서에 있는 대로 모두 다 출력해서 해당 조건에 맞는 가게 정보의 모든 조회를 도출 한다
            res.status(200).json({ shops : result }) 
        } catch (error) {
            console.log(error);
            res.status(400).json({ errorMsg: "예기치 못한 오류가 발생했습니다" });
            return;
        }
    };
    
    getFindOneShop = async (req, res, next) => {
        const { shopId } = req.params;
        try {
            const shop = await this.ShopService.getFindOneShop({shopId});
            if (!shop) {
                return res.status(404).json({ errorMsg: "맛집이 존재하지 않습니다."});
            }
            res.status(200).json({ shop : shop });
        } catch(error) {
            console.log(error);
            res.status(400).json({ errorMsg: "예기치 못한 오류가 발생했습니다" });
        }
    }
}

module.exports = ShopController;