const express = require("express");
const router = express.Router();

const userRouter = require("./user.route");
const shopRouter = require("./shop.route");
const adminRouter = require('./admin.route');

router.use("/users", userRouter);
router.use("/shop", shopRouter);
router.use('/admin', adminRouter);

module.exports = router;
