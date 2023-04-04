const ShopService = require("../services/shop.service.js");

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
            res.status(400).json({msg: "예기치 못한 오류가 발생했습니다"});
            return;
        }
    }
    
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