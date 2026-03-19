const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const User = require("../models/User");

const router = express.Router();

// TEMP OTP STORE (simple & working)
const otpStore = {};

// ================= EMAIL SETUP =================
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ================= SEND OTP =================
router.post("/send-otp", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.json({ message: "Email is required" });
  }

  const otp = Math.floor(100000 + Math.random() * 900000);
  otpStore[email] = otp;

  try {
    await transporter.sendMail({
      from: `Axis Media <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Your OTP Code",
      html: `
        <h2>Axis Media Verification</h2>
        <p>Your OTP is:</p>
        <h1>${otp}</h1>
        <p>This OTP is valid for a short time.</p>
      `,
    });

    res.json({ message: "OTP sent successfully" });
  } catch (error) {
    res.json({ message: "Failed to send OTP" });
  }
});

// ================= SIGNUP =================
router.post("/signup", async (req, res) => {
  const { name, email, phone, password, otp } = req.body;

  if (!name || !email || !phone || !password || !otp) {
    return res.json({ message: "All fields are required" });
  }

  // OTP VERIFY
  if (otpStore[email] != otp) {
    return res.json({ message: "Invalid OTP" });
  }

  const exists = await User.findOne({ email });
  if (exists) {
    return res.json({ message: "User already exists" });
  }

  const hash = await bcrypt.hash(password, 10);

  await User.create({
    name,
    email,
    phone,
    password: hash,
    isVerified: true, // ✅ VERIFIED AFTER OTP
  });

  delete otpStore[email];

  res.json({ message: "Signup successful!" });
});

// ================= LOGIN =================
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.json({ message: "Email and password required" });
  }

  const user = await User.findOne({ email });
  if (!user) {
    return res.json({ message: "User not found" });
  }

  // ❌ BLOCK IF NOT VERIFIED
  if (!user.isVerified) {
    return res.json({
      message: "Please complete signup & OTP verification first",
    });
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return res.json({ message: "Wrong password" });
  }

  const token = jwt.sign(
    { id: user._id },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  res.json({
    message: "Login successful",
    token,
    user,
  });
});

// ================= FORGOT PASSWORD =================
router.post("/forgot-password", async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.json({ message: "Email not registered" });
  }

  const otp = Math.floor(100000 + Math.random() * 900000);
  otpStore[email] = otp;

  await transporter.sendMail({
    from: `Axis Media <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Password Reset OTP",
    html: `<h1>${otp}</h1>`,
  });

  res.json({ message: "Password reset OTP sent" });
});

// ================= RESET PASSWORD =================
router.post("/reset-password", async (req, res) => {
  const { email, otp, newPassword } = req.body;

  if (otpStore[email] != otp) {
    return res.json({ message: "Invalid OTP" });
  }

  const hash = await bcrypt.hash(newPassword, 10);
  await User.findOneAndUpdate({ email }, { password: hash });

  delete otpStore[email];

  res.json({ message: "Password reset successful" });
});

module.exports = router;
