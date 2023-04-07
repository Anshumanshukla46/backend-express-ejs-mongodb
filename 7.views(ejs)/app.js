// JUST THE PREVIOUS EXPRESS APP.JS

const express = require('express');
const morgan = require('morgan');// middleware

const app = express();

// using view-engine
app.set('view engine', 'ejs');

app.listen(3000);

// middleware using .use()
app.use((req, res, next) => {
    console.log('new request made');
    console.log('host : ', req.hostname);
    console.log('path : ', req.path);
    console.log('method : ', req.method);
    next();  // to exit from middleware
})


app.use((req, res, next) => {
    console.log('IN THE NEXT MIDDLEWARE');
    next();
})

// third party middleware
// morgan middleware for logging
// for session,cookies, authentication

app.use(morgan('dev')); // how to show the data
app.use(morgan('tiny'));


// middleware for static file like css
app.use(express.static('public')) // now all the files in public folder will be accessible to browser for rendering


app.get('/', (req, res) => {

    // can use this array in html page
    const blogs = [
        { title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur' },
        { title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur' },
        { title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur' },
    ];


    // rendering ejs and passing {object to index.ejs}
    res.render('index', { title: 'about', blogs: blogs })
})


// kept the files in views
app.get('/about', (req, res) => {
    res.render('about', { title: 'About' })
})



{ /* <a href="/blogs/create">New Blog</a> */ }
// on clicking NewBlog this create.ejs will be fetched i.e., no need to create blogs/create

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: "Creating Blog" })
})



// using middleware using "app.use((),{})" for 404
app.use((req, res) => {
    // rendering 404
    res.status(404).render('404', { title: 404 })
})