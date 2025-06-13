// Import the http module
const http = require('http');
let fs = require('fs');
// Import the fs module for file system operations

// Define the hostname and port
const hostname = '127.0.0.1';
const port = 3000;

// Create the server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  const url = req.url;



  if (url === "/signin") {
    fs.readFile('signin.html', (err, data) => {
       if (err) {
        res.statusCode = 500;
        res.end('Error loading signin.html');
        return;
      }
      res.write(data);
      return res.end();
    });
  }


  fs.readFile('index.html', (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end('Error loading index.html');
      return;
    }
    res.write(data);
    return res.end();
  });
});



// Start the server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});