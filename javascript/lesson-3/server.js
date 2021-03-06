const http = require('http');
const util = require('util');

const setTimeoutPromise = util.promisify(setTimeout);
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(async (req, res) => {

    await setTimeoutPromise(1000);
    console.log('get request');

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});