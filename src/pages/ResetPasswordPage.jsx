import React, { useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet-async";

// ✅ LIVE BACKEND URL (Render)
const API = `${process.env.REACT_APP_API_URL}/api/auth`;

export default function ResetPasswordPage() {
  const [form, setForm] = useState({
    email: "",
    otp: "",
    newPassword: "",
  });

  const [loading, setLoading] = useState(false);

  const verifyAndReset = async (e) => {
    e.preventDefault();

    if (!form.email || !form.otp || !form.newPassword) {
      return alert("All fields are required");
    }

    try {
      setLoading(true);

      // ✅ STEP 1: Verify OTP
      const verify = await axios.post(`${API}/verify-reset-otp`, {
        email: form.email,
        otp: form.otp,
      });

      if (verify.data.message !== "OTP verified") {
        setLoading(false);
        return alert(verify.data.message || "OTP verification failed");
      }

      // ✅ STEP 2: Reset Password
      const res = await axios.post(`${API}/reset-password`, {
        email: form.email,
        otp: form.otp,
        newPassword: form.newPassword,
      });

      alert(res.data.message);

      if (res.data.message === "Password reset successful") {
        window.location.href = "/login";
      }
    } catch (err) {
      alert(err?.response?.data?.message || "Reset failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0A1B3F] p-6">
      {/* ================= SEO ================= */}
      <Helmet>
        <title>Reset Password | Axis Media</title>
        <meta
          name="description"
          content="Reset your Axis Media account password securely using OTP verification."
        />
        <link
          rel="canonical"
          href="https://axismediadigital.com/reset-password"
        />
      </Helmet>

      <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-xl">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Reset Password
        </h1>

        <form onSubmit={verifyAndReset}>
          <input
            className="w-full p-3 border rounded mb-3"
            placeholder="Email"
            type="email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <input
            className="w-full p-3 border rounded mb-3"
            placeholder="OTP"
            value={form.otp}
            onChange={(e) =>
              setForm({ ...form, otp: e.target.value })
            }
          />

          <input
            className="w-full p-3 border rounded mb-4"
            placeholder="New Password"
            type="password"
            value={form.newPassword}
            onChange={(e) =>
              setForm({ ...form, newPassword: e.target.value })
            }
          />

          <button
            disabled={loading}
            className={`w-full p-3 rounded text-white font-semibold transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Processing..." : "Reset Password"}
          </button>
        </form>
      </div>
    </main>
  );
}
