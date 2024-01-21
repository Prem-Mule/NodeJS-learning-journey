const { createReadStream } = require("fs");
const stream = createReadStream("./Content/StreamDataFile.txt", {
  highWaterMark: 1000000,
});
stream.on("data", (result) => {
  console.log(result);
});
const fs = require("fs");
const http = require("http");
const server = http.createServer((req, res) => {
  //   const text = fs.readFileSync("./Content/StreamDataFile.txt", "utf8");
  //   res.end(text);
  const fileStream = fs.createReadStream(
    "./Content/StreamDataFile.txt",
    "utf8"
  );
  fileStream.on("open", () => {
    fileStream.pipe(res);
    //Piping the Streams: Piping is a mechanism where we provide the output of one stream as the input to another stream
  });
  fileStream.on("error", (err) => {
    console.log(err);
  });
});
server.listen(5000);
