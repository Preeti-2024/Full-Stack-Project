const express = require("express");
const { registerUser } = require("../../Controllers/auth/auth-Controller");

const router = express.Router();

router.post("/register", registerUser);

module.exports = router;
