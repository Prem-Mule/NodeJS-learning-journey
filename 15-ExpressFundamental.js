const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("Get request");
  res.status(200).send("<h1>Home Page</h1>");
});

app.get("/about", (req, res) => {
  console.log("get request for about page");
  res.status(200).send("<h1>About Us Page</h1>");
});

app.all("*", (req, res) => {
  console.log("get request default");
  res.status(404).send("<h1>Oops Page not found</h1>");
});
app.listen(5001, () => {
  console.log("Server is listening on port 5000");
});
// app.get;
// app.post;
// app.put;
// app.delete;
// app.all;
// app.use;
// app.listen;
