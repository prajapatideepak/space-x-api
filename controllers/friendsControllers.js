const model = require("../model/friendsmodel");

function getFriend(req, res) {
  friendId = req.params.friendId;
  friend = model[friendId];

  if (friend) {
    res.json(friend);
  } else {
    res.json({
      message: "Friend Not found :( ",
    });
  }
}

function getFriends(req, res) {
  res.json(model);
}

function postFriends(req, res) {
  if (!req.body.name) {
    return res.status(400).json({
      message: "Missing Friend name!!",
    });
  }
  const newFriend = {
    name: req.body.name,
    id: model.length,
  };

  model.push(newFriend);
  res.json(newFriend);
}

module.exports = {
  getFriend,
  getFriends,
  postFriends,
};
