const  ScrapService = require("../services/scrap.service")

class scrapController {
    
   scrapService = new ScrapService();

    updateScrap = async(req,res,next) => {
        const { userId } = res.locals.user
        const { shopId } = req.params

        const findScrap = await this.scrapService.findOneScrap(shopId,userId)
     
        let boolean = true;

        if(!findScrap) { 
            this.scrapService.createScrap(userId,shopId)
        } else { 
            this.scrapService.deleteScrap(shopId)
            boolean = false
        }

         res.status(200).json({isScrap : boolean});
    };
} 

module.exports = scrapController;