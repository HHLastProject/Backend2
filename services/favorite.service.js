const FavoriteRepository = require("../repositories/favorite.repositories")
const {Folders,Lists} = require("../models");
class FavoriteService {
    constructor() {
        this.favoriteRepository = new FavoriteRepository();
    }

    findAllScrap = async (userId) => {
        const value2 = await this.favoriteRepository.findAllbyScrap(userId)
        
        let result = await value2.map((value)=> {
            return { 
                scrapId : value.scrapId,
                shopId : value.ShopId 
            }
        })
        return result
    }

    findOneShops = async(result,userId)=> { 
        let result3 = [];

        for(let i = 0; i < result.length; i++) { 
            let shopId = result[i].shopId
           
            let result2 = await this.favoriteRepository.findOnebyShop(shopId)
            let isScrap = await this.favoriteRepository.findOnebyScrap(userId,shopId)
        
            isScrap ? isScrap = true : isScrap = false

            let value = { 
             shopId : result2.shopId,
             address: result2.address,
             shopName: result2.shopName, 
             thumbnail : result2.thumbnail,
             feedCount : result2.Feeds.length,
             category : result2.category,
             isScrap: isScrap
            }

            result3.push(value);
        }
        return result3
    }

    folderCreate =  async(ScrapId,folderName,)=> { 
         const result = await Folders.create({
            ScrapId,
            folderName
        })

        return result
    }

    listCreate =  async(FolderId)=> { 
        const result = await Lists.create({
            FolderId
       })

       return result
   }

}

module.exports = FavoriteService;