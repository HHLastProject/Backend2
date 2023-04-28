const ScrapRepository = require("../repositories/scrap.repositories")

class ScrapService {
    constructor() {
        this.scrapRepository = new ScrapRepository();
    }

    findOneScrap = async (shopId,userId) => {
       return await this.scrapRepository.findOnebyScrap(shopId,userId)
    }
    
    findOneFolder = async (userId) => {
        let findFolder = await this.scrapRepository.findOnebyFolder(userId)
        let { folderId } = findFolder
        return folderId
     }


    createScrap = async (userId,shopId,folderId) => {
        let data = await this.scrapRepository.createbyScrap(userId,shopId)
     
        const ShopId = data.ShopId
        //스크랩 선택하면 폴더에 스크랩 추가
        this.scrapRepository.createLists(folderId,ShopId)
    }
 
    deleteScrap = async (userId,shopId,folderId) => {
        this.scrapRepository.deletebyScrap(shopId)
     
        this.scrapRepository.deleteLists(folderId,shopId)
    }
}

module.exports = ScrapService;