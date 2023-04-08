// naming convention by MDN =  blog_index, blog_details, blog_create_get, blog_create_post, blog_delete

const Blog = require('../models/blogs');


const blog_index = (req, res) => {

    // sort like feature are given mongoose to sort the data in decreasing order as -1

    Blog.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render('index', { title: 'All Blogs', blogs: result })
        })
        .then((err) => {
            console.log(err);
        })
}


const blog_details = (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then(result => {
            res.render('details', { blog: result, title: 'Blog Details' })
        })
        .catch(err => res.render('404', { title: 'Blog not found' })) // if not found anydetal
}




{ /* <a href="/blogs/create">New Blog</a> 
on clicking NewBlog this create.ejs will be fetched i.e., no need to create blogs/create  */ }


// THIS SHOULD BE ABOVE AS "blogs/create"  => "/blogs/:id"

// so this create should be before :id
// http://localhost:3000/blogs/create
const blog_create_get = (req, res) => {
    res.render('create', { title: "Creating Blog" })
}



// POST request (will be using urlencoded middleware converting summited data to object form)
const blog_create_post = (req, res) => {
    // console.log(req.body); // all data at "req.body"

    const blog = new Blog(req.body);
    blog.save()
        .then((result) => {
            res.redirect('/blogs')
        })
        .catch((err) => console.log(err))
}



const blog_delete = (req, res) => {
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
        .then(result => {
            // as we can't redirect it because in frontend we used AJAX.
            // so now we will pass the url to which we have redirect
            res.json({ redirect: '/blogs' })
        })
        .catch(err => console.log(err))
}


module.exports = {
    blog_index,
    blog_details,
    blog_create_get,
    blog_create_post,
    blog_delete
}