const express = require("express");
const router = express.Router();
const reviewController = require("../controllers/reviewController");
const authenticateToken = require("../middlewares/authenticateToken");

router.post(
  "/:id/reviews",
  authenticateToken,
  reviewController.rateAndReviewMovie
);
router.put(
  "/:movieId/reviews/:reviewId",
  authenticateToken,
  reviewController.updateReview
);
router.delete(
  "/:movieId/reviews/:reviewId",
  authenticateToken,
  reviewController.deleteReview
);
router.get("/:id/reviews", authenticateToken, reviewController.listReviews);
router.get(
  "/:id/averageRating",
  authenticateToken,
  reviewController.averageRating
);

module.exports = router;
