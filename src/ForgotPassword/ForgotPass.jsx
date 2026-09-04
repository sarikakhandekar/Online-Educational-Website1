import React, { useState } from "react";
import "./ForgotPass.css";

const ForgotPass = () => {
  const [email, setEmail] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (newPass !== confirmPass) {
      setMessage("Passwords do not match");
      setType("error");
      return;
    }

    if (newPass.length < 8) {
      setMessage("Password must be at least 8 characters");
      setType("error");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("http://localhost:5000/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          newPassword: newPass
        })
      });

      const data = await res.json();

      if (res.ok) {
        setMessage(data.message || "Password reset successful");
        setType("success");

        // redirect after success
        setTimeout(() => {
          window.location.href = "/login";
        }, 1500);
      } else {
        setMessage(data.message || "Something went wrong");
        setType("error");
      }
    } catch {
      setMessage("Server error");
      setType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="forgot-wrapper">
      <div className="forgot-box">
        <h2>Forgot Password</h2>

        <form onSubmit={submit}>
          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              placeholder="New Password"
              required
              minLength={8}
              onChange={(e) => setNewPass(e.target.value)}
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              placeholder="Confirm Password"
              required
              minLength={8}
              onChange={(e) => setConfirmPass(e.target.value)}
            />
          </div>

          <button className="reset-btn" type="submit" disabled={loading}>
            {loading ? "Processing..." : "Reset Password"}
          </button>

          {message && (
            <p className={`message ${type}`}>
              {message}
            </p>
          )}
        </form>

        <div className="back-login">
          <a href="/login">Back to Login</a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPass;
