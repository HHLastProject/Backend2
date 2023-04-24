
const {Scrap,Shops,Feeds} = require("../models");
 const FavoriteService = require("../services/favorite.service");
class favoriteController {

    favoriteService = new FavoriteService();

    listFavorite = async(req,res,next) => {
        const { userId } = res.locals.user;
        console.log("userId 내 id가 들어 있어야 함")
        console.log(userId)
        console.log("============================")
        //내가 Scrap한 데이터 가져오기
        const result = await this.favoriteService.findAllScrap(userId)
        //Scrap 데이터에 가계정보 가져오기
        const result2 = await this.favoriteService.findOneShops(result,userId)
      
        res.status(200).json({scrapList : result2});
    };

    // makeFolders = async(req,res,next) => {
    //     const { userId } = res.locals.user;
    //     const {folderName,shopList} = req.body

    //     //내가 Scrap한 데이터 가져오기
    //     const result = await this.favoriteService.findAllScrap(userId)
    //     //Scrap 데이터에 가계정보 가져오기
    //     const result2 = await this.favoriteService.findOneShops(result,userId)

    //     // console.log("아마도 가계정보 가져오기")
    //     // console.log(result2[0].shopId)
        
    //     const result3 = await this.favoriteService.folderCreate(result[0].scrapId,folderName)
    //     console.log(result3.folderId)
    //     console.log("===========================")

    //     const folder = result3.folderId
    //     const result4 = await this.favoriteService.listCreate(folder)

    //     // const result5 = { 
    //     //     folderName : result3.folderName,
    //     //     shopList : result4.


    //     // }

    //     res.status(200).json({scrapList : result5});
    // };
    /*
    test2 = async(req,res,next) => {
        const { userId } = res.locals.user;
        // 스크랩가져오기 (유저정보)
        const value2 = await Scrap.findAll({where:{UserId:userId}});

         let result = await value2.map((value)=> {
            return { shopId : value.ShopId }
        })

        let result3 = [];

        //가게 정보 하나 가져오기
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
  
         res.send(result3);
    };*/
} 

module.exports = favoriteController;