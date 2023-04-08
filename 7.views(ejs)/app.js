// JUST THE PREVIOUS EXPRESS APP.JS

const express = require('express');
const morgan = require('morgan');// middleware

const mongoose = require('mongoose');
const Blog = require('./models/blogs'); // importing model from folder
const { render } = require('ejs');


const app = express();

// collection name after .net/HERE
const dbURI = "mongodb+srv://anshumanshukla46:mongodb01@node-learning.mevqjra.mongodb.net/node-tutorial?retryWrites=true&w=majority";

// if deprication_warning then add useNewUrlParse:true, useUnifiedTopology:true
// IT RETURN PROMISE so use then 
mongoose.connect(dbURI)
    .then((result) => app.listen(3000)) // listen when page completely load
    .catch((err) => console.log(err))



// using view-engine
app.set('view engine', 'ejs'); // template engine declaration


// listen when page completely load
// app.listen(3000);

// THOSE METHOD HAVE .then() ALL ARE ASYNCHORNOUS


// mongoose and mongo sandbox routes

// http://localhost:3000/add-blog => add new blog to database
// app.get('/add-blog', (req, res) => {

//     // same as Schema made
//     const blog = new Blog({
//         title: 'New blog 2',
//         snippet: "about my new blog",
//         body: 'more about my new blog'
//     })

//     // saving our blog in database
//     // asynchornous task
//     blog.save()
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((error) => { console.log(error); })
// })



// http://localhost:3000/all-blogs => show all blogs to database
// app.get('/all-blogs', (req, res) => {
//     Blog.find()
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((error) => {
//             console.log(error);
//         })

// })



// although id is not string but mongoose do this for us then at time of database it convert in number again

// app.get('/single-blog', (req, res) => {
//     Blog.findById("64305578156d2a5483923da2")
//         .then((result) => {
//             res.send(result)
//         })
//         .then((error) => {
//             console.log(error);
//         })
// })



// middleware using used using ".use()" 
app.use((req, res, next) => {
    console.log('NEW request made');
    console.log('host : ', req.hostname);
    next();  // to exit from middleware and move to other statements
})

// third party middleware are also available
// "morgan middleware" for logging
// for session, cookies, authentication there are middlewares for that too

app.use(morgan('dev')); // how to show the data
app.use(morgan('tiny'));


// middleware for static file like css can also used in page otherwise in server side css file is unknown
app.use(express.static('public')) // now all the files in public folder will be accessible to browser for rendering
app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res) => {
    res.redirect('/blogs')
})


// kept the files in views
app.get('/about', (req, res) => {
    res.render('about', { title: 'About' })
})


// "mongodb"
// blog-routes-database (now showing data in website with front end iteself)

// "http://localhost:3000/blogs" <- it is the link
// now going on blogs -> index.ejs will be shown

// GET request
app.get('/blogs', (req, res) => {

    // sort like feature are given mongoose to sort the data in decreasing order as -1

    Blog.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render('index', { title: 'All Blogs', blogs: result })
        })
        .then((err) => {
            console.log(err);
        })

})


// POST request (will be using urlencoded middleware converting summited data to object form)
app.post('/blogs', (req, res) => {
    // console.log(req.body); // all data at "req.body"

    const blog = new Blog(req.body);
    blog.save()
        .then((result) => {
            res.redirect('/blogs')
        })
        .catch((err) => console.log(err))
})


// getting id 
app.get('/blogs/:id', (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then(result => {
            res.render('details', { blog: result, title: 'Blog Details' })
        })
        .catch(err => console.log(err))
})

// delete request
app.delete('/blogs/:id', (req, res) => {
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
        .then(result => {
            // as we can't redirect it because in frontend we used AJAX.
            // so now we will pass the url to which we have redirect
            res.json({ redirect: '/blogs' })
        })
        .catch(err => console.log(err))
})




{ /* <a href="/blogs/create">New Blog</a> 
// on clicking NewBlog this create.ejs will be fetched i.e., no need to create blogs/create  */ }

// http://localhost:3000/blogs/create
app.get('/blogs/create', (req, res) => {
    res.render('create', { title: "Creating Blog" })
})



// using middleware using "app.use((),{})" for 404
app.use((req, res) => {
    // rendering 404
    res.status(404).render('404', { title: 404 })
})