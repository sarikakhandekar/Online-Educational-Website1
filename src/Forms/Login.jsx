import { useState } from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const ADMIN_EMAIL = "admin@admin";
  const ADMIN_PASSWORD = "admin@admin";

  const login = async (e) => {
    e.preventDefault();
    setMessage("");

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      localStorage.setItem("role", "admin");

      setMessage("Admin login successful");
      setMessageType("success");

      setTimeout(() => {
        window.location.href = "/admin";
      }, 1000);

      return; 
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", "user");
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("username", data.user.username);
        localStorage.setItem("email", data.user.email);

        setMessage("Login successful");
        setMessageType("success");

        setTimeout(() => {
          window.location.href = "/";
        }, 1200);
      } else {
        setMessage(data.message || "Invalid credentials");
        setMessageType("error");
      }
    } catch {
      setMessage("Server error. Try again later.");
      setMessageType("error");
    }

    if (res.status === 403) {
    localStorage.clear();
    window.location.href = "/login";
    return;
}

  };

  return (
    <div className="login-wrapper">
      <div className="container">
        <form className="form-box" onSubmit={login}>
          <h2>
            <i
              style={{
                color: "black",
                fontSize: "25px",
                fontFamily: "sans-serif",
                marginLeft: "90px"
              }}
              className="bi bi-person-circle"
            ></i>
            &nbsp; LOGIN
          </h2>

          <div className="input-box">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <i id="input" className="bi bi-person"></i>
          </div>

          <div className="input-box">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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

          <button type="submit" className="login1" style={{ color: "white" }}>
            Login Now
          </button>

          <div className="social">
            <NavLink to="/forgot-password">
              <p className="forgot">Forgot Password?</p>
            </NavLink>

            <p>
              Don't have an account? &nbsp;
              <NavLink to="/singup" style={{ textDecoration: "underline" }}>
                Get Started
              </NavLink>
            </p>

            <div className="social-icons">
              <i id="socialicon" className="bi bi-facebook"></i>
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/046/861/647/small/google-logo-transparent-background-free-png.png"
                alt="Google"
              />
            </div>

            {message && (
              <p className={`login-message ${messageType}`}>
                {message}
              </p>
            )}
          </div>
        </form>

        <div className="img-box">
          <img
            src="https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/VZpg_YkTgilrvkdxa/videoblocks-smiling-student-girl-working-on-laptop-study-online-with-internet-teacher-woman-search-for-inspiration-and-ideas-reading-news-in-social-network-using-laptop-computer-in-home-interior_hbezkgw1vi_thumbnail-1080_01.png"
            alt="login"
          />
        </div>
      </div>
    </div>
  );
};

export default Login; 