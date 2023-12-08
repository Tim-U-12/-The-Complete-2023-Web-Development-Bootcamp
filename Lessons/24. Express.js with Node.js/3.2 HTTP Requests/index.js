import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1><i>Hello</i> World!<h1>")
    //console.log(req.rawHeaders)
});

app.get("/about", (req, res) => {
    res.send("<h2><i>About Me</i></h2>")
});

app.listen(port, () => {
    console.log(`Local server is running on port ${port}.`)
});
