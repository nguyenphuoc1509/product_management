const express = require("express");
const router = express.Router();

const controller = require("../../controllers/admin/dashboard.controller");
const { route } = require("../client/product.route");

router.get("/", controller.index);

module.exports = router;