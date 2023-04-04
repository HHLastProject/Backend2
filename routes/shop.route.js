const express = require("express");
// const authMiddleware = require("../middlewares/auth-middleware");
const ShopController = require("../controllers/shop.controller.js");
const shopController = new ShopController();
const router = express.Router();

// 메인페이지 업체리스팅 API
// localhost:3060/api/shop/main
router.get('/main', shopController.getAllMainShop);


// 상세페이지 업체정보 API
// localhost:3060/api/shop/:shopId
router.get('/:shopId', shopController.getFindOneShop);





module.exports = router;