const express = require("express");
const app = express();
const { Person } = require("./data");

//GET method    => read data
app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: Person });
});

//POST method   => send data,insert data
app.use(express.static("./methods-public"));
//for index.html
app.use("/login", express.urlencoded({ extended: false }));
app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`<h1>Welcome ${name}</h1>`);
  }
  res.send(`<h4>Please provide name</h4>`);
  console.log(req.body);
});
//for javascript.html
//parse json
app.use("/api/people", express.json());
app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (name) {
    res.status(200).json({ success: true, msg: `name is ${name}` });
  } else {
    res.status(400).json({ success: false, msg: "Please provide name value" });
  }
});
app.use("/api/postman/people", express.json());
app.post("/api/postman/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    res.status(400).json({ success: false, msg: "Please provide name" });
  } else {
    res.status(200).json({ success: true, data: [...Person, name] });
  }
});
/*if your client sends data to the server as JSON, you should use express.json() to parse and access that data. If your client sends data using HTML forms or URL-encoded format, you should use express.urlencoded({ extended: true }) to parse and access that data. */

//PUT method => update data
app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  console.log(id, name);
  let person = Person.find((people) => {
    if (people.id === Number(id)) {
      return people;
    }
  });
  if (!person) {
    res.status(400).send("<h1>Person not found</h1>");
  } else {
    console.log("person: ", person);
    const newPerson = Person.map((p) => {
      if (p.id === Number(id)) {
        p.name = name;
      }
      return p;
    });
    console.log("newPeople", newPerson);
    res.status(201).json({ success: true, data: newPerson });
  }
});

//DELETE method => remove data
app.delete("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const people = Person.find((p) => {
    if (p.id === Number(id)) {
      return p;
    }
  });
  if (!people) {
    res.status(400).send("<h1>Person not found</h1>");
  } else {
    let newPerson = Person.filter((person) => {
      if (person.id != Number(id)) {
        return person;
      }
    });
    res.status(201).json({ success: true, data: newPerson });
    console.log("NewPerson", newPerson);
  }
});
app.listen(5000, () => {
  console.log("server is listening on port 5000");
});
