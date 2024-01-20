// Build -in Modules
// OS
// PATH
// FS
// HTTP

// OS module

const os = require(`os`);
// info about current user
const user = os.userInfo();
console.log(user);
// method returns system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`);
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
};
console.log(currentOS);
console.log(" Platform: " + os.platform);
// PATH Module

const path = require("path");
console.log(path.sep);
const filePath = path.join("/Content", "SubContent", "test.txt"); // normalizes path
console.log(filePath);
console.log(path.basename(filePath));
console.log(path.resolve(__dirname, "Content", "SubContent", "test.txt")); //gives absolute path

//FS module

// synchronous methods
// const { readFileSync, writeFileSync } = require("fs");
// const first = readFileSync("./Content/first.txt", "utf8");
// console.log(first);
// writeFileSync("./Content/NewFile.txt", `Here is the result \n : ${first}`);
// writeFileSync("./Content/second.txt", ` Hello I have appended in this file `, {
//   flag: `a`,
// });
// asynchronous method
const { readFile, writeFile } = require("fs");
const { log } = require("console");
console.log("start");
readFile("./Content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  console.log("first");
  readFile("./Content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./Content/NewFile.txt",
      `Hello this is the result: ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("dont with this task : " + result);
      }
    );
  });
});
console.log("starting next task");
