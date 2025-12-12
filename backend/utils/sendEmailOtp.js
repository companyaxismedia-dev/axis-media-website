const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

async function sendEmail({ to, subject, html, text }) {
  return transporter.sendMail({
    from: `"Axis Media" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    text,
    html,
  });
}

async function sendOtpEmail(to, otp, purpose = "OTP Verification") {
  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif">
      <h3>${purpose}</h3>
      <p>Your verification code is:</p>
      <h2 style="letter-spacing:4px">${otp}</h2>
      <p>This code is valid for 10 minutes.</p>
    </div>
  `;
  return sendEmail({ to, subject: `Axis Media - ${purpose}`, html, text: `Your OTP is ${otp}` });
}

module.exports = { sendOtpEmail, sendEmail };
