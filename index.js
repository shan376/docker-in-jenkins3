const http = require('http');
http.createServer((req, res) => {
  res.end('Hello from Dockerized Node.js App via Ansible!');
}).listen(3000);
