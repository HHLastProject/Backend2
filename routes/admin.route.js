const multer = require('multer');
const express = require("express");
const router = express.Router();
const adminAuthmiddleware = require('../middlewares/adminAuthmiddleware');

const { upload } = require('../middlewares/multer');

const AdminController = require("../controllers/admin.controller");
const adminController = new AdminController();

router.post("/login", adminAuthmiddleware, adminController.login);
router.post("/signup", adminController.signup);
router.get("/logout", adminAuthmiddleware, adminController.logout);
router.get("/shoplist", adminAuthmiddleware, adminController.getAllShops);
router.get("/detail/:shopId", adminAuthmiddleware, adminController.getOneShopInfo);
router.post("/register",  adminAuthmiddleware, upload.single('thumbnail'), adminController.postShop);
router.put("/update/:shopId",  adminAuthmiddleware, upload.single('thumbnail'), adminController.updateShop);
router.delete("/delete/:shopId", adminAuthmiddleware, adminController.deleteShop);

module.exports = router;
