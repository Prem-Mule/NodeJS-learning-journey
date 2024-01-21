const { readFile } = require("fs");
console.log("start");
readFile("./Content/first.txt", "utf8", (error, data) => {
  if (error) {
    console.log(error);
  } else if (data) {
    console.log(data);
  }
});
console.log("begin next start");
