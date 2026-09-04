// import React, { useState, useEffect } from "react";
// import "./HelpDesk.css";

// const HelpDesk = () => {
//   const [form, setForm] = useState({
//     username: "",
//     email: "",
//     category: "",
//     message: ""
//   });

//   const [msg, setMsg] = useState("");
//   const [msgType, setMsgType] = useState("");


//   useEffect(() => {
//     setForm((prev) => ({
//       ...prev,
//       username: localStorage.getItem("username") || "",
//       email: localStorage.getItem("email") || ""
//     }));
//   }, []);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const submitForm = (e) => {
//     e.preventDefault();


//     setMsg("Your support request has been submitted successfully.");
//     setMsgType("success");

//     setForm({
//       ...form,
//       category: "",
//       message: ""
//     });
//   };

//   return (
//     <div className="helpdesk-wrapper">
//       <div className="helpdesk-box">
//         <h3>Help Desk Support</h3>

//         <form onSubmit={submitForm}>
//           <div className="form-group">
//             <label>Username</label>
//             <input type="text" value={form.username} disabled />
//           </div>

//           <div className="form-group">
//             <label>Email</label>
//             <input type="email" value={form.email} disabled />
//           </div>

//           <div className="form-group">
//             <label>Issue Category</label>
//             <select
//               name="category"
//               value={form.category}
//               onChange={handleChange}
//               required
//             >
//               <option value="">Select issue type</option>
//               <option>Course Access Problem</option>
//               <option>Payment / Refund Issue</option>
//               <option>Video Not Playing</option>
//               <option>Certificate Issue</option>
//               <option>Login / Account Issue</option>
//               <option>Technical Bug</option>
//               <option>Other</option>
//             </select>
//           </div>


//           <div className="form-group">
//             <label>Describe your issue</label>
//             <textarea
//               name="message"
//               rows="5"
//               value={form.message}
//               onChange={handleChange}
//               placeholder="Explain your issue in detail..."
//               required
//             ></textarea>
//           </div>

//           {msg && (
//             <p className={`helpdesk-message ${msgType}`}>
//               {msg}
//             </p>
//           )}

//           <button type="submit" className="submit-btn">
//             Raise Ticket
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default HelpDesk;


import React, { useState, useEffect } from "react";
import "./HelpDesk.css";

const HelpDesk = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    category: "",
    message: ""
  });

  const [msg, setMsg] = useState("");
  const [msgType, setMsgType] = useState("");

  useEffect(() => {
    setForm((prev) => ({
      ...prev,
      username: localStorage.getItem("username") || "",
      email: localStorage.getItem("email") || ""
    }));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ API CONNECTED SUBMIT
  const submitForm = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/helpdesk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      if (data.success) {
        setMsg("Your support request has been submitted successfully.");
        setMsgType("success");

        setForm({
          ...form,
          category: "",
          message: ""
        });
      } else {
        setMsg("Something went wrong!");
        setMsgType("error");
      }
    } catch (err) {
      setMsg("Server error!");
      setMsgType("error");
    }
  };

  return (
    <div className="helpdesk-wrapper">
      <div className="helpdesk-box">
        <h3>Help Desk Support</h3>

        <form onSubmit={submitForm}>
          <div className="form-group">
            <label>Username</label>
            <input type="text" value={form.username} disabled />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" value={form.email} disabled />
          </div>

          <div className="form-group">
            <label>Issue Category</label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              required
            >
              <option value="">Select issue type</option>
              <option>Course Access Problem</option>
              <option>Payment / Refund Issue</option>
              <option>Video Not Playing</option>
              <option>Certificate Issue</option>
              <option>Login / Account Issue</option>
              <option>Technical Bug</option>
              <option>Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>Describe your issue</label>
            <textarea
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          {msg && <p className={`helpdesk-message ${msgType}`}>{msg}</p>}

          <button type="submit" className="submit-btn">
            Raise Ticket
          </button>
        </form>
      </div>
    </div>
  );
};

export default HelpDesk;
