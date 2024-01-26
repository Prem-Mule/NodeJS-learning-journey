const express = require("express");
const app = express();
app.listen(5050, () => {
  console.log("Server is listening on port 5050");
});

//Middleware
//   req => Middleware => res
const logger = require(`./21-logger`);
const authorize = require(`./21-authorize`);
// const loader = (req, res, next) => {
//   const url = req.url;
//   const time = new Date().getFullYear();
//   const method = req.method;
//   console.log(method, url, time);
//   next();
// };

// to use loader (Middleware for multiple get req we can use use() method)
app.use(authorize, logger); // order matters it will use after declaration
//in case to use logger for urls with /api
// app.use(`/api`, logger);
app.get("/", (req, res, next) => {
  //app.get("/", [logger,authorize],(req, res, next) => {
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
