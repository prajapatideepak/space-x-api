const path = require("path");

function getMessages(req, res) {
  res.sendFile(
    path.join(__dirname, "..", "public", "images", "feature-benifits.jpg")
  );
}

module.exports = {
  getMessages,
};
