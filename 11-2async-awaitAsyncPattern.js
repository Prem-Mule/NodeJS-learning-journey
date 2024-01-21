const { readFile } = require("fs");
const getText = (path) => {
  console.log("getText");
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else if (data) {
        resolve(data);
      }
    });
  });
};
const start = async () => {
  try {
    const first = await getText("./Content/first.txt");
    const second = await getText("./Content/second.txt");
    console.log("first");
    console.log(first);
    console.log("second");
    console.log(second);
  } catch (error) {
    console.log("error ", error);
  }
};
console.log("start");
start();
console.log("startNext");
