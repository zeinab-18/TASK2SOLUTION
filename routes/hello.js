const express = require("express");
const helloRouter = express.Router();

helloRouter.post("/", (req, res) => {
  res.send("This is my Post route");
});

helloRouter.get("/", (req, res) => {
  res.send("This is my GET route");
});

module.exports = helloRouter;
