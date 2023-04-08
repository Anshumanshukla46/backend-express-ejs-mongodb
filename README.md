As  `javasript`  can run in the browser using  `v8 engine`  which is written in **cpp** but now to add more dynamicity to web we want to run this in server side also which can be done using **`nodejs`** which comprises v8 engine and much more than that.

But by this we loose access to some feature like **dom model**.

--- 

## **`Running structure`**

*nodejs -> javascript -> cpp (assembly language) -> machine language*

Role of node is that we want run javascript on `server side` and handle the request in server side.

Install `nodejs` then type "`node`" to use.

To run some file do write **`node fileName`**

## npm
`npm` is used package manager to do thing more easily like `refreshing` with **nodemon**.

for package.json = use `npm init` (if running/using third party dependenies)

we can also install the package globally even in the all projects
by  `npm install -g nodemon` (-g for global use)

1.  can use **i** for **install**
2.  **--save** used to add in **package.json** but now it is **deafult**

As in the **server.js** of module-5 (above) the code is being a lot messy (not now but if then do use more routing.)

So, **expess** is framework that help to easily manage the request, server-side logic, and responses in much optimum way.

There is `No need` to use express it can be done with raw node, but it allows clean code and more good features.
