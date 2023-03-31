const fs = require("fs"); // file system

// reading file - async (not wait move to other)
// fs.readFile('./doc.txt', (err, data) => {
//     // as this take much time so execute this
//     if (err)
//         console.log(err);
//     console.log(data); // buffer
//     console.log(data.toString());
// })


// write files - sync (wait till executing is at end and if file not exist create)
// fs.watchFile("./doc.txt", 'hello world', () => {
//     console.log("file is written");
// })



// directory = create file and if exist then return error
// fs.mkdir("./assets", (err) => {
//     console.log(err);
// })


// delete
if (fs.existsSync('./doc2.txt')) { // checking if exist

    // unlinkk to delete
    fs.unlink("./doc2.txt", (err) => {
        console.log(err);
    })
}