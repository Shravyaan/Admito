const express = require("express");
const router = express.Router();
const Visitor = require("../models/Visitor");

// POST: Create a visitor (User side)
router.post("/", async (req, res) => {
  try {
    const {
      name,
      visitCategory,
      contactNumber,
      address,
      vehicleNumber,
      reasonOfVisit,
    } = req.body;
    const newVisitor = new Visitor({
      name,
      visitCategory,
      contactNumber,
      address,
      vehicleNumber,
      reasonOfVisit,
    });
    const savedVisitor = await newVisitor.save();
    res.status(201).json(savedVisitor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// ADD THIS -> GET: Fetch all visitors (Admin side reflection)
router.get("/", async (req, res) => {
  try {
    const visitors = await Visitor.find().sort({ createdAt: -1 }); // Newest first
    res.status(200).json(visitors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
