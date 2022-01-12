const express = require("express");
const http = require("http");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");

let userSchema = require("./js/userSchema");

// Intialise the app and server.
app = express();

app.use(cors());
// Allows server to accept json
app.use(express.json());

server = http.createServer(app);
// database connection
let dbUrl = "mongodb://localhost:27017/shop";
mongoose.connect(dbUrl, { useUnifiedTopology: true, useNewUrlParser: true });

// Configure to use statics.
// app.use(express.static(path.join(__dirname, "../build")));

// app.get("/", (req, res) => {
//   res.send(res.sendFile(path.join(__dirname, "build", "index.html")));
// });

app.get("/", (req, res) => {
  res.send("hello world");
});

// app.get("/logInUser", (req, res) => {
//   userSchema.find({ firstName: "Ben", lastName: "Carter" }, (error, data) => {
//     if (error) {
//       console.log(error);
//     } else {
//       res.send(data);
//     }
//   });
// });

app.post("/logInUser", (req, res) => {
  userSchema.find(
    { email: req.body.email, password: req.body.password },
    (error, data) => {
      if (error) {
        console.log(error);
      } else {
        res.send(data);
      }
    }
  );
});

app.post("/signUpUser", (req, res) => {
  console.log("receiving data ...");
  console.log("body is ", req.body);
  userSchema(req.body).save();
  res.send(req.body);
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("im in");
});

server.listen(9000, function () {
  console.log("Listening on 9000");
});
