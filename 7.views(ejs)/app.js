// JUST THE PREVIOUS EXPRESS APP.JS

const express = require('express');
const morgan = require('morgan');// middleware

const mongoose = require('mongoose');
const Blog = require('./models/blogs'); // importing models from folder
const blogRoutes = require('./routes/blogRoutes')



const app = express();


// ADD collection_name after .net/HERE
const dbURI = "mongodb+srv://user:password@node-learning.mevqjra.mongodb.net/cluter_project?retryWrites=true&w=majority";


// middleware
// if deprication_warning then add useNewUrlParse:true, useUnifiedTopology:true

// IT RETURNING PROMISE use "then" 
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



// middleware using ".use()" method
app.use((req, res, next) => {
    console.log('NEW request made');
    console.log('host : ', req.hostname);

    next();  // to exit from middleware and move to other statements
})



// third party middleware are also available
// "morgan middleware" for logging, logging means CONSOLE.LOG("KIND OF")

// and even for session, cookies, authentication middlewares are also available

app.use(morgan('dev')); // how to show the data designated by "dev" in console.log
// "tiny" is the default value of "dev"
// "dev" is the default value of "morgan"
// "tiny" is the default value of "morgan"
// "combined" is the default value of "morgan"

app.use(morgan('tiny'));


// middleware for static file like "css" can also used in page otherwise in server side css file will be is unknown for server
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
// blog-routes-database (now showing data in website with front-end itself)

// app.use(blogRoutes);
app.use('/blogs', blogRoutes); // now on "/blogs" blogRoutes will be applied so in "blogRoutes" use only use "/:id" not "/blogs/:id" as blogs is now replaced


// using middleware using "app.use((),{})" for 404
app.use((req, res) => {
    // rendering 404
    res.status(404).render('404', { title: 404 })
})
