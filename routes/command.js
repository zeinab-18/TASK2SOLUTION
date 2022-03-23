const express = require("express");
const commandRouter = express.Router();

commandRouter.post("/", (req, res) => {
//   res.send("This is my Post route");
res.status(200).send("ok")
});

commandRouter.get("/", (req, res) => {
  res.send("This is my GET route");
});

module.exports = commandRouter;
