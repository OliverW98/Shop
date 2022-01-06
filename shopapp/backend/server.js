const express = require("express");
const http = require("http");
const path = require("path");
// const mongoose = require("mongoose");
// const socketIo = require("socket.io");

// const userSchema = require("./js/userSchema");
// const user = require("./js/user");

// Intialise the app and server.
app = express();
server = http.createServer(app);

// Configure to use statics.
app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// let io = socketIo(server);

// let dbUrl = "mongodb://localhost:27017/chessGames";
// mongoose.connect(dbUrl, { useUnifiedTopology: true, useNewUrlParser: true });

// io.on("connection", function (socket) {
//   user.user.firstName = "Oliver";
//   user.user.lastName = "Wilkes";
//   user.user.email = "ow@gmail.com";
//   user.user.password = "qwerty";
// });

// const connection = mongoose.connection;
// connection.once("open", () => {
//   console.log("im in");
// });

server.listen(9000, function () {
  console.log("Listening on 9000");
});
