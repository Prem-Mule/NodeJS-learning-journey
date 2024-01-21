//example 4
const http = require(`http`);
const server = http.createServer((req, res) => {
  console.log("request event");
  res.write("Hello World");
  res.end();
});
server.listen(5000, () => {
  console.log("Server listening on port 5000");
});
