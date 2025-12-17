import React, { useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet-async";

// ✅ BACKEND URL (Render)
const API = "http://localhost:5000/api/auth";

export default function SignupPage() {
  const [form, setForm] = useState({
    email: "",
    otp: "",
    name: "",
    phone: "",
    password: "",
  });

  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);

  /* ================= SEND OTP ================= */
  const sendOtp = async () => {
    if (!form.email) {
      alert("Please enter your email");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(`${API}/send-otp`, {
        email: form.email,
      });

      alert(res.data.message || "OTP sent successfully");
      setOtpSent(true);
    } catch (err) {
      alert(err?.response?.data?.message || "Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  /* ================= SIGNUP ================= */
  const signup = async (e) => {
    e.preventDefault();

    if (!form.otp || !form.name || !form.phone || !form.password) {
      alert("All fields are required");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(`${API}/signup`, form);

      alert(res.data.message || "Signup successful");

      if (res.data.message === "Signup successful!") {
        window.location.href = "/login";
      }
    } catch (err) {
      alert(err?.response?.data?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="pt-28 min-h-screen bg-[#0A1B3F] flex items-center justify-center px-4">

      {/* ================= SEO ================= */}
      <Helmet>
        <title>Create Account | Axis Media – Digital Marketing Agency India</title>
        <meta
          name="description"
          content="Create your Axis Media account to access SEO, Google Ads, Website Development and digital marketing services."
        />
        <link
          rel="canonical"
          href="https://www.axismediadigital.com/signup"
        />
      </Helmet>

      {/* ================= CARD ================= */}
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-2xl">

        <h1 className="text-2xl font-bold text-center mb-2">
          Create Your Account
        </h1>

        <p className="text-center text-gray-600 text-sm mb-6">
          Join <strong>Axis Media</strong> & grow your business with SEO,
          Google Ads & Website Development
        </p>

        <form onSubmit={signup} className="space-y-3">

          {/* EMAIL */}
          <input
            type="email"
            placeholder="Email address"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            className="w-full p-3 border rounded-lg"
            required
          />

          {/* SEND OTP */}
          <button
            type="button"
            onClick={sendOtp}
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg font-semibold transition disabled:opacity-60"
          >
            {loading ? "Sending OTP..." : "Send OTP"}
          </button>

          {/* OTP + DETAILS */}
          {otpSent && (
            <>
              <input
                placeholder="Enter OTP"
                value={form.otp}
                onChange={(e) =>
                  setForm({ ...form, otp: e.target.value })
                }
                className="w-full p-3 border rounded-lg"
                required
              />

              <input
                placeholder="Full Name"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                className="w-full p-3 border rounded-lg"
                required
              />

              <input
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) =>
                  setForm({ ...form, phone: e.target.value })
                }
                className="w-full p-3 border rounded-lg"
                required
              />

              <input
                type="password"
                placeholder="Password"
                value={form.password}
                onChange={(e) =>
                  setForm({ ...form, password: e.target.value })
                }
                className="w-full p-3 border rounded-lg"
                required
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-3 rounded-lg font-semibold transition disabled:opacity-60"
              >
                {loading ? "Creating account..." : "Signup"}
              </button>
            </>
          )}
        </form>

        {/* LOGIN LINK */}
        <p className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 font-semibold">
            Login
          </a>
        </p>

      </div>
    </main>
  );
}
