const express = require('express');
const Blog = require('../models/blogs');;

const router = express.Router();

// "mongodb"
// blog-routes-database (now showing data in website with front end iteself)

// "http://localhost:3000/blogs" <- it is the link
// now going on blogs -> index.ejs will be shown



// GET request
router.get('/', (req, res) => {

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
router.post('/', (req, res) => {
    // console.log(req.body); // all data at "req.body"

    const blog = new Blog(req.body);
    blog.save()
        .then((result) => {
            res.redirect('/blogs')
        })
        .catch((err) => console.log(err))
})



{ /* <a href="/blogs/create">New Blog</a> 
on clicking NewBlog this create.ejs will be fetched i.e., no need to create blogs/create  */ }


// THIS SHOULD BE ABOVE AS "blogs/create"  => "/blogs/:id"

// so this create should be before :id
// http://localhost:3000/blogs/create
router.get('/create', (req, res) => {
    res.render('create', { title: "Creating Blog" })
})


// getting id 
router.get('/:id', (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then(result => {
            res.render('details', { blog: result, title: 'Blog Details' })
        })
        .catch(err => console.log(err))
})

// delete request
router.delete('/:id', (req, res) => {
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
        .then(result => {
            // as we can't redirect it because in frontend we used AJAX.
            // so now we will pass the url to which we have redirect
            res.json({ redirect: '/blogs' })
        })
        .catch(err => console.log(err))
})



module.exports = router;