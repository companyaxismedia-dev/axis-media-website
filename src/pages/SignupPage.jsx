import React, { useState } from "react";
import axios from "axios";

// ✅ LIVE BACKEND URL
const API = `${process.env.REACT_APP_API_URL}/api/auth`;



export default function SignupPage() {
  const [form, setForm] = useState({
    email: "",
    otp: "",
    name: "",
    phone: "",
    password: ""
  });

  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendOtp = async () => {
    if (!form.email) return alert("Enter email");
    setLoading(true);
    try {
      const res = await axios.post(`${API}/send-otp`, {
        email: form.email
      });
      alert(res.data.message);
      setOtpSent(true);
    } catch (err) {
      alert(err?.response?.data?.message || "Send OTP failed");
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!otpSent) return alert("Send OTP first");
    if (!form.name || !form.phone || !form.password || !form.otp)
      return alert("All fields required");

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
        <h2 className="text-2xl font-bold mb-6 text-center">
          Create Your Account
        </h2>

        <div className="mb-3 flex gap-2">
          <input
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            className="flex-1 p-3 border rounded"
            placeholder="Email address"
          />

          <button
            onClick={sendOtp}
            className="px-4 bg-blue-600 text-white rounded"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send OTP"}
          </button>
        </div>

        {otpSent && (
          <input
            value={form.otp}
            onChange={(e) =>
              setForm({ ...form, otp: e.target.value })
            }
            className="w-full p-3 border rounded mb-3"
            placeholder="Enter OTP"
          />
        )}

        <input
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
          placeholder="Full name"
          className="w-full p-3 border rounded mb-3"
        />

        <input
          value={form.phone}
          onChange={(e) =>
            setForm({ ...form, phone: e.target.value })
          }
          placeholder="Phone number"
          className="w-full p-3 border rounded mb-3"
        />

        <input
          value={form.password}
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
          type="password"
          placeholder="Password"
          className="w-full p-3 border rounded mb-4"
        />

        <button
          onClick={handleSignup}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded"
          disabled={loading}
        >
          Signup
        </button>

        <p className="mt-4 text-center">
          Already have account?{" "}
          <a href="/login" className="text-blue-600">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
