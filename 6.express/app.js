const express = require('express')

// whole site similar to 5.request -> server.js

// express app
const app = express();


// registering view engine
app.set('view engine', 'ejs'); // now we could add our template in "views" folder


app.listen(3000);
// this exress take care of setheaderfile, status code

// routing
app.get('/', (req, res) => {
    // this "send" take care of (setheaderfile, status_code)


    // one of absolute path, other if from where we should measure this
    res.sendFile('./views/index.html', { root: __dirname })
})


app.get('/about', (req, res) => {
    res.sendFile('./views/about.html',
        { root: __dirname })
})



// redirecting from "about-us" to "about"
app.get('/about-us', (req, res) => {
    res.redirect('/about')
})


// 404 page 

// express read the whole code with url if anything matches and it is on the top send that request only


// ALWAYS PUT THIS AT END AS IF IN BETWEEN WE PUT THIS THEN AFTER THIS STATEMENT MOSTLY ALL LINKS WILL NOT "EXECUTED"
app.use((req, res) => {

    // need to add status code only in case of 404 or other than 200
    res.status(404).sendFile('./views/404.html', { root: __dirname })
})