require("dotenv").config({ path: "src/.env" });
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const authRoutes = require("./routes/authRoutes");
const movieRoutes = require("./routes/movieRoutes");
const reviewRoutes = require("./routes/reviewRoutes");

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/users", authRoutes);
app.use("/api/movies", movieRoutes);
app.use("/api/movies", reviewRoutes);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

app.get("/", (req, res) => {
  res.send("Backend server is running");
});

app.listen(PORT, () => {
  console.log(`server is listening on PORT ${PORT}`);
});
