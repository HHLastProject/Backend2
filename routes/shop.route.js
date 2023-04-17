const express = require("express");
const ShopController = require("../controllers/shop.controller.js");
const middle = require("../middlewares/snsMiddleware.js");
const shopController = new ShopController();
const router = express.Router();

// 메인페이지 업체리스팅 API
// localhost:3060/api/shop/main
router.get('/main', shopController.getAllMainShop);

// 메인페이지 업체리스팅 API (거리 계산 반영)
// localhost:3060/api/shop/main
router.get('/main2', shopController.getAllMainShop2);


router.get('/main3',middle, shopController.getAllMainShop3);

// 상세페이지 업체정보 API
// localhost:3060/api/shop/:shopId
router.get('/:shopId',middle, shopController.getFindOneShop);





module.exports = router;