const http = require("http");

const server = http.createServer((req, res) => {

    let path = "./5.requests/Views";
    switch (req.url) {
        case '/':
            path = path + 'index.html';
            req.statusCode = 200;
            break;

        case '/about-me':
            res.statusCode = 301;
            res.setHeader("Location", "/about");
            req.end();
            break;

        default:
            path += '404.html';
            res.statusCode = 404;
            break;

    }

})



server.listen(3000, 'localhost', () => {
    console.log("Listening for request on port 3000");
})