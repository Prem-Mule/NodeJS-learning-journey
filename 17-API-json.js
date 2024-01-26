const app = require("express")();
const { person, products } = require("./data");
// app.get("/", (req, res) => {
//   res.json([
//     { name: "Prem", age: 21 },
//     { name: "Aryan", age: 20 },
//   ]);
// });
app.get("/", (req, res) => {
  res.json(products);
});
app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
