const Admin = require("../models/Admin");
const Announcement = require("../models/announcement"); // separate schema for announcements
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Admin Signup
exports.signupAdmin = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin)
      return res.status(400).json({ message: "Admin already exists" });

    // DON'T hash here! Just pass 'password' as is.
    const newAdmin = new Admin({ username, email, password });
    await newAdmin.save();

    res.status(201).json({ message: "Admin registered successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Admin Login
exports.loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { id: admin._id, role: admin.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
    );

    res.json({ token, message: "Login successful" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create Announcement
exports.createAnnouncement = async (req, res) => {
  try {
    const { title, message, date } = req.body;

    const newAnnouncement = new Announcement({ title, message, date });
    await newAnnouncement.save();

    res.status(201).json({ message: "Announcement created successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get Announcements
exports.getAnnouncements = async (req, res) => {
  try {
    const announcements = await Announcement.find().sort({ date: 1 });
    res.json(announcements);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
