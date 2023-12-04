const fs = require("fs")

// fs.writeFile("myMessage.txt", "Hello from Node.js", (err) =>{
//     if (err) throw err;
//     console.log("thie file has been saved")
// });

const filePath = "./myMessage.txt"
fs.readFile(filePath, 'utf-8',(err, data) => {
    if (err) throw err;
    console.log(data)
});