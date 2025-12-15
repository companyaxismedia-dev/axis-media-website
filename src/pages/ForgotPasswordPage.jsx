// src/pages/ForgotPasswordPage.jsx
import React, { useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet-async";

// 🔥 LIVE BACKEND URL (Render / Railway / VPS)
const API = `${process.env.REACT_APP_API_URL}/api/auth`;

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const send = async () => {
    if (!email) {
      alert("Please enter your email");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(`${API}/forgot-password`, { email });

      alert(res.data.message || "OTP sent successfully");
      setSent(true);
    } catch (err) {
      alert(
        err?.response?.data?.message ||
        "Something went wrong. Try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0A1B3F] px-4">

      {/* ================= SEO ================= */}
      <Helmet>
        <title>Forgot Password | Axis Media</title>
        <meta
          name="description"
          content="Forgot your password? Reset your Axis Media account password securely using OTP verification."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* ================= CARD ================= */}
      <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-2xl">

        <h1 className="text-2xl font-bold mb-2 text-center">
          Forgot Password
        </h1>

        <p className="text-gray-600 text-center mb-6 text-sm">
          Enter your registered email. We’ll send you a reset OTP.
        </p>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your email address"
        />

        <button
          onClick={send}
          disabled={loading}
          className={`w-full p-3 rounded-lg text-white font-semibold transition
            ${loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"}
          `}
        >
          {loading ? "Sending OTP..." : "Send Reset OTP"}
        </button>

        {sent && (
          <p className="mt-4 text-center text-green-600 text-sm font-medium">
            ✅ OTP sent successfully. Check your email.
          </p>
        )}

        <div className="mt-6 text-center">
          <a
            href="/reset-password"
            className="text-blue-600 font-medium hover:underline"
          >
            Go to Reset Password →
          </a>
        </div>

      </div>
    </div>
  );
}
