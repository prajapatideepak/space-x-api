const express = require("express");

const friendController = require("../controllers/friendsControllers");
const friendRouter = express.Router();

friendRouter.use((req, res, next) => {
  console.log("IP : ", req.ip);
  next();
});

friendRouter.post("/", friendController.postFriends);
friendRouter.get("/", friendController.getFriends);
friendRouter.get("/:friendId", friendController.getFriend);

module.exports = friendRouter;
