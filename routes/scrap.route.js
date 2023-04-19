const express = require("express");
const router = express.Router();

const ScrapController = require("../controllers/scrap.controller");
const scrapController = new ScrapController();
const middle = require("../middlewares/snsAuthmiddleware");


router.put("/:shopId/scrap",middle,scrapController.updateScrap)



module.exports =router;