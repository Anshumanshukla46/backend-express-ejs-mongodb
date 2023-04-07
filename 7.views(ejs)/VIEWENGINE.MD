we could use view engine to show dynamic content.
there are many engines like pug, handlebar, ejs

we will use ejs(Embedded JavaScript Templating)


SERVER Side rendering
ejs file -> ejs view engine -> convert ejs to html -> whole html connected to ejs

we could use partials for using the repeatable content.

request -> server (can have multiple middle wares) -> response

middlewares is just a function.
Middleware in Node.js refers to a function or a set of functions that sit in between the client and the server, intercepting and processing HTTP requests and responses. Middleware functions can modify the request and/or response objects, execute additional code, or terminate the request-response cycle by sending a response to the client.