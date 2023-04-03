const ShopRepository = require("../repositories/shop.repository.js")

class ShopService {
    constructor() {
        this.ShopRepository = new ShopRepository();
    }

    getAllMainShop = async () => {
        return await this.ShopRepository.getAllMainShop()
        
    }

    getFindOneShop = async ({shopId}) => {
        return await this.ShopRepository.getFindOneShop({shopId})
    }


}

module.exports = ShopService;