const express = require("express");
const dataRouter = express.Router();

// dataRouter.post("/", (req, res) => {
//   res.send("This is my Post route");
// });

dataRouter.get("/", (req, res) => {
//   res.send("This is my GET route");
res.status(200).send("ok")
});

module.exports = dataRouter;
