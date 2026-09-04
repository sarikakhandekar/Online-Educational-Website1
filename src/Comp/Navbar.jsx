import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";
import { setupPWAInstall, installPWA } from "../pwaInstall";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [showProfile, setShowProfile] = useState(false);

  const [showInstall, setShowInstall] = useState(false);

  useEffect(() => {
    setupPWAInstall(setShowInstall);

    const token = localStorage.getItem("token");
    const name = localStorage.getItem("username");

    if (token && name) {
      setIsLoggedIn(true);
      setUsername(name);
    }
  }, []);


  function myFunction() {
    let menu = document.querySelector(".nav-links");
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
  }


  return (
    <div>
      <header>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css"
        />

        <div className="logo">
          <img src="https://i.postimg.cc/CLP2fxQr/itech2.png" />
        </div>

        <nav className="navbar">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>

          <NavLink to="/Courses" className="nav-link">
            Courses
          </NavLink>
          {/* <NavLink to="/bootcamp" className="nav-link">
            Bootcamp
          </NavLink> */}

          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Pricing
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </NavLink>

          <div className="nogap">
            {!isLoggedIn ? (
              <Link to="/login">
                <button className="btnn">Login</button>
              </Link>
            ) : (
              <div className="profile-wrapper">
                <div
                  className="profile-bubble"
                  onClick={() => setShowProfile(!showProfile)}
                >
                  {username.charAt(0).toUpperCase()}
                </div>

                {showProfile && (
                  <div className="profile-dropdown">
                    <p className="welcome">
                      WELCOME <b>{username}</b>!
                    </p>

                    <hr />

                    <button
                      className="drop-btn"
                      onClick={() => window.location.href = "/help-desk"}
                    >
                      Help Desk
                    </button>


                    <hr />

                    <button
                      className="drop-btn logout"
                      onClick={async () => {
                        const user = JSON.parse(localStorage.getItem("user"));

                        if (user && user.id) {
                          await fetch("http://localhost:5000/api/auth/logout", {
                            method: "POST",
                            headers: {
                              "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                              userId: user.id
                            })
                          });
                        }

                        localStorage.clear();
                        window.location.href = "/login";
                      }}

                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>


          {showInstall && (
            <button className="btnn install" onClick={installPWA}>
              Install App
            </button>
          )}
        </nav>

        <div className="ham" onClick={myFunction}>
          <i className="bi bi-list"></i>
        </div>
      </header>

      <div className="nav-links">
        <div className="lnks">
          <NavLink
            to="/"
            id="home"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>
        </div>

        <div className="lnks">
          <NavLink to="/courses" className="nav-link">
            Courses
          </NavLink>
        </div>

        {/* <div className="lnks">
          <NavLink to="/bootcamp" className="nav-link">
            Bootcamp
          </NavLink>
        </div> */}

        <div className="lnks">
          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Pricing
          </NavLink>
        </div>

        <div className="lnks">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </NavLink>
        </div>

        <div className="lnks lnks2">
          <Link to="/login">
            <button className="btnn lnk">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
