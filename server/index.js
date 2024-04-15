const express = require('express');
const cors = require('cors');
const knex = require("knex")(
  require("./knexfile.js")[process.env.NODE_ENV || "development"]
);
const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());
// {origin: "http://localhost/3001"}

app.get('/', (req, res) => {
  res.send('application up and running');
});


app.get ('/movies', (req, res) => {
  knex('movie_list')
  .select('*')
  .then(data => res.status(200).json(data))
  .catch(err =>
    res.status(404).json('The data you are looking for could not be found.'))
    // res.json(movies).status(200)
  })



app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
});