import React, { useState } from "react";
import axios from "axios";

// ✅ LIVE BACKEND URL FROM ENV
const API = `${import.meta.env.VITE_API_URL}/api/auth`;


export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });

  const login = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API}/login`, form);

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        alert("Login successful");
        window.location.href = "/";
      } else {
        alert(res.data.message);
      }
    } catch (err) {
      alert(err?.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0A1B3F] p-6">
      <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-xl">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Login to your account
        </h2>

        <form onSubmit={login}>
          <input
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            placeholder="Email"
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
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-center">
          <a href="/forgot-password" className="text-blue-600">
            Forgot password?
          </a>
        </p>
      </div>
    </div>
  );
}
