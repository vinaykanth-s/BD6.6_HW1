const cors = require('cors');
const express = require('express');
const { getAllMovies, getMovieById } = require('./controllers');

const app = express();
app.use(cors());
app.use(express.json());

//endpoint to get all movies
app.get('/movies', async (req, res) => {
  const movies = getAllMovies();
  res.json({ movies });
});

//endpoint to get movie details by id
app.get('/movies/details/:id', async (req, res) => {
  let movie = getMovieById(parseInt(req.params.id));

  res.json({
    movie,
  });
});

app.get('/', (req, res) => {
  res.send('BD6.6 - HW - 1');
});

module.exports = { app };
