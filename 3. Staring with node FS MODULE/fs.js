let f=require('fs'); //fs is a built-in module in Node.js that provides an API for interacting with the file system.
// It allows you to read, write, and manipulate files and directories on your computer.
// The 'fs' module is used to perform file operations such as reading, writing, and appending data to files.
// The 'fs' module is part of the Node.js core modules, so you don't need to install it separately.
// The 'fs' module provides both synchronous and asynchronous methods for file operations.
// Here, we are using the 'fs' module to perform file operations synchronously.
// The 'fs' module provides methods like writeFileSync, appendFileSync, and readFileSync to perform file operations.

// The writeFileSync method is used to create a new file or overwrite an existing file with the specified content.
f.writeFileSync('./hello.txt', 'Hello, this is a test file created using Node.js fs module.');

// The appendFileSync method is used to append data to an existing file.
f.appendFileSync('./hello.txt', '\nThis line has been appended to the file.');

// The readFileSync method is used to read the content of a file synchronously.
//it returns the content of the file as a string if the encoding is specified, or as a Buffer object if no encoding is specified.
let data=f.readFileSync('./hello.txt', 'utf-8'); // Reading the file synchronously. utf-8 is the encoding format.

console.log(data); // Displaying the content of the file in the console.