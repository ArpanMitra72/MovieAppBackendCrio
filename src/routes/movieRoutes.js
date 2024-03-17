const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movieController");
const authenticateToken = require("../middlewares/authenticateToken");

router.post("/", authenticateToken, movieController.addMovie);
router.put("/:id", authenticateToken, movieController.updateMovie);
router.delete("/:id", authenticateToken, movieController.deleteMovie);
router.get("/:id", authenticateToken, movieController.getMovieById);
router.get("/", authenticateToken, movieController.getAllMovies);

module.exports = router;
