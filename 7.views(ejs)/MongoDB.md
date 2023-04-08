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


after that we could connect app to it just by mongodb API but it will get complex
so we will use mongoose to interact with database


mongoose is ODM library - object document mapping library

mongodb api  -> mongoose ->  use method like .get(), .findById() 

now we just have to use the method for this.


now make schema(property, property datatype) like - 
name (string) required,
age(num),
bio (string) required


to use mongoose, install it as it is just a third party package for easyness (which is not important to use as we could use mongodb api fo this tooo but it become too clunky and verbose)


Get -> request for data from database
http://localhost:3000/blogs -> GET

Post -> request for data into database
http://localhost:3000/blogs -> POSt

delete -> delete particular data from database
http://localhost:3000/blogs/:id -> delete

put -> update some data in database
http://localhost:3000/blogs/:id -> put
HERE :ID is a varible now we have to use router-params to handle this