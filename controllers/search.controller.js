
const {Shops} = require("../models");
const { Op } = require("sequelize");
const {SearchHistory} = require("../models")


class searchController {


    test = async(req,res,next) => {
       
        const {serchValue} = req.body
        console.log(serchValue)
        //  const value = await Shops.findOne({ where : {address : serchValue}});
        const value2 = await Shops.findAll({ where : {address : { [Op.like]: '%' + serchValue + '%' }}});
          
      
         console.log("value2");
         console.log(value2);
         console.log("======");
        let result = await value2.map((value)=> {

            return { 
                shopId : value.shopId,
                shopName : value.shopName,
                shopAddress : value.address
            }

        })


        

         res.send(result);
    };


    test2 = async(req,res,next) => { 
        const {userId}   = res.locals.user
            /////////////////////////////////// 
            const {serchValue} = req.body
        
            //가게검색중
        const value2 = await Shops.findOne({ where : {address : { [Op.like]: '%' + serchValue + '%' }}});
     

        await SearchHistory.create({
            UserId : userId, 
            ShopId : value2.shopId
        });
    
        //검색 기록수 확인
        const findAllSH = await  SearchHistory.findAll({
            where :{UserId : userId}
        });

      //30이 넘어가면 지우기
        if(30 < findAllSH.length) { 
            
            const findAllSH2 = await SearchHistory.findOne({
                where :{UserId : userId}
            });

            await findAllSH2.destroy({
            })
         } 

         
         let result = { 
            shopId : value2.shopId, 
            shopName : value2.shopName, 
            shopAddress : value2.address, 
         }

        res.send({result});
    }
} 

module.exports = searchController;