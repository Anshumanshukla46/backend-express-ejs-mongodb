**`MongoDB(NoSQL)`** is a collection is a grouping of MongoDB documents. It is the equivalent of a table in a relational database, but in MongoDB, collections do not enforce a schema. Instead, collections are `schema-free`, which means that documents can have a collection can have different structures and fields.

A collection in MongoDB can contain arrays of objects, similar to JSON. In fact, MongoDB stores data in a binary representation of JSON called **`BSON`** (Binary JSON).


## Now setup mongodb atlas (can check `app.js`)

1. make own cluster and go to collection for creating that
2. then database access with name and password
3. now go to database and click on connect then connect_application get the details (copy it)
4. go to app.js set-it-up after app initialization

like this-

    const dbURI = "mongodb+srv://username:password_cluster@name_project.mevqjra.mongodb.net/node-tutorial?retryWrites=true&w=majority";
**Note : collection name after .net/HERE**

THIS WILL BE PASSED TO MONGOOSE (soon discuss)

## FOR RUNNING WHOLE APP
1. nodemon app.js (terminal)
2. http://localhost:3000 (browser)
3. open mongodb-atlas (for same ip address)

After that we could connect app to it just by **mongodb API** but it will get complex.
so we will use `mongoose` to interact with database


**`mongoose is ODM library - object document mapping library`**

*`mongodb api  -> mongoose ->  use method like .get(), .findById()`* 

now we just have to use the method for this.

## Schema for mongoose
Now make schema (property, property datatype) like - 

    name (string) required,
    age(num),
    bio (string) required


To use `mongoose`, install it as it is just a **third party package** for easyness (which is not important to use as we could use mongodb api fo this tooo but it become too clunky and verbose)


## Requests

Get -> request for data from database **`http://localhost:3000/blogs -> GET`**

Post -> request for data into database **`http://localhost:3000/blogs -> POST`**

delete -> delete particular data from database
**` http://localhost:3000/blogs/:id -> delete`**

put -> update some data in database
**`http://localhost:3000/blogs/:id  -> put `**

HERE **`:ID`** is a variable now we have to use `router-params` to handle this.

Till now we have done the whole full stack web app as Blog Post app.


But wait if we could check our app.js it is *`quite messy`* to fix this we could use **`express-router`**.

## Express Router

Express router provides a way to organize your server-side code by grouping related routes together and separating them from the main application logic.
and now we can use different routes while building a new feature.

As now as app.js is now big file.

> make new file routes and add routes.js like file to it which are
> mostly common in the project.

# MVC APPROACH
1. it stand for Model, View, Controller
2. it is just a way of structuring our code
3. it keeps code modular, reusable and easier to read.

**`model- consist of data, logic, validation, processing`**

**`views - presenting the data like html, css, scripts`**

**`controller - MODEL -> "CONTROLLER" -> VIEW`**
which is layered between models and view and responsible for handling user-input, updating view, https requests.

So, create folder of controller **`add all (req,res)`** in it

> Thank You !
