const express = require("express");
const router = express.Router();

const userRouter = require("./user.route");
const shopRouter = require("./shop.route");
const adminRouter = require('./admin.route');

router.use("/api/users", userRouter);
router.use("/api/shop", shopRouter);
router.use('/api/admin', adminRouter);

module.exports = router;
