import React, { useState } from "react";
import axios from "axios"; // Make sure to install axios for making API requests

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(""); // For the success/failure message

  // Handle input changes
  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/users", {
        name,
        email,
      });

      // Show success message
      setMessage("User added successfully!");
      setName(""); // Clear input fields
      setEmail("");
    } catch (error) {
      // Show error message
      setMessage("Failed to add user.");
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Add New User</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label htmlFor="name" style={styles.label}>
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="email" style={styles.label}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button}>
          Add User
        </button>
      </form>
      {message && <div style={styles.message}>{message}</div>}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    backgroundColor: "#f4f7f6",
    minHeight: "100vh",
  },
  header: {
    fontSize: "36px",
    color: "#333",
    marginBottom: "20px",
  },
  form: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "400px",
  },
  inputGroup: {
    marginBottom: "15px",
  },
  label: {
    fontSize: "16px",
    color: "#333",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "14px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  button: {
    width: "100%",
    padding: "12px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  message: {
    marginTop: "20px",
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#f4f7f6",
    borderRadius: "4px",
    color: "#333",
  },
};

export default AddUser;
