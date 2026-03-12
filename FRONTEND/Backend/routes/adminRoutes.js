const express = require("express");
const router = express.Router();
const {
  signupAdmin,
  loginAdmin,
  createAnnouncement,
} = require("../controllers/adminController");

router.post("/register", signupAdmin);
router.post("/login", loginAdmin);
router.post("/announcements", createAnnouncement);

module.exports = router;
