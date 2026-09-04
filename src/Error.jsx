import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.code}>404</h1>
      <h2 style={styles.title}>Page Not Found</h2>
      <p style={styles.text}>
        The page you are looking for doesn’t exist or has been moved.
      </p>

      <NavLink to="/" style={styles.button}>
        Go Back Home
      </NavLink>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    textAlign: "center",
    padding: "20px",
  },
  code: {
    fontSize: "120px",
    fontWeight: "bold",
    color: "#dc3545",
    margin: "0",
  },
  title: {
    fontSize: "32px",
    margin: "10px 0",
  },
  text: {
    fontSize: "18px",
    color: "#6c757d",
    marginBottom: "30px",
  },
  button: {
    textDecoration: "none",
    padding: "12px 24px",
    backgroundColor: "#007bff",
    color: "#fff",
    borderRadius: "6px",
    fontSize: "16px",
  },
};

export default Error;
