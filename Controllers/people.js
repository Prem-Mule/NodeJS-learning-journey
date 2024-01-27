const express = require("express");
const router = express.Router();
const {
  getPerson,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
} = require("./peopleImp");

// router.get("/", getPerson);
// router.post("/", createPerson);
// router.post("/postman", createPersonPostman);
// router.put("/:id", updatePerson);
// router.delete("/:id", deletePerson);
//alternatively
router.route("/").get(getPerson).post(createPerson);
router.route("/postman").post(createPersonPostman);
router.route("/:id").put(updatePerson).delete(deletePerson);

module.exports = router;
