const reviewService = require("../services/reviewService");

const rateAndReviewMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    const { rating, text } = req.body;

    const review = await reviewService.rateAndReviewMovie(
      id,
      userId,
      rating,
      text
    );

    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateReview = async (req, res) => {
  try {
    const { movieId, reviewId } = req.params;
    const userId = req.user.id;
    const { rating, text } = req.body;

    const updatedReview = await reviewService.updateReview(
      movieId,
      reviewId,
      userId,
      rating,
      text
    );

    res.status(200).json(updatedReview);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteReview = async (req, res) => {
  try {
    const { movieId, reviewId } = req.params;
    const userId = req.user.id;

    const success = await reviewService.deleteReview(movieId, reviewId, userId);

    if (!success) {
      return res.status(404).json({ message: "Review not found." });
    }

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const listReviews = async (req, res) => {
  try {
    const { id } = req.params;
    const reviews = await reviewService.listReviews(id);

    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const averageRating = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("from controller:" + id);

    const average = await reviewService.calculateAverageRating(id);

    res.status(200).json({ average });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  rateAndReviewMovie,
  updateReview,
  deleteReview,
  listReviews,
  averageRating,
};
