const express = require("express");
const handleStripe = require("../controler/handleStripe");
const createClientSecret = require("../controler/CreateClientsecret");
const router = express.Router();

router.post("/secret", createClientSecret);

router.post("/stripe", handleStripe);

module.exports = router;
