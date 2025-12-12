import React, { useState } from "react";
import axios from "axios";

const API = "http://localhost:5000/api/auth";

export default function ResetPasswordPage() {
  const [form, setForm] = useState({ email: "", otp: "", newPassword: "" });

  const verifyAndReset = async (e) => {
    e.preventDefault();
    if (!form.email || !form.otp || !form.newPassword) return alert("All fields required");

    try {
      // optional: verify-reset-otp first (server already checks on reset)
      const verify = await axios.post(`${API}/verify-reset-otp`, { email: form.email, otp: form.otp });
      if (verify.data.message !== "OTP verified") {
        return alert(verify.data.message || "OTP verify failed");
      }

      const res = await axios.post(`${API}/reset-password`, form);
      alert(res.data.message);
      if (res.data.message === "Password reset successful") window.location.href = "/login";
    } catch (err) {
      alert(err?.response?.data?.message || "Reset failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0A1B3F] p-6">
      <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Reset Password</h2>

        <form onSubmit={verifyAndReset}>
          <input className="w-full p-3 border rounded mb-3" placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/>
          <input className="w-full p-3 border rounded mb-3" placeholder="OTP" value={form.otp} onChange={e=>setForm({...form,otp:e.target.value})}/>
          <input className="w-full p-3 border rounded mb-4" placeholder="New password" type="password" value={form.newPassword} onChange={e=>setForm({...form,newPassword:e.target.value})}/>
          <button className="w-full bg-blue-600 text-white p-3 rounded">Reset Password</button>
        </form>
      </div>
    </div>
  );
}
