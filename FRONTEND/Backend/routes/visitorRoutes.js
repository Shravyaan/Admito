const express = require("express");
const router = express.Router();
const Visitor = require("../models/Visitor");

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

module.exports = router;
