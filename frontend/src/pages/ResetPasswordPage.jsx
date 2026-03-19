// src/pages/ResetPasswordPage.jsx
import React, { useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

// 🔥 Backend API (Render)
const API = "http://localhost:5000/api/auth";

export default function ResetPasswordPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    otp: "",
    newPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  /* ================= RESET PASSWORD ================= */
  const resetPassword = async (e) => {
    e.preventDefault();

    if (!form.email || !form.otp || !form.newPassword) {
      setError("Please fill all fields");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const res = await axios.post(`${API}/reset-password`, form);

      setSuccess(true);
      alert(res.data.message || "Password reset successfully");

      // 🔁 Redirect to login after success
      setTimeout(() => {
        navigate("/login");
      }, 2500);

    } catch (err) {
      setError(
        err?.response?.data?.message ||
        "Unable to reset password. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="pt-28 min-h-screen flex items-center justify-center bg-[#0A1B3F] px-4">

      {/* ================= SEO ================= */}
      <Helmet>
        <title>Reset Password | Axis Media – Secure Account Recovery</title>
        <meta
          name="description"
          content="Reset your Axis Media account password securely using OTP verification."
        />
        {/* 🔐 Auth pages should not be indexed */}
        <meta name="robots" content="noindex, nofollow" />
        <link
          rel="canonical"
          href="https://www.axismediadigital.com/reset-password"
        />
      </Helmet>

      {/* ================= CARD ================= */}
      <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-2xl">

        <h1 className="text-2xl font-bold text-center mb-2">
          Reset Your Password
        </h1>

        <p className="text-gray-600 text-center mb-6 text-sm">
          Enter the OTP sent to your email and create a new password.
        </p>

        <form onSubmit={resetPassword} className="space-y-3">

          {/* EMAIL */}
          <input
            type="email"
            placeholder="Email address"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* OTP */}
          <input
            type="text"
            placeholder="Enter OTP"
            value={form.otp}
            onChange={(e) =>
              setForm({ ...form, otp: e.target.value })
            }
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* NEW PASSWORD */}
          <input
            type="password"
            placeholder="New Password"
            value={form.newPassword}
            onChange={(e) =>
              setForm({ ...form, newPassword: e.target.value })
            }
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* ERROR */}
          {error && (
            <p className="text-red-600 text-sm text-center">
              {error}
            </p>
          )}

          {/* BUTTON */}
          <button
            disabled={loading}
            className={`w-full p-3 rounded-lg text-white font-semibold transition
              ${loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90"}
            `}
          >
            {loading ? "Resetting..." : "Reset Password"}
          </button>

          {/* SUCCESS */}
          {success && (
            <p className="text-green-600 text-sm text-center mt-2">
              ✅ Password reset successfully. Redirecting to login…
            </p>
          )}
        </form>

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
            Didn’t receive OTP?{" "}
            <a
              href="/forgot-password"
              className="text-indigo-600 font-semibold hover:underline"
            >
              Send again
            </a>
          </p>
        </div>

      </div>
    </main>
  );
}
