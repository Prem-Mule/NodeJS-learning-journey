const express = require("express");
const app = express();
const morgan = require("morgan");
app.listen(5050, () => {
  console.log("Server is listening on port 5050");
});

const logger = require(`./21-logger`);
const authorize = require(`./21-authorize`);
app.use(morgan("tiny"));
app.use(authorize, logger);

app.get("/", (req, res, next) => {
  res.status(200).send("<h1>Home</h1>");
});

app.get("/about", (req, res) => {
  res.status(200).send("<h1>About</h1>");
  console.log(req.query);
  console.log(req.user);
});
app.get("/api/contactus", (req, res) => {
  res.status(200).send("<h1>Contact Us</h1>");
});
app.get("/api/community", (req, res) => {
  res.status(200).send("<h1>Community</h1>");
});
