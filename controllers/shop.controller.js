const ShopService = require("../services/shop.service.js");
const haversine = require("haversine");
const { Scrap, Feeds ,Shops} = require("../models");

class ShopController {
  constructor() {
    this.ShopService = new ShopService();
  }

  getAllMainShop = async (req, res, next) => {
    // const { userId } = res.locals.user;
    try {
      const shops = await this.ShopService.getAllMainShop();
      res.status(200).json({ shop: shops });
    } catch (error) {
      console.log(error);
      res.status(400).json({ errorMsg: "예기치 못한 오류가 발생했습니다" });
      return;
    }
  };

  // 1. 유저 현 위치 좌표(x, y)와 반경 거리 안에 있는 range를 프론트에서 받아와서 request body로 받는다.
  // 2. for문을 만든다 , 반복횟수 : 전체가게 갯수
  // 3. 가게 하나 현 위치 좌표인 shop 테이블의 x, y 값을 가져온다.
  // 4. 유저 현 위치 좌표(x, y)와 가게 현위치 좌표(x, y)를 참고해서 계산을 한다.
  // 5. 그 계산한 값이 if문을 사용해서 range(예시에는 500) 값보다 작는 조건문을 쓴다. => 3번의 자료를 저장한다
  // 6. 조건에 맞는 가게 정보를 push함수를 사용해서 result 배열에 추가한다
  // 7. for문이 끝난다
  // 8. 그 조건에 맞는 가게들만 API 명세서에 있는 대로 모두 다 출력해서 해당 조건에 맞는 가게 정보의 모든 조회를 도출 한다

  getAllMainShop2 = async (req, res, next) => {
    // 1. 유저 현 위치 좌표(x, y)와 반경 거리 안에 있는 range를 프론트에서 받아와서 request body로 받는다.
    const { lng, lat, range } = req.body;
    try {
      const shops = await this.ShopService.getAllMainShop2();
      // totalDistance 거리가 짧은 순대로 sort 함수를 사용 (chatGPT 활용)
      shops.sort((a, b) => {
        const userLocate = { latitude: lng, longitude: lat };
        const shopALocate = { latitude: a.lng, longitude: a.lat };
        const shopBLocate = { latitude: b.lng, longitude: b.lat };
        const distanceA = haversine(userLocate, shopALocate, { unit: "meter" });
        const distanceB = haversine(userLocate, shopBLocate, { unit: "meter" });
        return distanceA - distanceB;
      });

      let result = [];
      // 2. for문을 만든다 , 반복횟수 : 전체가게 갯수
      for (let i = 0; i < shops.length; i++) {
        // 3. 가게 하나 현 위치 좌표인 shop 테이블의 x, y 값을 가져온다.
        const userLocate = { latitude: lng, longitude: lat };
        // 4. 유저 현 위치 좌표(x, y)와 가게 현위치 좌표(x, y)를 참고해서 계산을 한다.
        const shopLocate = { latitude: shops[i].lng, longitude: shops[i].lat };
        const totalDistance = haversine(userLocate, shopLocate, {
          unit: "meter",
        }); // meter가 미터를 뜻함
        console.log(totalDistance.toFixed(2) + " m");
        const shopInfo = {
          shopId: shops[i].shopId,
          address: shops[i].address,
          lng: shops[i].lng,
          lat: shops[i].lat,
          shopName: shops[i].shopName,
          thumbnail: shops[i].thumbnail,
          menuName: shops[i].menuName,
          maxPrice: shops[i].maxPrice,
          minPrice: shops[i].minPrice,
          category: shops[i].category,
          distance: totalDistance.toFixed(0) + " m",
        };
        // 5. 그 계산한 값이 if문을 사용해서 range(예시에는 500) 값보다 작는 조건문을 쓴다. => 3번의 자료를 저장한다
        if (totalDistance <= range) {
          // result.push(shops[i]);
          result.push(shopInfo); // 6. 조건에 맞는 가게 정보를 push함수를 사용해서 result 배열에 추가한다
        }
      } // 7. for문이 끝난다
      // 8. 그 조건에 맞는 가게들만 API 명세서에 있는 대로 모두 다 출력해서 해당 조건에 맞는 가게 정보의 모든 조회를 도출 한다
      res.status(200).json({ shops: result });
    } catch (error) {
      console.log(error);
      res.status(400).json({ errorMsg: "예기치 못한 오류가 발생했습니다" });
      return;
    }
  };

  getAllMainShop3 = async (req, res, next) => {
    const { lng, lat, range } = req.body;
    try {
      if (res.locals.user) {
        const { userId } = res.locals.user;

        const shops = await this.ShopService.getAllMainShop2();

        shops.sort((a, b) => {
          const userLocate = { latitude: lng, longitude: lat };
          const shopALocate = { latitude: a.lng, longitude: a.lat };
          const shopBLocate = { latitude: b.lng, longitude: b.lat };
          const distanceA = haversine(userLocate, shopALocate, {
            unit: "meter",
          });
          const distanceB = haversine(userLocate, shopBLocate, {
            unit: "meter",
          });
          return distanceA - distanceB;
        });

        let result = [];

        for (let i = 0; i < shops.length; i++) {
          const userLocate = { latitude: lng, longitude: lat };

          const shopLocate = {
            latitude: shops[i].lng,
            longitude: shops[i].lat,
          };

          const totalDistance = haversine(userLocate, shopLocate, {
            unit: "meter",
          });

          let isScrap = await Scrap.findOne({
            where: { ShopId: shops[i].shopId, UserId: userId },
          });

          let findFeedAll = await Feeds.findAll({
            where: { ShopId : shops[i].shopId }
          })

          let feedCount = findFeedAll.length

          console.log(totalDistance.toFixed(2) + " m");
          const shopInfo = {
            shopId: shops[i].shopId,
            address: shops[i].address,
            lng: Number(shops[i].lng),
            lat: Number(shops[i].lat),
            shopName: shops[i].shopName,
            thumbnail: shops[i].thumbnail,
            menuName: shops[i].menuName,
            maxPrice: Number(shops[i].maxPrice),
            minPrice: Number(shops[i].minPrice),
            category: shops[i].category,
            distance: Number(totalDistance.toFixed(0)),
            feedCount: feedCount,
            isScrap: isScrap ? true : false,
          };

          if (totalDistance <= Number(range)) {
            result.push(shopInfo);
          }
        }

        res.status(200).json({ shops: result });
      } else {
        
        const shops = await this.ShopService.getAllMainShop2();

        shops.sort((a, b) => {
          const userLocate = { latitude: lng, longitude: lat };
          const shopALocate = { latitude: a.lng, longitude: a.lat };
          const shopBLocate = { latitude: b.lng, longitude: b.lat };
          const distanceA = haversine(userLocate, shopALocate, {
            unit: "meter",
          });
          const distanceB = haversine(userLocate, shopBLocate, {
            unit: "meter",
          });
          return distanceA - distanceB;
        });

        let result = [];

        for (let i = 0; i < shops.length; i++) {
          const userLocate = { latitude: lng, longitude: lat };

          const shopLocate = {
            latitude: shops[i].lng,
            longitude: shops[i].lat,
          };

          const totalDistance = haversine(userLocate, shopLocate, {
            unit: "meter",
          });

          let findFeedAll = await Feeds.findAll({
            where: { ShopId : shops[i].shopId }
          })

          let feedCount = findFeedAll.length

          // console.log(totalDistance.toFixed(2) + " m");
          const shopInfo = {
            shopId: shops[i].shopId,
            address: shops[i].address,
            lng: Number(shops[i].lng),
            lat: Number(shops[i].lat),
            shopName: shops[i].shopName,
            thumbnail: shops[i].thumbnail,
            menuName: shops[i].menuName,
            maxPrice: Number(shops[i].maxPrice),
            minPrice: Number(shops[i].minPrice),
            category: shops[i].category,
            distance: Number(totalDistance.toFixed(0)),
            feedCount: feedCount,
            isScrap: false,
          };

          if (totalDistance <= range) {
            result.push(shopInfo);
          }
        }

        res.status(200).json({ shops: result });
      }
    } catch (error) {
      console.log(error);
      res.status(400).json({ errorMsg: "예기치 못한 오류가 발생했습니다" });
      return;
    }
  };


  getAllMainShop4 = async (req, res, next) => {
    const { lng, lat, range } = req.body;
    try {
      if (res.locals.user) {
        const { userId } = res.locals.user;

        const shops = await this.ShopService.getAllMainShop2();

        shops.sort((a, b) => {
          const userLocate = { latitude: lng, longitude: lat };
          const shopALocate = { latitude: a.lng, longitude: a.lat };
          const shopBLocate = { latitude: b.lng, longitude: b.lat };
          
          const distanceA = haversine(userLocate, shopALocate, {
            unit: "meter",
          });
          
          const distanceB = haversine(userLocate, shopBLocate, {
            unit: "meter",
          });

          return distanceA - distanceB;
        });

        let result = [];

        for (let i = 0; i < shops.length; i++) {
          const userLocate = { latitude: lng, longitude: lat };

          const shopLocate = {
            latitude: shops[i].lng,
            longitude: shops[i].lat,
          };

          const totalDistance = haversine(userLocate, shopLocate, {
            unit: "meter",
          });

       
          const shopInfo = {
            shopId: shops[i].shopId,
            address: shops[i].address,
            lng: Number(shops[i].lng),
            lat: Number(shops[i].lat),
            shopName: shops[i].shopName,
            thumbnail: shops[i].thumbnail,
            menuName: shops[i].menuName,
            maxPrice: Number(shops[i].maxPrice),
            minPrice: Number(shops[i].minPrice),
            category: shops[i].category,
            distance: Number(totalDistance.toFixed(0)),
          };

          if (totalDistance <= Number(range)) {
            result.push(shopInfo);
          }
        }

 
        let result2 = []
        let cn = result.length


        shops.sort((a, b) => {
          const userLocate = { latitude: lng, longitude: lat };
          const shopALocate = { latitude: a.lng, longitude: a.lat };
          const shopBLocate = { latitude: b.lng, longitude: b.lat };
          
          const distanceA = haversine(userLocate, shopALocate, {
            unit: "meter",
          });
          
          const distanceB = haversine(userLocate, shopBLocate, {
            unit: "meter",
          });
          
          return distanceA - distanceB;
        });

        


        for(let i = 0 ;i < cn; i++) {
     
          let isScrap =  await Scrap.findOne({
            where: { ShopId: shops[i].shopId, UserId: userId },
          });
  
          let findFeedAll = await Feeds.findAll({
            where: { ShopId : shops[i].shopId }
          })

          let findScrapAll = await Scrap.findAll({
            where: { ShopId : shops[i].shopId }
          })

          const userLocate = { latitude: lng, longitude: lat };

          const shopLocate = {
            latitude: shops[i].lng,
            longitude: shops[i].lat,
          };

          
          const totalDistance = haversine(userLocate, shopLocate, {
            unit: "meter",
          });

          let feedCount = findFeedAll.length

          let scrapCount = findScrapAll.length
          
          result = { 
            shopId: shops[i].shopId,
            address: shops[i].address,
            lng: Number(shops[i].lng),
            lat: Number(shops[i].lat),
            shopName: shops[i].shopName,
            thumbnail: shops[i].thumbnail,
            menuName: shops[i].menuName,
            maxPrice: Number(shops[i].maxPrice),
            minPrice: Number(shops[i].minPrice),
            category: shops[i].category,
            distance: Number(totalDistance.toFixed(0)),
            feedCount: feedCount,
            isScrap: isScrap ? true : false,
            scrapCount: scrapCount,
          }

          result2.push(result);
        }
        
        res.status(200).json({ shops: result2 });
      } else {
        const shops = await this.ShopService.getAllMainShop2();

        shops.sort((a, b) => {
          const userLocate = { latitude: lng, longitude: lat };
          const shopALocate = { latitude: a.lng, longitude: a.lat };
          const shopBLocate = { latitude: b.lng, longitude: b.lat };
          
          const distanceA = haversine(userLocate, shopALocate, {
            unit: "meter",
          });
          
          const distanceB = haversine(userLocate, shopBLocate, {
            unit: "meter",
          });

          return distanceA - distanceB;
        });

        let result = [];

        for (let i = 0; i < shops.length; i++) {
          const userLocate = { latitude: lng, longitude: lat };

          const shopLocate = {
            latitude: shops[i].lng,
            longitude: shops[i].lat,
          };

          const totalDistance = haversine(userLocate, shopLocate, {
            unit: "meter",
          });
       
          const shopInfo = {
            shopId: shops[i].shopId,
            address: shops[i].address,
            lng: Number(shops[i].lng),
            lat: Number(shops[i].lat),
            shopName: shops[i].shopName,
            thumbnail: shops[i].thumbnail,
            menuName: shops[i].menuName,
            maxPrice: Number(shops[i].maxPrice),
            minPrice: Number(shops[i].minPrice),
            category: shops[i].category,
            distance: Number(totalDistance.toFixed(0)),
            // feedCount: feedCount,
            // isScrap: isScrap ? true : false,
          };

          if (totalDistance <= Number(range)) {
            result.push(shopInfo);
          }
        }

 
        let result2 = []
        let cn = result.length


        shops.sort((a, b) => {
          const userLocate = { latitude: lng, longitude: lat };
          const shopALocate = { latitude: a.lng, longitude: a.lat };
          const shopBLocate = { latitude: b.lng, longitude: b.lat };
          
          const distanceA = haversine(userLocate, shopALocate, {
            unit: "meter",
          });
          
          const distanceB = haversine(userLocate, shopBLocate, {
            unit: "meter",
          });
          
          return distanceA - distanceB;
        });

        


        for(let i = 0 ;i < cn; i++) {
  
          let findFeedAll = await Feeds.findAll({
            where: { ShopId : shops[i].shopId }
          })

          let findScrapAll = await Scrap.findAll({
            where: { ShopId : shops[i].shopId }
          })

          const userLocate = { latitude: lng, longitude: lat };

          const shopLocate = {
            latitude: shops[i].lng,
            longitude: shops[i].lat,
          };

          
          const totalDistance = haversine(userLocate, shopLocate, {
            unit: "meter",
          });

          let feedCount = findFeedAll.length

          let scrapCount = findScrapAll.length
          
          result = { 
            shopId: shops[i].shopId,
            address: shops[i].address,
            lng: Number(shops[i].lng),
            lat: Number(shops[i].lat),
            shopName: shops[i].shopName,
            thumbnail: shops[i].thumbnail,
            menuName: shops[i].menuName,
            maxPrice: Number(shops[i].maxPrice),
            minPrice: Number(shops[i].minPrice),
            category: shops[i].category,
            distance: Number(totalDistance.toFixed(0)),
            feedCount: feedCount,
            isScrap: false,
            scrapCount: scrapCount,
          }

          result2.push(result);
        }
        
        res.status(200).json({ shops: result2 });
      }
    } catch (error) {
      console.log(error);
      res.status(400).json({ errorMsg: "예기치 못한 오류가 발생했습니다" });
      return;
    }
  };


  getAllBestShop = async (req, res, next) => {
    const { lng, lat } = req.body;
    try {
      if (res.locals.user) {
        const { userId } = res.locals.user;
        console.log(userId)
        const shops = await this.ShopService.getAllBestShop()
        let best10Shop = []

        // 무작위로 10개만 조회 하기  
      for (let i = 0; i < 10; i++) {
        const userLocate = { latitude: lng, longitude: lat };

          const shopLocate = {
            latitude: shops[i].lng,
            longitude: shops[i].lat,
          };

          const totalDistance = haversine(userLocate, shopLocate, {
            unit: "meter",
          });
        
        let isScrap =  await Scrap.findOne({
          where: { ShopId: shops[i].shopId, UserId: userId },
        });

        let findFeedAll = await Feeds.findAll({
          where: { ShopId : shops[i].shopId }
        })

        let findScrapAll = await Scrap.findAll({
          where: { ShopId : shops[i].shopId }
        })

        let feedCount = findFeedAll.length

        let scrapCount = findScrapAll.length

        let result = {
          shopId: shops[i].shopId,
          address: shops[i].address,
          lng: Number(shops[i].lng),
          lat: Number(shops[i].lat),
          shopName: shops[i].shopName,
          thumbnail: shops[i].thumbnail,
          menuName: shops[i].menuName,
          maxPrice: Number(shops[i].maxPrice),
          minPrice: Number(shops[i].minPrice),
          distance: Number(totalDistance.toFixed(0)),
          category: shops[i].category,
          feedCount : feedCount,
          isScrap: isScrap ? true : false,
          scrapCount : scrapCount,

        }
        best10Shop.push(result)
      } 

      res.status(200).json({ shops : best10Shop });
    } else {
        const shops = await this.ShopService.getAllBestShop()
        let best10Shop = []

        // 무작위로 10개만 조회 하기  
      for (let i = 0; i < 10; i++) {
        const userLocate = { latitude: lng, longitude: lat };

        const shopLocate = {
          latitude: shops[i].lng,
          longitude: shops[i].lat,
        };

        const totalDistance = haversine(userLocate, shopLocate, {
          unit: "meter",
        });

        let findFeedAll = await Feeds.findAll({
          where: { ShopId : shops[i].shopId }
        })

        let findScrapAll = await Scrap.findAll({
          where: { ShopId : shops[i].shopId }
        })

        let feedCount = findFeedAll.length

        let scrapCount = findScrapAll.length

        let result = {
          shopId: shops[i].shopId,
          address: shops[i].address,
          lng: Number(shops[i].lng),
          lat: Number(shops[i].lat),
          shopName: shops[i].shopName,
          thumbnail: shops[i].thumbnail,
          menuName: shops[i].menuName,
          maxPrice: Number(shops[i].maxPrice),
          minPrice: Number(shops[i].minPrice),
          distance: Number(totalDistance.toFixed(0)),
          category: shops[i].category,
          feedCount : feedCount,
          isScrap: false,
          scrapCount : scrapCount,

        }
        best10Shop.push(result)
      } 

      res.status(200).json({ shops : best10Shop });
    }
    } catch(error) {
      console.log(error);
      res.status(400).json({ errorMsg: "예기치 못한 오류가 발생했습니다" });
      return;
    }
  }



  getFindOneShop = async (req, res, next) => {
    const { shopId } = req.params;

    try {
      const shop = await this.ShopService.getFindOneShop({ shopId });
      if (!shop) {
        return res.status(404).json({ errorMsg: "맛집이 존재하지 않습니다." });
      }

      if (res.locals.user) {
        const { userId } = res.locals.user;


        let isScrap = await Scrap.findOne({
          where: { ShopId: shopId, UserId: userId },
        });


        const result = {
          shopName: shop.shopName,
          thumbnail: shop.thumbnail,
          category: shop.category,
          address: shop.address,
          lng: Number(shop.lng),
          lat: Number(shop.lat),
          operatingTime: shop.operatingTime,
          phoneNumber: shop.phoneNumber,
          isScrap : isScrap ? true : false,
          Menus: shop.Menus.map((menu) => ({
              menuName: menu.menuName,
              price: Number(menu.price),
              menuDescription: menu.menuDescription,
              picture: menu.picture
          })),
        };
        res.status(200).json({ shop: result });
      } else { 
        const result = {
          shopName: shop.shopName,
          thumbnail: shop.thumbnail,
          category: shop.category,
          address: shop.address,
          lng: Number(shop.lng),
          lat: Number(shop.lat),
          operatingTime: shop.operatingTime,
          phoneNumber: shop.phoneNumber,
          isScrap : false, // 일단 비로그인 기준일때만 적용 (모두 false)
          Menus: shop.Menus.map((menu) => ({
            menuName: menu.menuName,
            price: Number(menu.price),
            menuDescription: menu.menuDescription,
            picture: menu.picture
          })),
        };
        res.status(200).json({ shop: result });
      }

    } catch (error) {
      console.log(error);
      res.status(400).json({ errorMsg: "예기치 못한 오류가 발생했습니다" });
    }
  };
}

module.exports = ShopController;