// SYNTAX FOR MODULE EXPORT= module.exports = literal | function | object  (CHECK fntest.js FOR PRACTICAL USAGE OF MODULE EXPORT)


// IMPORT METHODS

// CommonJS (using require()):
// This is the traditional way of importing modules in Node.js.


// const moduleName = require('module-name');
// const { namedExport } = require('module-name');
// const myModule = require('./my-module.js'); // Local module

// module-name: This can be the name of a built-in Node.js module (like fs or http), a module installed from npm, or a local file path.
// ./my-module.js: The path to a local module, relative to the current file.


const m = require('./fntest');

console.log(m.abc())
console.log(m.table(8)) //TIPS: press ctrl+space to show the function names in a module. For example- m.{press ctrl+space}=m.{abc || table}.
