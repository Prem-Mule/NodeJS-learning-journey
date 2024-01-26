//
const express = require("express");
const app = express();
const { Tours, Person } = require(`./data`);
app.listen(5050, () => {
  console.log("server is listening on port 5050");
});
app.get("/", (req, res) => {
  res.send(
    `<h1>Home Page</h1> <a href = '/tours'>Tours</a><br><a href = '/person'>Person</a>`
  );
});
app.get("/tours", (req, res) => {
  const newTours = Tours.map((Tour) => {
    const { id, name, image, price } = Tour;
    return { id, name, image, price };
  });
  res.json(newTours);
});

app.get(`/tours/:tourID`, (req, res) => {
  console.log(req.params);
  const { tourID } = req.params;
  console.log(tourID);
  const singleTour = Tours.find((Tour) => {
    if (Tour.id === Number(tourID)) {
      return Tour;
    }
  });
  if (!singleTour) {
    res.status(404).send("Tour does not exists");
  }
  res.json(singleTour);
});

app.get("/tours/:tourID/reviews/:reviewID", (req, res) => {
  console.log(req.params);
  res.send("<h1>Hello World</h1>");
});

app.get("/person", (req, res) => {
  res.json(Person);
});
