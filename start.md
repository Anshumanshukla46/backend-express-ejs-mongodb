As js can run in the browser using v8 engine which is written in cpp 
but now to add more dynamicity to web we want to run this in server side also which can be done using nodejs which comprises v8 engine and much more than that.

but by this we loose access to some feature like dom model.

nodejs  -> javascript
cpp
assemnly language
machine language

role of node is simple that we want run js on server side and handle the request in server side.

install nodejs then type "node" to use.

to run some file do write "node fileName"



npm is used package manager to do thing more easily like refeshing with nodemon.


package.json = npm init (if running/using third party dependenies)

we can also install the package globally even in the all projects

like - npm install -g nodemon (-g)
1. i for install
2. --save = to add in package.json but now it is deafult 



as in the server.js of 5 module 
the code is being a lot messy (not now but if do use more get/post/routing.)

so for that expess is framework that help to easily manage the request, server-side logic, and responses in much optimum way.

No need to use express it can be done with raw node but it allows clean code and more good features