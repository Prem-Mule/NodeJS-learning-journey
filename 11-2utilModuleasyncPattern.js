const util = require("util");
const { readFile, writeFile } = require("fs");
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);
const start = async () => {
  try {
    const first = await readFilePromise("./Content/first.txt", "utf8");
    const second = await readFilePromise("./Content/second.txt", "utf8");
    console.log(first);
    console.log(second);
    console.log("write start");

    await writeFilePromise(
      "./Content/third.txt",
      " Prem Kiran Mule ",
      {
        flag: "a",
      },
      () => {
        console.log("Prem");
      }
    );
    console.log("write end");
  } catch (error) {
    console.log(error);
  }
};
start();
