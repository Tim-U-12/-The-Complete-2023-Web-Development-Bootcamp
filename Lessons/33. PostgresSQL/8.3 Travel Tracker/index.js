import express from "express";
import bodyParser from "body-parser";
import pg from 'pg';

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "xxx",
  port: 5432,
})
db.connect()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  //Write your code here.
  const result = await db.query("SELECT country_code FROM visited_countries")
  let countries = []

  result.rows.forEach((country) => {
    countries.push(country.country_code)
  })
  res.render("index.ejs", {countries: countries, total: countries.length})
  // db.end()
});

app.post("/add", async (req, res) => {
  let visited_country = req.body.country.toUpperCase()

  try {
    const result = await db.query('INSERT INTO visited_countries (country_code) VALUES ($1)', [visited_country])
    res.redirect('/')
  } catch (err) {
    console.log(err)
    res.status(500).send('Server Error')
  }
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
