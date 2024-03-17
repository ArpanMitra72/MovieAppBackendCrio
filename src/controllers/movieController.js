const movieService = require("../services/movieService");

const addMovie = async (req, res) => {
  try {
    const { title, director, genre, releaseYear, description } = req.body;
    const userId = req.user.id;
    const movie = await movieService.addMovie({
      title,
      director,
      genre,
      releaseYear,
      description,
      userId,
    });
    res.status(201).json(movie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    const updatedData = req.body;

    const movie = await movieService.updateMovie(id, userId, updatedData);

    if (!movie) {
      return res.status(404).json({ message: "Movie not found." });
    }
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const success = await movieService.deleteMovie(id, userId);

    if (!success) {
      return res.status(404).json({ message: "Movie not found." });
    }

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getMovieById = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const movie = await movieService.getMovieById(id, userId);

    if (!movie) {
      return res.status(404).json({ message: "Movie not found." });
    }

    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllMovies = async (req, res) => {
  try {
    const filters = {
      genre: req.query.genre,
      releaseYear: req.query.releaseYear,
      director: req.query.director,
    };

    const movies = await movieService.getAllMovies(filters);

    if (!movies) {
      return res.status(404).json({ message: "Movie not found." });
    }

    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addMovie,
  updateMovie,
  deleteMovie,
  getMovieById,
  getAllMovies,
};
