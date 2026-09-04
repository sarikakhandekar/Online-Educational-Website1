import React from "react";
import "./Footer.css";
import { NavLink, Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css"
      />
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-col">
            <div className="logo logofoot">
              <img src="https://i.postimg.cc/sXvTg7vW/itech-white-main3.png" />
            </div>
            <p>Empowering minds through technology and innovation.</p>  
          </div>
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <NavLink to="/courses">Courses</NavLink>
              </li>
              {/* <li>
                <Link to="#Bootcamp">Bootcamp</Link>
              </li> */}
              <li>
                <NavLink to="/pricing">Pricing</NavLink>
              </li>
              <li>
                <NavLink to="/contact ">Contact</NavLink>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Contact</h3>
            <p>📞 +91 9876543210</p>
            <p id="mtop">📧 Itech@gmail.com</p>
            <div id="mtop" className="footer-social">
              <a className="foota" href="#">
                <i className="bi bi-facebook"></i>
              </a>
              <a className="foota" href="#">
                <i className="bi bi-youtube"></i>
              </a>
              <a className="foota" href="#">
                <i className="bi bi-instagram"></i>
              </a>
              <a className="foota" href="#">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
