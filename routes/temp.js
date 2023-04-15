const { data } = require("../data");
const { Shops, Menus } = require("../models");
// const { borad,cafe,dog,sandbar,tradition } = require("../uploads");
const express = require("express");
const router = express.Router();

// console.log(data);

let AdminId = 1;
let thumbnail = "temp.jpg";
let operatingTime = "연중무휴";
let phoneNumber = "010-1111-2222";

router.get("/test", async (req, res) => {
  for (let i = 46; i < 66; i++) {
    let flontNumber = Math.ceil(getRandomArbitrary(1000, 9999));
    let backNumber = Math.ceil(getRandomArbitrary(1000, 9999));

    if ("보드카페" == data[i].category) {
      thumbnail = "borad.jpg";
    } else if ("전통찻집" == data[i].category) {
      thumbnail = "tradition.jpg";
    } else if ("애견카페" == data[i].category) {
      thumbnail = "dog.jpg";
    } else if ("사주카페" == data[i].category) {
      thumbnail = "sandbar.jpg";
    } else if ("카페" == data[i].category) {
      thumbnail = "cafe.jpg";
    } else {
      console.log("존재하지 않는 카페가 있습니다");
    }

    const shop = await Shops.create({
      AdminId: AdminId,
      shopName: data[i].shopName,
      category: data[i].category,
      address: data[i].roadAddress,
      lng: data[i].lng,
      lat: data[i].lat,
      thumbnail: thumbnail,
      operatingTime: operatingTime,
      phoneNumber: "010-" + flontNumber + "-" + backNumber,
    });

    let totalMenu = Math.ceil(getRandomArbitrary(1, 8));
    let menuName = "아메리카노";
    let menuImg = null;

    for (let i = 0; i < totalMenu; i++) {
      let random = Math.ceil(getRandomArbitrary(1, 14));
      let menuPrice = Math.ceil(getRandomArbitrary(20, 80)) * 100;
      let total = [];

      let checkRondomNumber = 1;
      while (checkRondomNumber) {
        //랜덤숫자중 없는 값이면 -1
        checkRondomNumber = total.indexOf(random);
        console.log(checkRondomNumber);

        //값이 없으면 push로 넣어주기 있으면 다시돌리기
        if (checkRondomNumber == -1) {
          checkRondomNumber = 0;
          total.push(random);
        } else {
          random = Math.ceil(getRandomArbitrary(1, 14));
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
      }

      console.log("=====================");
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
