
const {Shops} = require("../models");
const { Op } = require("sequelize");
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
} 

module.exports = searchController;