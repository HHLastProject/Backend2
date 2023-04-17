
const {Scrap,Shops,Feeds} = require("../models");
const { Op } = require("sequelize");
class favoriteController {


    test = async(req,res,next) => {
        const { userId } = res.locals.user;

        console.log(userId)
        //  const value = await Shops.findOne({ where : {address : serchValue}});
         const value2 = await Scrap.findAll({where:{UserId:userId}});

       
         let result = await value2.map((value)=> {

            return { 
                shopId : value.ShopId
            }

        })

        let result3 = [];
        for(let i = 0; i < result.length; i++) { 
            
            let result2 = await Shops.findOne({
                attributes: ['shopName', "address","thumbnail","shopId"],
                include: [
                    {
                        model: Feeds,             
                        attributes: ["feedId"],
                    },
                ],
                where: {shopId : result[i].shopId}
            });

            let isScrap = await Scrap.findOne({where :{ UserId : userId, ShopId : result2.shopId}})
            isScrap ? isScrap = true : isScrap = false


            let value = { 
             shopId : result2.shopId,
             address: result2.address,
             shopName: result2.shopName, 
             thumbnail : result2.thumbnail,
             feedCount : result2.Feeds.length,
             isScrap: isScrap,
            }

            result3.push(value);
        }
        
        // console.log(result2);
        // await Shop.findOne({result});

         console.log(result3[1]);

        //  shopId : number,
        //  address: string, //도로명으로 통일
        //  shopName: string, 
        //  thumbnail : string,
        //  feedCount : number,
        //  isScrap: boolean,
         res.send(result3);
    };
} 

module.exports = favoriteController;