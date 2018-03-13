const http = require('http');

// 1 variant

const server = http.createServer();

server.on('request', (req, res) => {
    res.end('or any other data')
});

server.listen(8080, 'ipAdress - localhost by default', () => console.log('server is working'));