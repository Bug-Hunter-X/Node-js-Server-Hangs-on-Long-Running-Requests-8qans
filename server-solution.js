```javascript
const http = require('http');
const { Worker } = require('worker_threads');

const server = http.createServer((req, res) => {
  const worker = new Worker('./long-task.js');

  worker.on('message', (result) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Result: ${result}`);
  });

  worker.on('error', (error) => {
    console.error(error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

// long-task.js
const { parentPort } = require('worker_threads');

const start = Date.now();
let counter = 0;
while (Date.now() - start < 5000) {
  counter++;
}

parentPort.postMessage(counter);
```