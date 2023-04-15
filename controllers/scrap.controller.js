const {Shops,Scrap} = require("../models");
class scrapController {


    test = async(req,res,next) => {
        const {userId} = res.locals.user
        const { shopId } = req.params
       
        const findScrap = await Scrap.findOne({
            where : {ShopId : shopId}
        });

        let boolean = true;

        if(!findScrap) { 
            const data = await Scrap.create({
                UserId : userId,
                ShopId : shopId
            });    
        } else { 
            const data = await Scrap.destroy({
                where : {ShopId : shopId}
            });   
            boolean = false
        }

         res.send(boolean);
    };
} 

module.exports = scrapController;