const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// describe structure
const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, { timestamps: true });


const Blog = mongoose.model('Blog', blogSchema); // name is important to use again and structure

module.exports = Blog;