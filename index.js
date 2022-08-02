const http = require("http");

http
  .createServer(function (res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World!");
    console.log("herrr");
  })
  .listen(8080);
