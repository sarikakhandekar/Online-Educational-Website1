import React, { useState } from "react";
import "./Singup.css";
import { NavLink } from "react-router-dom";

const Singup = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    contact: ""
  });

  const [showPassword, setShowPassword] = useState(false);

  
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const signup = async (e) => {
    e.preventDefault();

    setMessage("");

    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Signup successful!");
        setMessageType("success");

        setTimeout(() => {
          window.location.href = "/login";
        }, 1500);
      } else {
        setMessage(data.message || "Email or Phone Number already exists.");
        setMessageType("error");
      }
    } catch (err) {
      setMessage("Server error. Try again later.");
      setMessageType("error");
    }
  };

  return (
    <div className="main-container">
      <form className="container-box" onSubmit={signup}>
        <div className="left-side">
          <h2 style={{ color: "royalblue", textAlign: "center" }}>
            New User
          </h2>

          <div className="social-icons">
            <i id="socialicon" className="bi bi-facebook"></i>
            <img
                src="https://static.vecteezy.com/system/resources/thumbnails/046/861/647/small/google-logo-transparent-background-free-png.png"
                alt="Google"
              />
          </div>

          <p style={{ color: "royalblue", textAlign: "center" }}>
            Or use your email account
          </p>

          <div className="input-box">
            <i id="input2" className="bi bi-person"></i>
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              value={form.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-box">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
              minLength={8}
              maxLength={15}
              required
            />
            <button
              type="button"
              className="icon-btn toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "👁️" : "👁️‍🗨️"}
            </button>
          </div>

          <div className="input-box">
            <i id="input2" className="bi bi-envelope"></i>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-box">
            <i id="input2" className="bi bi-telephone"></i>
            <input
              type="text"
              name="contact"
              placeholder="+91 XXXXX XXXXX"           
              value={form.contact}
              onChange={handleChange}
              minLength={10}
              maxLength={10}
              required
            />
          </div>

          
          {message && (
            <p className={`form-message ${messageType}`}>
              {message}
            </p>
          )}

          <button type="submit" className="Signupbtn">
            Signup
          </button>
        </div>

        <div className="right-side">
          <h2>Hello, Friend!</h2>
          <p>Enter your personal details and start your journey with us.</p>

          <NavLink to="/login">
            <button className="outline-btn" type="button">
              Login
            </button>
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default Singup;
