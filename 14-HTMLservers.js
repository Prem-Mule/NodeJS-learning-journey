//HTTP Methods
//1. GET - Get all orders place (default)
//2. POST - place an order(send data)
//3. PUT - update specific order
//4. DELETE- deletes order etc.

//request and response message
//req msg      method/contentURL/HTTP.1- header - body(optional)
//res msg      HTTP.1/Status code status text/.1- header - body(optional)

//status codes : 200 OK
const http = require("http");
const { readFileSync } = require("fs");

//get all files
const homePage = readFileSync("./navbar-app/index.html");
const stylesHomePage = readFileSync("./navbar-app/styles.css");
const browserAppJs = readFileSync("./navbar-app/browser-app.js");
const logoHome = readFileSync("./navbar-app/logo.svg");

const server = http.createServer((req, res) => {
  console.log(req.url);

  if (req.url === "/") {
    res.writeHead(200, "Confirm OK", { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  } else if (req.url === "/about") {
    res.writeHead(200, "Confirm OK", { "content-type": "text/html" });
    res.write("<h1>About Page</h1>");
    res.end();
  } else if (req.url === "/contact") {
    res.writeHead(200, "Confirm OK", { "content-type": "text/html" });
    res.write("<h1>Contact Page</h1>");
    res.end();
  } else if (req.url === "/styles.css") {
    res.writeHead(200, "Confirm OK", { "content-type": "text/css" });
    res.write(stylesHomePage);
    res.end();
  } else if (req.url === "/browser-app.js") {
    res.writeHead(200, "Confirm OK", { "content-type": "text/javascript" });
    res.write(browserAppJs);
    res.end();
  } else if (req.url === "/logo.svg") {
    res.writeHead(200, "Confirm OK", { "content-type": "image/svg+xml" });
    res.write(logoHome);
    res.end();
  } else {
    res.writeHead(400, "Access Error", { "content-type": "text/html" });
    res.write("<h1>OOPS! Page not found</h1>");
    res.end();
  }
});
server.listen(5000);
// console.log(http.STATUS_CODES);
// console.log(http.METHODS);
