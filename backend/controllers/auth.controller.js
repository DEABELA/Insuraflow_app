// controllers/authController.js
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const express = require("express");
const app = express();

app.use(express.json());

const secretKey =
  "8722763f8df13ed5941a7e8d291642a1cab30d4d821f6b77e59fbbef01038bd9";

const generateAccessToken = (user) => {
  const accessToken = jwt.sign(
    { userId: user._id, username: user.username, role: user.role },
    secretKey,
    {
      expiresIn: "1h",
    }
  );
  return accessToken;
};

async function signup(req, res) {
  try {
    const { role, firstName, lastName, email, password, phone, address } =
      req.body;
    console.log(req.body);
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      role,
      firstName,
      lastName,
      email,
      password: hashedPassword,
      phone,
      address,
    });
    await user.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Signup failed", error: error.message });
    console.log(error);
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Validate password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    let role = user.role;
    if (!role) {
      role = "user"; // Default role if not specified
    }

    // Generate JWT token with user ID and role
    const accessToken = generateAccessToken(user);

    // **Send the access token and relevant user data in the response:**
    res.status(200).json({
      message: "Login successful",
      accessToken,
      email: user.email,
      role,
      userId: user._id, // Include user ID for potential use in frontend
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Login failed" }); // Send a generic error message
  }
}

module.exports = { signup, login };
