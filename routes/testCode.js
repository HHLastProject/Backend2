const express = require("express");
const router = express.Router();

// const SearchController = require("../controllers/search.controller")
// const searchController = new SearchController()


const SearchController = require("../controllers/search.controller");
const searchController = new SearchController();

router.get("/start", async (req, res) => {
})

module.exports = router;