const fs = require("fs");
const writableStream = fs.createWriteStream("./Content/third.txt");
writableStream.write("Hello There this is Writable stream\n", "utf8", {
  flag: "a",
});
writableStream.on("finish", () => {
  console.log("Writing finished");
});
writableStream.on("error", (err) => {
  console.log(err);
});
const readStream = fs.createReadStream("./Content/third.txt", {
  encoding: "utf8",
});
readStream.on("data", (result) => {
  console.log(result);
});
