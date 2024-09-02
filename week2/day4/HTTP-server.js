const http = require('http');
const fs = require('fs');
const {resolve} = require('path');

// Don't use anymore. Use express
const server = http.createServer((req, res) => {
    console.log(req.url);
    switch(req.url) {
        case('/'):
            fs.readFile(resolve('index.html'), (err, html) => {
                if (err) {
                    res.writeHead(404);
                    res.write('Not Found!');
                }
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                res.write(html);
                res.end();
            });
        // case('/images'):
        //     res.writeHead(200);
        //     res.write('Images!');
    }
    
    // res.writeHead(200); // HTTP/1.1 200 OK
    // res.writeHead(404); // HTTP/1.1 404 Not Found
    // res.end('Hello World!');
});

server.listen(8082);