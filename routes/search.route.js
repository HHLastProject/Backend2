const express = require("express");
const router = express.Router();

const SearchController = require("../controllers/search.controller");
const searchController = new SearchController();

const middle = require("../middlewares/snsMiddleware.js");

//검색  추후에 get으로 수정 req.body
router.post("/search",middle,searchController.searchShop)

router.get("/search/history",middle,searchController.searchHistory)

router.get("/search/summary", searchController.count)

//추후 이것으로 수정 req.qurey
// router.get("/search",searchController.test)




module.exports =router;