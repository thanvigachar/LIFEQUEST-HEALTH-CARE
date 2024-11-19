import React, { useState } from "react";

// Inline CSS styles
const styles = {
  container: {
    padding: "20px",
    maxWidth: "500px",
    margin: "0 auto",
    backgroundColor: "#f4f4f4",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    textAlign: "center",
    color: "#271776",
  },
  formGroup: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    fontWeight: "bold",
    marginBottom: "5px",
    fontSize: "16px",
  },
  select: {
    padding: "10px",
    fontSize: "16px",
    width: "100%",
    border: "1px solid #ddd",
    borderRadius: "4px",
    outline: "none",
  },
  checkbox: {
    marginRight: "10px",
  },
  button: {
    padding: "12px 20px",
    backgroundColor: "#271776",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    width: "100%",
    fontSize: "16px",
  },
  buttonHover: {
    backgroundColor: "#3c45b3",
  },
};

const Settings = () => {
  const [settings, setSettings] = useState({ theme: "light", notifications: true });
  const [isHovered, setIsHovered] = useState(false);

  const handleSave = async () => {
    await fetch("http://localhost:5000/api/settings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(settings),
    });
    alert("Settings updated!");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Account Settings</h1>
      <div style={styles.formGroup}>
        <label style={styles.label}>Theme:</label>
        <select
          value={settings.theme}
          onChange={(e) => setSettings({ ...settings, theme: e.target.value })}
          style={styles.select}
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
      <div style={styles.formGroup}>
        <label style={styles.label}>Notifications:</label>
        <input
          type="checkbox"
          checked={settings.notifications}
          onChange={(e) =>
            setSettings({ ...settings, notifications: e.target.checked })
          }
          style={styles.checkbox}
        />
        <span>Enable Notifications</span>
      </div>
      <button
        onClick={handleSave}
        style={isHovered ? { ...styles.button, ...styles.buttonHover } : styles.button}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Save Settings
      </button>
    </div>
  );
};

export default Settings;
