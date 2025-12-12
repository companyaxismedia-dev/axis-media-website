import React, { useState } from "react";
import axios from "axios";

const API = "http://localhost:5000/api/auth";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const send = async () => {
    if (!email) return alert("Enter email");
    try {
      const res = await axios.post(`${API}/forgot-password`, { email });
      alert(res.data.message);
      setSent(true);
    } catch (err) {
      alert(err?.response?.data?.message || "Failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0A1B3F] p-6">
      <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Forgot Password</h2>

        <input value={email} onChange={e => setEmail(e.target.value)} className="w-full p-3 border rounded mb-4" placeholder="Enter your email" />

        <button onClick={send} className="w-full bg-blue-600 text-white p-3 rounded mb-3">Send Reset OTP</button>

        {sent && <p className="text-center">OTP sent — check your email. Then go to Reset Password page.</p>}

        <p className="mt-3 text-center"><a href="/reset-password" className="text-blue-600">Reset Password</a></p>
      </div>
    </div>
  );
}
