const http = require('http');
const port = process.env.PORT || 4000

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello from test-app!\nDoes this work?');
}).listen(port, "127.0.0.1");
console.log(`Server running at http://127.0.0.1:${port}/`);
