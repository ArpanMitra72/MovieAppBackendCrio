const Movies = require("../models/Movies");

const addMovie = async (movieData) => {
  try {
    const movie = await Movies.create(movieData);
    return movie;
  } catch (error) {
    throw error;
  }
};

const updateMovie = async (movieId, userId, updatedData) => {
  try {
    const movie = await Movies.findOneAndUpdate(
      { _id: movieId, userId: userId },
      { $set: updatedData },
      { new: true }
    );
    return movie;
  } catch (error) {
    throw error;
  }
};

const deleteMovie = async (movieId, userId) => {
  try {
    const movie = await Movies.findOneAndDelete({
      _id: movieId,
      userId: userId,
    });
    return movie;
  } catch (error) {
    throw error;
  }
};

const getMovieById = async (movieId, userId) => {
  try {
    const movie = await Movies.findOne({ _id: movieId, userId: userId });
    return movie;
  } catch (error) {
    throw error;
  }
};

const getAllMovies = async (filters) => {
  try {
    let query = {};

    if (filters.genre) {
      query.genre = filters.genre;
    }

    if (filters.releaseYear) {
      query.releaseYear = filters.releaseYear;
    }

    if (filters.director) {
      query.director = filters.director;
    }

    const movies = await Movies.find(query);
    return movies;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  addMovie,
  updateMovie,
  deleteMovie,
  getMovieById,
  getAllMovies,
};
