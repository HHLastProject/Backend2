const express = require("express");
const ShopController = require("../controllers/shop.controller.js");
const middle = require("../middlewares/snsMiddleware.js");

const shopController = new ShopController();
const router = express.Router();

// 메인페이지 카페리스팅 API (단순 모든 카페 조회)
router.get('/main4', shopController.getAllMainShop);

router.get('/main2', shopController.getAllMainShop2);

router.post('/main3',middle, shopController.getAllMainShop3);

// 메인페이지 업체리스팅 API (거리 계산 반영, 최종)
router.post('/main',middle, shopController.getAllMainShop4);

// 메인페이지 베스트 10개 (추후 구현 예정)
router.post('/main/best', middle, shopController.getAllBestShop);

// 상세페이지 업체정보 API
router.get('/:shopId',middle, shopController.getFindOneShop);





module.exports = router;