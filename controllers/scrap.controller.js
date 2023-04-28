const  ScrapService = require("../services/scrap.service")

class scrapController {
    
   scrapService = new ScrapService();

    updateScrap = async(req,res,next) => {
        const { userId } = res.locals.user
        const { shopId } = req.params

        const findScrap = await this.scrapService.findOneScrap(shopId,userId)

        //즐겨찾기 폴더ID 가져오기
        let folderId = await this.scrapService.findOneFolder(userId)

        let boolean = true;

        if(!findScrap) { 
            this.scrapService.createScrap(userId,shopId,folderId)
        } else { 
            this.scrapService.deleteScrap(userId,shopId,folderId)
            boolean = false
        }

         res.status(200).json({isScrap : boolean});
    };
} 

module.exports = scrapController;