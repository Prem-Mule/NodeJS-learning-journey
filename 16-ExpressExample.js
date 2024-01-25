const express = require("express");
const app = express();
// alternatively const app = require('express')();
const path = require("path");
app.listen(5000, () => {
  console.log(`Server is listening on Port`);
});
app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "./navbar-app/index.html"));
  console.log("get request");
});
app.use(express.static("./navbar-app")); // we can also use index.html as static file in folder
// use method must be followed by related request
//setup static and middleware
app.all("*", (req, res) => {
  console.log("unknown Get request" + req.url);
  res.status(404).send("<h1> Page not found</h1>");
});
