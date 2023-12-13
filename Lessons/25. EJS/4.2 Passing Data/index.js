import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

const data = {
  title: "Enter your name below"
}

app.get("/", (req, res) => {
  res.render("index.ejs", data)
});

app.post("/submit", (req, res) => {
  let lenName = req.body['fName'].length + req.body['lName'].length
  data['title'] = `There are ${lenName} letters in your name.`
  res.render("index.ejs", data)
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
