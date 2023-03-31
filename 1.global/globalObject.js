console.log(global);

setTimeout(() => {
    console.log("set time out");
}, 1000)

const i = setInterval(() => {
    console.log("inside time interval");
}, 1000);

console.log(__dirname); // path of directory
console.log(__filename); // path of file