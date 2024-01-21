//4 types of Streams
//Writable
//Readable
//duplex
//transform
const { createReadStream } = require("fs");
const stream = createReadStream("./Content/Stream.txt", {
  highWaterMark: 500,
});
const stream2 = createReadStream("./Content/Stream.txt", { encoding: "utf8" });

//default 64kb
//last buffer - remainder
//highWaterMark - control size
//const stream = createReadStream("./Content/Stream.txt",{highWaterMark:90000})
//const stream = createReadStream("./Content/Stream.txt",{encoding:utf8})
stream.on("data", (result) => {
  console.log(result);
});
stream2.on("data", (result) => {
  console.log(result);
});
stream.on("error", (err) => {
  console.log(err);
});
