const authService = require("../services/authService");

const register = async (req, res) => {
  try {
    const userData = req.body;
    const user = await authService.registerUser(userData);
    //Registration is successful
    res.status(201).json({
      message: "User registered successfully",
      userId: user._id,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const userData = req.body;
    const { token, userId } = await authService.loginUser(userData);
    res.status(200).json({
      message: "User login successfully",
      token,
      userId,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { register, login };
