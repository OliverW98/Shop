const express = require("express");
const http = require("http");
const path = require("path");
const cors = require("cors");
// const mongoose = require("mongoose");

const userSchema = require("./js/userSchema");
const user = require("./js/user");

// Intialise the app and server.
app = express();

app.use(cors());

app.use(express.json());

server = http.createServer(app);

// Configure to use statics.
// app.use(express.static(path.join(__dirname, "../build")));

// app.get("/", (req, res) => {
//   res.send(res.sendFile(path.join(__dirname, "build", "index.html")));
// });

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/logInUser", (req, res) => {
  res.send({ userID: 1, userName: "Oliver Wilkes", email: "test@test" });
});

app.post("/signUpUser", (req, res) => {
  console.log("receiving data ...");
  console.log("body is ", req.body);
  res.send(req.body);
});

// let dbUrl = "mongodb://localhost:27017/chessGames";
// mongoose.connect(dbUrl, { useUnifiedTopology: true, useNewUrlParser: true });

// const connection = mongoose.connection;
// connection.once("open", () => {
//   console.log("im in");
// });

server.listen(9000, function () {
  console.log("Listening on 9000");
});
