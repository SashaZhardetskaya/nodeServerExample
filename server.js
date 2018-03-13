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

const html = `
    <!doctype>
        <html>
            <head>
                <meta charset="utf-8">
                <title>Node Server Example</title>
                <link rel="stylesheet" href="app.css">
            </head>
            <body>
              <h1>Node Server Example</h1>
              <button>Click Me</button>
              <script src="app.js"></script>
            </body>
        </html> 
`;

const css = `
    body {
        text-align: center;
    }
    h1 {
        background: yellow;
    }
`;

const js = `
    const button = document.querySelector('button');
    button.addEventListener('click', event => alert('Node.js in action'));
`;

http.createServer((req, res) => {
    // console.log(req.url); - what browser requests
    switch (req.url) {
        case '/':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(html);
            break;

        case '/app.css':
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.end(css);
            break;

        case '/app.js':
            res.writeHead(200, { 'Content-Type': 'text/javascript' });
            res.end(js);
            break;

        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found File');
    }
}).listen(8080, () => console.log('server is working'));