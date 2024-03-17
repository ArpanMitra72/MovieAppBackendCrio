const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.comparePassword = async function (canditaePassword) {
  console.log("Document inside schema", this.password);
  return await bcrypt.compare(canditaePassword, this.password);
};

const User = mongoose.model("User", userSchema);
module.exports = User;
