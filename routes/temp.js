const { data } = require("../data");
const { Shops } = require("../models");
// const { borad,cafe,dog,sandbar,tradition } = require("../uploads");
const express = require("express");
const router = express.Router();

// console.log(data);

let AdminId = 1;
let thumbnail = "temp.jpg";
let operatingTime = "연중무휴";
let phoneNumber = "010-1111-2222";

router.get("/test", async (req,res)=> { 


 

  for (let i = 0; i < 10; i++) {
  
    let flontNumber  = Math.ceil(getRandomArbitrary(1000,9999));
    let backNumber = Math.ceil(getRandomArbitrary(1000,9999));

    if("보드카페" == data[i].category){
      thumbnail = "borad.jpg";
    } else if("전통찻집" == data[i].category){
      thumbnail = "tradition.jpg"
    }else if("애견카페" == data[i].category){
      thumbnail = "dog.jpg";
    }else if("사주카페" == data[i].category){
      thumbnail = "sandbar.jpg"
    }else if("일반카페" == data[i].category){
      thumbnail = "cafe.jpg";
    }else { 
      console.log("존재하지 않는 카페가 있습니다")
    }


    await Shops.create({
      AdminId: AdminId,
      shopName: data[i].shopName,
      category: data[i].category,
      address: data[i].jibunAddress,
      detailAddress: data[i].roadAddress,
      x: data[i].lng,
      y: data[i].lat,
      thumbnail: thumbnail,
      operatingTime: operatingTime,
      phoneNumber: "010-" + flontNumber +"-" + backNumber,
    });

   
  }
  return res.send("완2");
})


function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}



module.exports = router;
