// require http
const http = require("http")

// const server = http.createServer(); // store instance like in socket.io

// req full of information
// res to send information
const server = http.createServer((req, res) => {
    console.log("request made"); // running on server not on the browser so this code is not going to show in the browser
});


// now it will listen to the server
server.listen(3000, 'localhost', () => {
    console.log("Listening to 3000 port");
})

// localhost is loopback ip address which point to 127.0.0.1 and points directly point to own computer

// portnumber : door to computer like as a door for study room, entry gate like wise we have different programs inside the server

