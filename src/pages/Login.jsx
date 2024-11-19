import React, { useContext, useState } from "react";
import { Context } from "../main";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

// Inline styles
const styles = {
  container: {
    padding: "20px",
    maxWidth: "400px",
    margin: "0 auto",
    backgroundColor: "#f4f4f4",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    textAlign: "center",
    color: "#271776",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    outline: "none",
  },
  button: {
    padding: "10px",
    backgroundColor: "#271776",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "14px",
  },
  link: {
    color: "#271776ca",
    textDecoration: "none",
  },
};

const Login = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigateTo = useNavigate();

  const handleLoginWithAxios = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/user/login",
        { email, password, confirmPassword, role: "Patient" },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      toast.success(response.data.message);
      setIsAuthenticated(true);
      navigateTo("/");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    }
  };

  const handleLoginWithFetch = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) throw new Error("Login failed");

      const data = await response.json();
      console.log("Login successful:", data);
      toast.success("Login successful");
      setIsAuthenticated(true);
      navigateTo("/");
      setEmail("");
      setPassword("");
    } catch (error) {
      toast.error(error.message || "Error during login");
    }
  };

  if (isAuthenticated) {
    return <Navigate to={"/"} />;
  }

  const handleRegisterClick = () => {
    alert("You are about to register a new account.");
  };

  return (
    <>
      <div className="container" style={styles.container}>
        <h2 style={styles.heading}>Sign In</h2>
        <p style={{ textAlign: "center" }}>Please Login To Continue</p>
        <form
          onSubmit={(e) => {
            handleLoginWithAxios(e);
            // Or use Fetch method by uncommenting below:
            // handleLoginWithFetch(e);
          }}
          style={styles.form}
        >
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={styles.input}
          />
          <div style={styles.footer}>
            <p style={{ marginBottom: 0 }}>Not Registered?</p>
            <Link
              to={"/register"}
              style={{ ...styles.link, cursor: "pointer" }}
              onClick={handleRegisterClick} // Show pop-up message
            >
              Register Now
            </Link>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button type="submit" style={styles.button}>Login</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
