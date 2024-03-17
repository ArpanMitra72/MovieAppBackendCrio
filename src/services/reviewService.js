const Review = require("../models/Reviews");

const rateAndReviewMovie = async (movieId, userId, rating, text) => {
  try {
    const review = await Review.create({ movieId, userId, rating, text });
    return review;
  } catch (error) {
    throw error;
  }
};

const updateReview = async (movieId, reviewId, userId, rating, text) => {
  try {
    const review = await Review.findOneAndUpdate(
      { _id: reviewId, userId, movieId },
      { rating, text },
      { new: true }
    );

    if (!review) {
      throw new Error(
        "Review not found or you are not authorized to update it."
      );
    }

    return review;
  } catch (error) {
    throw error;
  }
};

const deleteReview = async (movieId, reviewId, userId) => {
  try {
    const review = await Review.findOneAndDelete({
      _id: reviewId,
      userId,
      movieId,
    });
    if (!review) {
      throw new Error(
        "Review not found or you are not authorized to delete it."
      );
    }
    return review;
  } catch (error) {
    throw error;
  }
};

const listReviews = async (movieId) => {
  try {
    const reviews = await Review.find({ movieId });
    return reviews;
  } catch (error) {
    throw error;
  }
};

const calculateAverageRating = async (movieId) => {
  try {
    const reviews = await Review.find({ movieId });
    if (reviews.length === 0) {
      return 0;
    }
    const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
    const averageRating = totalRating / reviews.length;
    return averageRating;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  rateAndReviewMovie,
  updateReview,
  deleteReview,
  listReviews,
  calculateAverageRating,
};
