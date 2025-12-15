import React, { useState } from "react";
import axios from "axios";

// ✅ LIVE BACKEND URL (from .env)
const API = `${process.env.REACT_APP_API_URL}/api/auth`;

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
      alert("Please enter email");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(`${API}/send-otp`, {
        email: form.email,
      });

      alert(res.data.message);
      setOtpSent(true);
    } catch (err) {
      alert(err?.response?.data?.message || "Send OTP failed");
    } finally {
      setLoading(false);
    }
  };

  /* ================= SIGNUP ================= */
  const handleSignup = async (e) => {
    e.preventDefault();

    if (!otpSent) {
      alert("Please send OTP first");
      return;
    }

    if (!form.name || !form.phone || !form.password || !form.otp) {
      alert("All fields are required");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(`${API}/signup`, form);
      alert(res.data.message);

      if (res.data.message === "Signup successful") {
        window.location.href = "/login";
      }
    } catch (err) {
      alert(err?.response?.data?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0A1B3F] p-6">
      <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-xl">

        <h1 className="text-2xl font-bold mb-6 text-center">
          Create Your Account
        </h1>

        <form onSubmit={handleSignup}>

          {/* EMAIL + OTP BUTTON */}
          <div className="mb-3 flex gap-2">
            <input
              type="email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              className="flex-1 p-3 border rounded"
              placeholder="Email address"
              required
            />

            <button
              type="button"
              onClick={sendOtp}
              className="px-4 bg-blue-600 text-white rounded disabled:opacity-60"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send OTP"}
            </button>
          </div>

          {/* OTP INPUT */}
          {otpSent && (
            <input
              value={form.otp}
              onChange={(e) =>
                setForm({ ...form, otp: e.target.value })
              }
              className="w-full p-3 border rounded mb-3"
              placeholder="Enter OTP"
              required
            />
          )}

          {/* NAME */}
          <input
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            placeholder="Full name"
            className="w-full p-3 border rounded mb-3"
            required
          />

          {/* PHONE */}
          <input
            value={form.phone}
            onChange={(e) =>
              setForm({ ...form, phone: e.target.value })
            }
            placeholder="Phone number"
            className="w-full p-3 border rounded mb-3"
            required
          />

          {/* PASSWORD */}
          <input
            value={form.password}
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded mb-4"
            required
          />

          {/* SUBMIT */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded font-semibold disabled:opacity-60"
          >
            {loading ? "Please wait..." : "Signup"}
          </button>
        </form>

        <p className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 font-semibold">
            Login
          </a>
        </p>

      </div>
    </div>
  );
}
