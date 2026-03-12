const mongoose = require("mongoose");

const VisitorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  visitCategory: { type: String, required: true },
  contactNumber: { type: String, required: true },
  address: { type: String, required: true },
  vehicleNumber: { type: String, required: true },
  reasonOfVisit: { type: String, required: true },
  checkInTime: { type: Date, default: Date.now },
  status: { type: String, enum: ["In", "Out"], default: "In" },
});

module.exports = mongoose.model("Visitor", VisitorSchema);
