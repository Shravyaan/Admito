const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// User Signup
exports.signupUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    // REMOVE the manual bcrypt.hash line here!
    // Just pass the plain password; the Schema's pre-save hook will handle it.
    const newUser = new User({ name, email, password });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// User Login
// User Login
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Find the user by email
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    // 2. Use the model method to compare passwords (NEW PART)
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // 3. If match, generate token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
    );

    res.json({ token, message: "Login successful" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
