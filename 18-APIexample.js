const express = require("express");
const app = express();
const { Tours, Person } = require(`./data`);
app.listen(5050, () => {
  console.log("server is listening on port 5050");
});
app.get("/", (req, res) => {
  res.send(
    `<h1>Home Page</h1> <a href = '/products'>Products</a><br><a href = '/person'>Person</a>`
  );
});
app.get("/products", (req, res) => {
  const newTours = Tours.map((Tour) => {
    const { id, name, image, price } = Tour;
    return { id, name, image, price };
  });
  res.json(newTours);
});

app.get("/products/1", (req, res) => {
  singleTour = Tours.find((Tour) => {
    Tour.id === 1;
  });
  res.json(singleTour);
});
//instead of doing this for multiple products individually we can use routes

app.get("/products/2", (req, res) => {
  singleTour = Tours.find((Tour) => {
    Tour.id === 2;
  });
  res.json(singleTour);
});

app.get("/products/3", (req, res) => {
  singleTour = Tours.find((Tour) => {
    Tour.id === 3;
  });
  res.json(singleTour);
});

app.get("/products/4", (req, res) => {
  singleTour = Tours.find((Tour) => {
    Tour.id === 4;
  });
  res.json(singleTour);
});

app.get("/person", (req, res) => {
  res.json(Person);
});
app.all("*", (req, res) => {
  console.log("Unknown get request");
});
