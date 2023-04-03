const http = require('http');
const fs = require('fs');

const _ = require('lodash');

const server = http.createServer((req, res) => {

    // lodash is popular library for using javascript modules
    const num = _.random(0, 29); // (from, to)
    console.log(num);



    // REQ
    // req.url - to show the url 
    // req.method - to show the method like get/post
    // console.log(req.url, req.method);


    // RES
    // 1. set header content type
    // 2. what content to send
    // 3. ending the response
    // res.setHeader('Content-Type', 'text/plain');

    res.setHeader('Content-Type', 'text/html')

    // res.write('hello world');
    // res.write("<h1>Hello <h1/>"); // html

    // sending file with writing module (fs)
    // fs.readFile('./Views/index.html', (err, data) => {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         res.write(data);
    //     }
    //     res.end()
    // })



    // getting path to send user to differnt pages
    let path = './Views/';

    switch (req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;

        case '/about':
            path += 'About.html';
            res.statusCode = 200;
            break;

        case '/about-me':
            // redirecting the page to other
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;

        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    // replaced "link" with "path"
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.write(data);
        }
        res.end()
    })


})

server.listen(3000, 'localhost', () => {
    console.log("need help");
})