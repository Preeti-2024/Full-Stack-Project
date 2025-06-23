const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/User");

const registerUser = async (req, res) => {
  // Log the incoming request body
  console.log("Register request body:", req.body);

  const { userName, email, password } = req.body;

  try {
    const hashPassword = await bcrypt.hash(password, 12);
    const newUser = new User({
      userName,
      email,
      password: hashPassword,
    });
    await newUser.save();
    res.status(200).json({
      success: true,
      message: "Registration is successful",
    });
  } catch (e) {
    // Log the error details
    console.error("Registration error:", e);
    res.status(500).json({
      success: false,
      message: e.message || "Some error occurred",
      error: e, // (optional) send error details to frontend for debugging
    });
  }
};
//logout

// auth middleware

module.exports = { registerUser };
