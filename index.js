var express = require("express");
var app = express();
var ejsLayouts = require("express-ejs-layouts");

app.use(ejsLayouts);
app.set("view engine", "ejs");

// settings stuff
// serve static folder
app.use("/", express.static("public"));

app.get("/", function(req, res){
  res.render("home");
});

app.listen(3000, function(){
  console.log("listening on port 3000");
});
