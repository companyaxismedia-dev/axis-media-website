// routes/auth.js
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const User = require("../models/User");

const router = express.Router();

// TEMP OTP STORAGE
const otpStore = {};

// 📌 EMAIL TRANSPORTER (Gmail + App Password)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ========================
// SEND OTP (Signup + Reset)
// ========================
router.post("/send-otp", async (req, res) => {
  const { email } = req.body;

  if (!email) return res.json({ message: "Email is required" });

  const otp = Math.floor(100000 + Math.random() * 900000);
  otpStore[email] = otp;

  console.log(`OTP for ${email} => ${otp}`);

  // 📩 SEND MAIL
  try {
    await transporter.sendMail({
      from: `Axis Media <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Your OTP Code",
      text: `Your OTP is: ${otp}`,
      html: `<h2>Your OTP is</h2><h1>${otp}</h1>`,
    });

    res.json({ message: "OTP sent successfully to email!" });
  } catch (err) {
    console.error("Email send error:", err);
    res.json({ message: "Failed to send OTP" });
  }
});

// ========================
// SIGNUP
// ========================
router.post("/signup", async (req, res) => {
  const { name, email, phone, password, otp } = req.body;

  if (otpStore[email] != otp) {
    return res.json({ message: "Invalid OTP" });
  }

  let user = await User.findOne({ email });
  if (user) return res.json({ message: "User already exists" });

  const hash = await bcrypt.hash(password, 10);

  await User.create({
    name,
    email,
    phone,
    password: hash,
  });

  delete otpStore[email];

  res.json({ message: "Signup successful!" });
});

// ========================
// LOGIN
// ========================
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  let user = await User.findOne({ email });
  if (!user) return res.json({ message: "User not found" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.json({ message: "Incorrect password" });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.json({
    message: "Login success",
    token,
    user,
  });
});

// ========================
// FORGOT PASSWORD (Send OTP)
// ========================
router.post("/forgot-password", async (req, res) => {
  const { email } = req.body;

  let user = await User.findOne({ email });
  if (!user) return res.json({ message: "Email not registered" });

  const otp = Math.floor(100000 + Math.random() * 900000);
  otpStore[email] = otp;

  console.log(`Reset OTP for ${email} => ${otp}`);

  try {
    await transporter.sendMail({
      from: `Axis Media <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Password Reset OTP",
      html: `<h2>Password Reset OTP</h2><h1>${otp}</h1>`,
    });

    res.json({ message: "Reset OTP sent to email" });
  } catch (err) {
    res.json({ message: "Failed to send OTP" });
  }
});

// ========================
// RESET PASSWORD
// ========================
router.post("/reset-password", async (req, res) => {
  const { email, otp, newPassword } = req.body;

  if (otpStore[email] != otp)
    return res.json({ message: "Invalid OTP" });

  const hash = await bcrypt.hash(newPassword, 10);

  await User.findOneAndUpdate({ email }, { password: hash });

  delete otpStore[email];

  res.json({ message: "Password reset successful!" });
});

module.exports = router;
