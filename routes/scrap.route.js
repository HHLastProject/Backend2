const express = require("express");
const router = express.Router();

const ScrapController = require("../controllers/scrap.controller");
const scrapController = new ScrapController();
const authMiddle = require("../middlewares/snsAuthmiddleware");


router.put("/:shopId/scrap",authMiddle,scrapController.updateScrap)



module.exports =router;