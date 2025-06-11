let h=require('http'); // Importing the http module to create a server


let s=h.createServer((req, res) => { // Creating a server
    res.writeHead(200, {'Content-Type': 'text/plain'}); // Setting the response header
    res.end('Hello, this is a simple HTTP server created using Node.js!'); // Sending the response
}
);

s.listen(3000, () => { // Listening on port 3000
    console.log('Server is running on http://localhost:3000'); // Logging the server status
});