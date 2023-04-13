const { data } = require("../data");
const { Shops,Menus } = require("../models");
// const { borad,cafe,dog,sandbar,tradition } = require("../uploads");
const express = require("express");
const router = express.Router();

// console.log(data);

let AdminId = 1;
let thumbnail = "temp.jpg";
let operatingTime = "연중무휴";
let phoneNumber = "010-1111-2222";

router.get("/test", async (req,res)=> { 
  for (let i = 0; i < 15; i++) {
  
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
    }else if("카페" == data[i].category){
      thumbnail = "cafe.jpg";
    }else { 
      console.log("존재하지 않는 카페가 있습니다")
    }


    const shop = await Shops.create({
      AdminId: AdminId,
      shopName: data[i].shopName,
      category: data[i].category,
      address: data[i].jibunAddress,
      lng: data[i].lng,
      lat : data[i].lat,
      thumbnail: thumbnail,
      operatingTime: operatingTime,
      phoneNumber: "010-" + flontNumber +"-" + backNumber,
    });



    let totalMenu  = Math.ceil(getRandomArbitrary(1,5));
    let menuName = "아메리카노"

   
    for(let i = 0; i < totalMenu; i++){
      let random  = Math.ceil(getRandomArbitrary(1,14));
      let menuPrice  = Math.ceil(getRandomArbitrary(20,80))*100;
      let total =[];
  
      let checkRondomNumber = 1;
      while(checkRondomNumber){
        
        //랜덤숫자중 없는 값이면 -1
       checkRondomNumber = total.indexOf(random);
       console.log(checkRondomNumber);

       //값이 없으면 push로 넣어주기 있으면 다시돌리기
        if(checkRondomNumber == -1){ 
          checkRondomNumber = 0 
          total.push(random);
        } else {
          random  = Math.ceil(getRandomArbitrary(1,14))
        };
        
      switch(random) {
          case 1 : menuName = "에스프레소"
                  break;
          case 2 : menuName = "아메리카노"
                  break;
          case 3 : menuName = "카페라떼"
                  break;
          case 4 : menuName = "카푸치노"
                  break;
          case 5 : menuName = "핸드드립"
                  break;
          case 6 : menuName = "사이폰커피"
                  break;
          case 7 : menuName = "아인슈페너"
                  break;
          case 8 : menuName = "아보가토"
                  break;      
          case 9 : menuName = "카페모카"
                  break;               
          case 10 : menuName = "커피 프라페"
                  break;
          case 11 : menuName = "콜드 브루"
                  break;
          case 12 : menuName = "티"
                  break;
          case 13 : menuName = "에이드"
                  break;      
          case 14 : menuName = "스무디"
                  break;                  
      }
      
    }
 
    console.log("=====================");
    await Menus.create({
    ShopId : shop.shopId,
    menuName : menuName,
    menuDescription : "메뉴설명",
    picture : thumbnail,
    price : menuPrice
    });
    }
   
  }
  return res.send("완2");
})


function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}



module.exports = router;
