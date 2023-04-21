const { data } = require("../data");
const { Shops, Menus } = require("../models");
// const { borad,cafe,dog,sandbar,tradition } = require("../uploads");
const express = require("express");
const router = express.Router();

// console.log(data);

let AdminId = 1;
let thumbnail = "cafe1.jpg";
let operatingTime = "연중무휴";

router.get("/test", async (req, res) => {
  for (let i = 0; i < 3699; i++) {
    let flontNumber = Math.ceil(getRandomArbitrary(1000, 9999));
    let backNumber = Math.ceil(getRandomArbitrary(1000, 9999));


    //보드카페: 4.3% 전통찾집: 4.3% 사주카페: 2.9% 애견카페: 1.7% 일반카페: 86.8%
    if ("보드카페" == data[i].category) {
      let random = Math.ceil(getRandomArbitrary(0, 6))
      // thumbnail = "borad.jpg";
      thumbnail = "borad" + random + ".jpg";
    } else if ("전통찻집" == data[i].category) {
      let random = Math.ceil(getRandomArbitrary(0, 4))
      // thumbnail = "tradition.jpg";
      thumbnail = "tradition" + random + ".jpg"
    } else if ("애견카페" == data[i].category) {
      let random = Math.ceil(getRandomArbitrary(0, 3))
      // thumbnail = "dog.jpg";
      thumbnail = "dog" + random + ".jpg"
    } else if ("사주카페" == data[i].category) {
      let random = Math.ceil(getRandomArbitrary(0, 5))
      // thumbnail = "sandbar.jpg";
      thumbnail = "sandbar" + random + ".jpg"
    } else if ("카페" == data[i].category) {
      let random = Math.ceil(getRandomArbitrary(0, 101))
      // thumbnail = "cafe.jpg";
      thumbnail = "cafe" + random + ".jpg";
    } else {
      console.log("존재하지 않는 카페가 있습니다");
    }

    const shop = await Shops.create({
      AdminId: 1,
      shopName: data[i].shopName,
      address: data[i].roadAddress,
      category: data[i].category,
      lng: data[i].lng,
      lat: data[i].lat,
      thumbnail: thumbnail,
      operatingTime: operatingTime,
      phoneNumber: "010-" + flontNumber + "-" + backNumber,
    });

    let totalMenu = Math.ceil(getRandomArbitrary(1, 8));
    let menuName = "아메리카노";
    let menuImg = "americano.jpg";

    for (let i = 0; i < totalMenu; i++) {
      let random = Math.ceil(getRandomArbitrary(0, 15));
      let menuPrice = Math.ceil(getRandomArbitrary(19, 81)) * 100;
      let total = [];

      let checkRondomNumber = 1;
      while (checkRondomNumber) {
        //랜덤숫자중 없는 값이면 -1
        checkRondomNumber = total.indexOf(random);

        //값이 없으면 push로 넣어주기 있으면 다시돌리기
        if (checkRondomNumber == -1) {
          checkRondomNumber = 0;
          total.push(random);
        } else {
          random = Math.ceil(getRandomArbitrary(1, 14));
        }
      }
        switch (random) {
          case 1:
          menuName = "에스프레소";
          menuImg = "espresso.jpg";
            break;
          case 2:
            menuName = "아메리카노";
            menuImg = "americano.jpg";
            break;
          case 3:
            menuName = "카페라떼";
            menuImg = "cafeLatte.jpg";
            break;
          case 4:
            menuName = "카푸치노";
            menuImg = "cappuccino.jpg";
            break;
          case 5:
            menuName = "핸드드립";
            menuImg = "dripCoffee.jpg";
            break;
          case 6:
            menuName = "사이폰커피";
            menuImg = "vacuumCoffeePot.jpg";
            break;
          case 7:
            menuName = "아인슈페너";
            menuImg = "einstephener.jpg";
            break;
          case 8:
            menuName = "아보가토";
            menuImg = "avocadoCoffee.jpg";
            break;
          case 9:
            menuName = "카페모카";
            menuImg = "cafeMocha.jpg";
            break;
          case 10:
            menuName = "커피 프라페";
            menuImg = "coffeeFrappe.jpg";
            break;
          case 11:
            menuName = "콜드 브루";
            menuImg = "coldBrew.jpg";
            break;
          case 12:
            menuName = "티";
            menuImg = "tea.jpg";
            break;
          case 13:
            menuName = "에이드";
            menuImg = "ade.jpg";
            break;
          case 14:
            menuName = "스무디";
            menuImg = "smoothie.jpg";
            break;
        }
      

      await Menus.create({
        ShopId: shop.shopId,
        menuName: menuName,
        menuDescription: "메뉴설명",
        picture: menuImg,
        price: menuPrice,
      });
    }
  }
  return res.send("완2");
});

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

module.exports = router;