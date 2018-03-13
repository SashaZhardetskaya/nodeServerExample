const http = require('http');

// 1 variant

// const server = http.createServer();
//
// server.on('request', (req, res) => {
//     res.writeHead(200, { 'Content-Type' : 'text/plain' });
//     res.end('or any other data');
// });
//
// server.listen(8080, 'ipAdress - localhost by default - so I can not to write it', () => console.log('server is working'));


// 2 variant

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
        <!doctype>
        <html>
            <head>
                <meta charset="utf-8">
                <title>Node Server Example</title>
            </head>
            <body>
              <h1>Node Server Example</h1>
            </body>
        </html> 
    `);
}).listen(8080, () => console.log('server is working'));