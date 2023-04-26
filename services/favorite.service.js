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

    findAllFolder = async (myAllScrap) => {
        
       // 스크랩에서 스크랩id가져오기
        myAllScrap = myAllScrap.map((value)=> { 
            return value.scrapId
        })
        
        let finalValue = []
        //스크랩ID
        for(let i =0; i < myAllScrap.length; i++){
            let myAllScrapId = myAllScrap[i]
            let value = await this.favoriteRepository.findOnebyFolder(myAllScrapId)
            finalValue.push(value)
        }
        
        finalValue = finalValue.map((value)=> { 
            return value.folderName
        })

        const value2 = await this.favoriteRepository.findAllbyFolder()
        let result = await value2.map((value)=> {
            return value.folderName
        })

        return finalValue
    }

    findOneShops = async(myAllScrap,userId)=> { 
        let result3 = [];

        for(let i = 0; i < myAllScrap.length; i++) { 
            let shopId = myAllScrap[i].shopId
            let scrapId = myAllScrap[i].scrapId

            let result2 = await this.favoriteRepository.findOnebyShop(shopId)
            let isScrap = await this.favoriteRepository.findOnebyScrap(userId,shopId)
     
            let folderName = await this.favoriteRepository.findOnebyFolderScrapId(scrapId)

            isScrap ? isScrap = true : isScrap = false

            let value = { 
             shopId : result2.shopId,
             address: result2.address,
             shopName: result2.shopName, 
             thumbnail : result2.thumbnail,
             feedCount : result2.Feeds.length,
             isScrap: isScrap,
             category : result2.category,
             folderName : folderName.folderName
            }

            result3.push(value);
        }
        return result3
    }

    folderDelete = async(myAllScrapId)=> { 
        await Folders.destroy({where :{ScrapId:myAllScrapId}})
    }

    folderCreate =  async(ScrapId,folderName,)=> { 
         const result = await Folders.create({
            ScrapId,
            folderName
        })

        return result
    }

    listCreate =  async(FolderId,seletedShopId)=> { 
        const result = await Lists.create({
            FolderId, 
            ShopId : seletedShopId
       })

       return result
   }

}

module.exports = FavoriteService;