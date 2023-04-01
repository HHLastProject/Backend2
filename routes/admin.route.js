const multer = require('multer');
const express = require("express");
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');

const { upload } = require('../middlewares/multer');

const AdminController = require("../controllers/admin.controller");
const adminController = new AdminController();

router.post("/login", authMiddleware, adminController.login);
router.post("/signup", adminController.signup);
router.get("/logout", adminController.logout);
router.get("/list", authMiddleware, adminController.getAllShops);
router.get("/detail/:shopId", authMiddleware, adminController.getOneShopInfo);
router.post("/register",  authMiddleware, upload.single('thumbnail'), adminController.postShop);
router.put("/update/:shopId",  authMiddleware, upload.single('thumbnail'), adminController.updateShop);
router.delete("/delete/:shopId", authMiddleware, adminController.deleteShop);

module.exports = router;
