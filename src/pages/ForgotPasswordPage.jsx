// src/pages/ForgotPasswordPage.jsx
import React, { useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

// 🔥 Backend API (Render)
const API = "http://localhost:5000/api/auth";

export default function ForgotPasswordPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  /* ================= SEND OTP ================= */
  const sendOtp = async () => {
    if (!email) {
      setError("Please enter your registered email address");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const res = await axios.post(`${API}/forgot-password`, { email });

      setSent(true);
      alert(res.data.message || "OTP sent successfully");

      // ⏳ Optional auto-redirect after 3 sec
      setTimeout(() => {
        navigate("/reset-password");
      }, 3000);

    } catch (err) {
      setError(
        err?.response?.data?.message ||
        "Unable to send OTP. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="pt-28 min-h-screen flex items-center justify-center bg-[#0A1B3F] px-4">

      {/* ================= SEO ================= */}
      <Helmet>
        <title>Forgot Password | Axis Media – Secure Account Recovery</title>
        <meta
          name="description"
          content="Forgot your Axis Media account password? Securely reset your password using OTP verification."
        />
        {/* ❌ Auth pages should not be indexed */}
        <meta name="robots" content="noindex, nofollow" />
        <link
          rel="canonical"
          href="https://www.axismediadigital.com/forgot-password"
        />
      </Helmet>

      {/* ================= CARD ================= */}
      <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-2xl">

        <h1 className="text-2xl font-bold text-center mb-2">
          Forgot Password
        </h1>

        <p className="text-gray-600 text-center mb-6 text-sm">
          Enter your registered email address.  
          We’ll send you a secure OTP to reset your password.
        </p>

        {/* EMAIL INPUT */}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          className="w-full p-3 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        {/* ERROR MESSAGE */}
        {error && (
          <p className="text-red-600 text-sm mb-3 text-center">
            {error}
          </p>
        )}

        {/* SEND OTP BUTTON */}
        <button
          onClick={sendOtp}
          disabled={loading}
          className={`w-full p-3 rounded-lg text-white font-semibold transition
            ${loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90"}
          `}
        >
          {loading ? "Sending OTP..." : "Send Reset OTP"}
        </button>

        {/* SUCCESS MESSAGE */}
        {sent && (
          <p className="mt-4 text-center text-green-600 text-sm font-medium">
            ✅ OTP sent successfully. Redirecting to reset page…
          </p>
        )}

        {/* LINKS */}
        <div className="mt-6 text-center text-sm space-y-2">
          <p>
            Remembered your password?{" "}
            <a
              href="/login"
              className="text-blue-600 font-semibold hover:underline"
            >
              Login
            </a>
          </p>

          <p>
            <a
              href="/reset-password"
              className="text-indigo-600 font-semibold hover:underline"
            >
              Go to Reset Password →
            </a>
          </p>
        </div>

      </div>
    </main>
  );
}
