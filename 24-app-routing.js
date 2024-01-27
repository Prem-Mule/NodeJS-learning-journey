const express = require("express");
const app = express();
const { Person } = require("./data");

const people = require("./Controllers/people");
const auth = require("./Controllers/auth");
app.use(express.urlencoded({ extended: false }));
app.use(express.static("./methods-public"));
app.use("/api/people", express.json());
app.use("/api/people", people);
app.use("/login", auth);
app.listen(5000, () => {
  console.log("server is listening on port 5000");
});
