// const xyz = require("./file") // not exporting the file 

// destructuring 
const { people, ages } = require("./file");

console.log(people, ages);


// getting predefined module
const os = require("os"); // return whole os information

console.log(os.platform(), os.homedir());