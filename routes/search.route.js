const express = require("express");
const router = express.Router();

const SearchController = require("../controllers/search.controller");
const searchController = new SearchController();

// const middle = require("../middlewares/snsMiddleware.js");


//test 합니다
const authMiddle = require("../middlewares/snsAuthmiddleware");
const middle = require("../middlewares/snsMiddleware"); 


//검색  추후에 get으로 수정 req.body
router.post("/search",middle,searchController.searchShop)

router.get("/search/history",middle,searchController.searchHistory)

router.get("/search/summary", middle,searchController.count)

//추후 이것으로 수정 req.qurey
// router.get("/search",searchController.test)




module.exports =router;