const express = require("express");
const router = express.Router();

const FavoriteController = require("../controllers/favorite.controller");
const favoriteController = new FavoriteController();
const middle = require("../middlewares/snsAuthmiddleware");

//검색  추후에 get으로 수정 req.body
router.get("/favorite",middle, favoriteController.test)

//추후 이것으로 수정 req.qurey
// router.get("/search",searchController.test)




module.exports =router;