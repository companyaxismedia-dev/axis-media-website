import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// ✅ LIVE BACKEND URL FROM ENV
const API = `${process.env.REACT_APP_API_URL}/api/auth`;

export default function LoginPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const login = async (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      alert("Please enter email & password");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(`${API}/login`, form);

      if (res.data?.token) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));

        alert("Login successful");
        navigate("/"); // ✅ SPA friendly redirect
      } else {
        alert(res.data?.message || "Login failed");
      }
    } catch (err) {
      alert(
        err?.response?.data?.message ||
          "Server error. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0A1B3F] p-6">
      <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-xl">

        <h1 className="text-2xl font-bold mb-6 text-center">
          Login to your account
        </h1>

        <form onSubmit={login}>
          <input
            type="email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            placeholder="Email"
            className="w-full p-3 border rounded mb-3"
            required
          />

          <input
            type="password"
            value={form.password}
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
            placeholder="Password"
            className="w-full p-3 border rounded mb-4"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="
              w-full bg-blue-600 text-white p-3 rounded
              hover:bg-blue-700 transition
              disabled:opacity-60
            "
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="mt-4 text-center">
          <a href="/forgot-password" className="text-blue-600 hover:underline">
            Forgot password?
          </a>
        </p>
      </div>
    </div>
  );
}
