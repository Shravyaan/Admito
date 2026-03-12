const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(express.json()); // parse JSON bodies
app.use(cors()); // allow cross-origin requests

// Import routes
const visitorRoutes = require("./routes/visitorRoutes");
const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");

// Mount routes
app.use("/visitor", visitorRoutes);
app.use("/user", userRoutes);
app.use("/admin", adminRoutes);

// Connect to MongoDB Atlas
mongoose
  .connect(process.env.MONGO_URI, {
    //useNewUrlParser: true,
    //useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Start server
const PORT = process.env.PORT || 4500;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
