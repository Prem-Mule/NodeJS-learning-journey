const http = require("http");
const server = http.createServer(); //this extends eventEmitter
server.on("request", (req, res) => {
  res.end("Welcome");
});
server.listen(5000);
