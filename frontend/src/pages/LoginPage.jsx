import React, { useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

// ✅ Backend API (Render)
const API = "http://localhost:5000/api/auth";
export default function LoginPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  /* ================= LOGIN ================= */
  const login = async (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      alert("Email and Password are required");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(`${API}/login`, form);

      // ✅ Save token
      localStorage.setItem("token", res.data.token);

      alert("Login successful");

      // ✅ Redirect after login
      navigate("/");
    } catch (err) {
      alert(err?.response?.data?.message || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="pt-28 min-h-screen bg-[#0A1B3F] flex items-center justify-center px-4">

      {/* ================= SEO ================= */}
      <Helmet>
        <title>Login | Axis Media – Digital Marketing Agency India</title>
        <meta
          name="description"
          content="Login to your Axis Media account to manage SEO, Google Ads, website development and digital marketing services."
        />
        <link
          rel="canonical"
          href="https://www.axismediadigital.com/login"
        />
      </Helmet>

      {/* ================= CARD ================= */}
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-2xl">

        <h1 className="text-2xl font-bold text-center mb-2">
          Welcome Back
        </h1>

        <p className="text-center text-gray-600 text-sm mb-6">
          Login to <strong>Axis Media</strong> and continue growing your business
        </p>

        <form onSubmit={login} className="space-y-4">

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

          {/* PASSWORD */}
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

          {/* LOGIN BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-3 rounded-lg font-semibold transition disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* EXTRA LINKS */}
        <div className="mt-4 text-center text-sm space-y-2">
          <p>
            Don’t have an account?{" "}
            <a href="/signup" className="text-blue-600 font-semibold">
              Create one
            </a>
          </p>
        </div>

      </div>
    </main>
  );
}
