const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const path = require("path");

const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.set("views", path.join(__dirname,"views"))

app.get("/", function(req, res) {
  res.render("iframe", {code: null });
});

app.post("/", (req, res) => {

  var code = req.body.code

  res.render("iframe", {code: code });

});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

app.listen(port, function() {
  console.log("Server started successfully");
});
