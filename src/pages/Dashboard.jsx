import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => (
  <div style={styles.container}>
    <h1 style={styles.header}>Admin Dashboard</h1>
    <ul style={styles.list}>
      <li style={styles.listItem}>
        <Link to="/doctors" style={styles.link}>Manage Doctors</Link>
      </li>
      <li style={styles.listItem}>
        <Link to="/settings" style={styles.link}>Account Settings</Link>
      </li>
    </ul>
  </div>
);

const styles = {
  container: {
    padding: "20px",
    backgroundColor: "#f4f7f6",
    minHeight: "100vh",
  },
  header: {
    fontSize: "36px",
    color: "#333",
    marginBottom: "20px",
  },
  list: {
    listStyleType: "none",
    padding: 0,
  },
  listItem: {
    marginBottom: "15px",
  },
  link: {
    fontSize: "18px",
    color: "#007bff",
    textDecoration: "none",
    transition: "color 0.3s ease",
  },
};

export default Dashboard;
