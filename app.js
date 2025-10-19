const http = require('http');
const port = 3000;

const serve = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello World</h1><p>Welcome to my Node.js server!</p>');
});

serve.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}/`);
});