const express = require("express");
const router = express.Router();
router.post("/", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`<h1>Welcome ${name}</h1>`);
  }
  res.send(`<h4>Please provide name</h4>`);
  console.log(req.body);
  console.log("fdf")
});
module.exports = router;
