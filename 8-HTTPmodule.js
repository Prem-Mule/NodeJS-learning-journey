const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("<h1>Welcome to Home Page</h1>");
  }
  if (req.url === `/about`) {
    res.end("<h1>Welcome to about Page</h1>");
  }
  res.end(
    `<a href="/">Go Back</a> <h2>Oops! we can't seem to find the page you are looking for </h2>`
  );
});
server.listen(5000);
