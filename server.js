```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate a long-running task
  const start = Date.now();
  let counter = 0;
  while (Date.now() - start < 5000) {
    counter++;
  }

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
```