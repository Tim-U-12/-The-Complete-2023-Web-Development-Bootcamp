import dotenv from 'dotenv'
import express from "express";
import bodyParser from "body-parser";
import pg from 'pg';

const result = dotenv.config({ path: '../../../.env'})
if (result.error) {
  throw result.error;
}

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: process.env.PG_PASSWORD,
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
  let visited_country = req.body.country

  try {
    const result = await db.query('SELECT country_code FROM countries WHERE country_name = $1', [visited_country])
    const country_code = result.rows[0].country_code
    await db.query('INSERT INTO visited_countries (country_code) VALUES ($1)', [country_code])
    res.redirect('/')
  } catch (err) {
    console.log(err)
    res.status(500).send('Server Error')
  }
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
