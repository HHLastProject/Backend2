const ScrapRepository = require("../repositories/scrap.repositories")

class ScrapService {
    constructor() {
        this.scrapRepository = new ScrapRepository();
    }

    findOneScrap = async (shopId,userId) => {
       return await this.scrapRepository.findOnebyScrap(shopId,userId)
    }

    createScrap = async (userId,shopId) => {
        this.scrapRepository.createbyScrap(userId,shopId)
    }
 

    deleteScrap = async (shopId) => {
        this.scrapRepository.deletebyScrap(shopId)
    }
}

module.exports = ScrapService;