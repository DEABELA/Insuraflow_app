const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("./models/User");
const bodyParser = require("body-parser");
const express = require("express");
const authRoutes = require("./routes/auth.route");
const cors = require("cors");
dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use("/auth", authRoutes);
const PORT = process.env.PORT || 3000;
mongoose
  .connect(process.env.MONGODB_URI, {})
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => console.error("MongoDB connection error:", error));
