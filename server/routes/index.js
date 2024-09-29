const express = require("express");
const estateRoutes = require("./estateRoutes");
const router = express.Router();

router.use("/estates", estateRoutes);
module.exports = router;
