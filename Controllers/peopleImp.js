let { Person } = require(`../data`);

const getPerson = (req, res) => {
  res.status(200).json({ success: true, data: Person });
};
const createPerson = (req, res) => {
  const { name } = req.body;
  if (name) {
    res.status(200).json({ success: true, msg: `name is ${name}` });
  } else {
    res.status(400).json({ success: false, msg: "Please provide name value" });
  }
};
const createPersonPostman = (req, res) => {
  const { name } = req.body;
  if (!name) {
    res.status(400).json({ success: false, msg: "Please provide name" });
  } else {
    res.status(200).json({ success: true, data: [...Person, name] });
  }
};
const updatePerson = (req, res) => {
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
};

const deletePerson = (req, res) => {
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
};
module.exports = {
  getPerson,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
};
