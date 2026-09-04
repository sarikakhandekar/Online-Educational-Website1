import React, { useState } from 'react'
import "./Contact.css";

const Contact = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [msg, setMsg] = useState("");
  const [msgType, setMsgType] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    setMsg("");

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      if (res.ok) {
        setMsg("Message sent successfully");
        setMsgType("success");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setMsg(data.message || "Failed to send message");
        setMsgType("error");
      }
    } catch {
      setMsg("Server error. Try again later");
      setMsgType("error");
    }
  };

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css"
      />

      <section className="contact-hero">
        <div>
          <h1>Contact Us</h1>
          <p>Get in touch with us for your Future Computers Courses needs</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <ul className="contact-details">
              <li>
                <i className="bi bi-geo-alt"></i>
                <div>
                  <strong>Address:</strong>
                  <p>Regional Office</p>
                  <p>Office No.01, Civic Center</p>
                  <p>Opp. Panchmukhi Hanuman Mandir</p>
                  <p>Nallasopara (W) 401203</p>
                  <p>Mon - Sat: 9:00 AM - 9:00 PM</p>
                  <p>Sunday: Closed</p>
                  <br />
                </div>
              </li>
              <li>
                <i className="bi bi-telephone"></i>
                <div>
                  <strong>Phone:</strong>
                  <p>+91 91122114411</p>
                </div>
              </li>
              <li>
                <i className="bi bi-envelope"></i>
                <div>
                  <strong>Email:</strong>
                  <p>info@-tech.net.com</p>
                </div>
              </li>
              <li>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoBzLUtjP1plVAd6SDSubdrkPt6P0IA_e-cQ&s"
                  alt="logo"
                />
                <strong>Social Media:</strong>
                <div className="wrapper">
                  <div className="icon">
                    <div className="tooltip">Facebook</div>
                    <i className="bi bi-facebook"></i>
                  </div>
                  <div className="icon">
                    <div className="tooltip">Instagram</div>
                    <i className="bi bi-instagram"></i>
                  </div>
                  <div className="icon">
                    <div className="tooltip">Twitter</div>
                    <i className="bi bi-twitter-x"></i>
                  </div>
                  <div className="icon">
                    <div className="tooltip">YouTube</div>
                    <i className="bi bi-youtube"></i>
                  </div>
                  <div className="icon">
                    <div className="tooltip">Google</div>
                    <i className="bi bi-google"></i>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="contact-form">
            <h3>Send us a Message</h3>

            {/* ONLY CHANGE: onSubmit + value/onChange */}
            <form id="contactForm" onSubmit={submitForm}>
              <div className="form-group">
                <label html="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label html="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label html="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  minLength="10"
                  maxLength="10"
                  placeholder="+91 XXXXX XXXXX"
                  required
                />
              </div>

              <div className="form-group">
                <label html="message">Tell Us How Can We Help You?</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Optional"
                ></textarea>
              </div>

              {/* ONLY ADDED MESSAGE */}
              {msg && (
                <p className={`contact-message ${msgType}`}>
                  {msg}
                </p>
              )}

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.8110657769807!2d72.81040459678958!3d19.420567600000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7abe6891e6e0d%3A0x114832cd830e050f!2sI%20Tech%20Computer%20Education!5e0!3m2!1sen!2sin!4v1759927329689!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

        </div>
      </section>
    </div>
  )
}

export default Contact;
