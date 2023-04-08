In MongoDB(NoSQL), a collection is a grouping of MongoDB documents. It is the equivalent of a table in a relational database, but in MongoDB, collections do not enforce a schema. Instead, collections are schema-free, which means that documents can have a collection can have different structures and fields.

A collection in MongoDB can contain arrays of objects, similar to JSON. In fact, MongoDB stores data in a binary representation of JSON called BSON (Binary JSON).


Now setup mongodb atlas
1. make own cluster and go to collection create that
2. database access with name and password
3. now go to database and click on connect then connect_application get the details(copy)
4. go to app.js set-it-up after app initialisation

like this-
// collection name after .net/HERE
const dbURI = "mongodb+srv://anshumanshukla46:mongodb01@node-learning.mevqjra.mongodb.net/node-tutorial?retryWrites=true&w=majority";
// THIS WILL BE PASSED TO MONGOOSE


// NOW FOR RUNNING THIS WHOLE APP 
nodemon app.js (terminal)
http://localhost:3000 (browser)
open mongodb-atlas (for same ip address)

after that we could connect app to it just by mongodb API but it will get complex
so we will use mongoose to interact with database


mongoose is ODM library - object document mapping library

mongodb api  -> mongoose ->  use method like .get(), .findById() 

now we just have to use the method for this.


now make schema(property, property datatype) like - 
name (string) required,
age(num),
bio (string) required


To use mongoose, install it as it is just a third party package for easyness (which is not important to use as we could use mongodb api fo this tooo but it become too clunky and verbose)


Get -> request for data from database
http://localhost:3000/blogs -> GET

Post -> request for data into database
http://localhost:3000/blogs -> POSt

delete -> delete particular data from database
http://localhost:3000/blogs/:id -> delete

put -> update some data in database
http://localhost:3000/blogs/:id -> put
HERE :ID is a varible now we have to use router-params to handle this


Till now we have done the whole full stack web app as Blog Post app.

But wait if we could check our app.js it is quite messy 
to fix this we could use express-router.

express router provides a way to organize your server-side code by grouping related routes together and separating them from the main application logic.
and a certain route can be made while building a new feature.

now as app.js is now big file -> make new file routes and 
add routes.js like file to it which are mostly common in the project.

---> NOW WE ARE GOING TO FOLLOW MVC APPROACH
1. it stand for Model, View, Controller
2. it is just a way of structuring our code
3. it keeps code modular, reusable and easier to read.

model- consist of data, logic, validation, processing

views - presenting the data like html, css, scripts

controller - MODEL -> "CONTROLLER" -> VIEW
layered between models and view. responsible for handling user-input, updating view, https requests

create folder of controller
add all (req,res) in it