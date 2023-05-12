## THOSE METHOD HAVE `.then()` ALL ARE ASYNCHORNOUS METHODS
Although basic but yes noticeable.

we could use `view engine` to show dynamic content. There are many engines like `pug, handlebar, ejs` etc...

We will use ejs (Embedded JavaScript Templating)

---
    SERVER Side rendering

Rendering steps:
ejs file -> ejs view engine -> convert ejs to html -> whole html connected to ejs


we could use `partials` for using the **`repeatable content`**.


***request -> server (server can have multiple middlewares) -> response***


# What is Middleware
Middleware in Node.js refers to a function or a set of functions that sit in between the client and the server, intercepting and processing HTTP requests and responses. 

Middleware functions can modify the request and/or response objects, execute additional code, or terminate the request-response cycle by sending a response to the client.