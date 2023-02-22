const express = require("express");
const randomRouter = express.Router();

//baseurl= /api/random/number
randomRouter.get("/number", (req, res) => {
  res.json({ message: "randomRouter " });
});

module.exports = { randomRouter };
