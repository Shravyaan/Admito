const express = require("express");
const router = express.Router();
const {
  signupAdmin,
  loginAdmin,
  createAnnouncement,
  getAnnouncements, // 1. Add this import
} = require("../controllers/adminController");

router.post("/register", signupAdmin);
router.post("/login", loginAdmin);

// 2. Admin posts the announcement
router.post("/announcements", createAnnouncement);

// 3. ADD THIS: This is how the User's page will "fetch" the data to show it
router.get("/announcements", getAnnouncements);

module.exports = router;
