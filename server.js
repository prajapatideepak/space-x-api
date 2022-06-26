const express = require("express");
const messageController = require("./controllers/messageController");
const friendRouter = require("./router/friend.router");
const path = require("path");
const app = express();

app.set("view engine", "hbs");

app.set("views", path.join(__dirname, "views"));
app.use((req, res, next) => {
  start = Date.now();
  next();
  console.log(
    `${req.method} ${req.baseUrl} ${req.path} ${Date.now() - start}ms`
  );
});
app.use(express.json());
app.use("/friends", friendRouter);

app.get("/message", messageController.getMessages);
app.use("/", express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => {
  res.render("index", {
    title: "Dipu don",
    caption: "We are in India",
  });
});

app.listen(3000, (err) => {
  console.log("app is running");
});
