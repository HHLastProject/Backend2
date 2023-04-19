const 대문자이름Repository = require("../repositories/shop.repository.js")

class 대문자이름Service {
    constructor() {
        this.ShopRepository = new ShopRepository();
    }

    getAllMainShop = async () => {
        return await this.ShopRepository.getAllMainShop()
    }

}

module.exports = 대문자이름Service;