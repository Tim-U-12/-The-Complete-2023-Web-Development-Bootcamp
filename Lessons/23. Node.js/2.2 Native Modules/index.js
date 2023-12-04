const fs = require("fs")

fs.writeFile("myMessage.txt", "Hello from Node.js", (err) =>{
    if (err) throw err;
    console.log("thie file has been saved")
});