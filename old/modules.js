// const hello = require('./people.js');

// console.log(hello);

// console.log(hello.ages, hello.names);

// const {names, ages} = require('./people.js');

// console.log(names, ages);

const os = require('os');

console.log(os.platform(), os.release(), os.cpus().length);