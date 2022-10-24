const express = require("express");
const { testRoute } = require("../controllers/test");
const router = express.Router();

router.get("/test", testRoute);

module.exports = router;
