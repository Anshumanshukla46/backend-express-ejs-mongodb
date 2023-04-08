const express = require('express');
const blogController = require('../controllers/blogController');

const router = express.Router();



// "mongodb"
// blog-routes-database (now showing data in website with front end iteself)

// "http://localhost:3000/blogs" <- it is the link
// now going on blogs -> index.ejs will be shown



// GET request (check blogController)
router.get('/', blogController.blog_index);


// POST request (will be using urlencoded middleware converting summited data to object form)
router.post('/', blogController.blog_create_post)


router.get('/create', blogController.blog_create_get)


// getting id 
router.get('/:id', blogController.blog_details);

// delete request
router.delete('/:id', blogController.blog_delete);



module.exports = router;