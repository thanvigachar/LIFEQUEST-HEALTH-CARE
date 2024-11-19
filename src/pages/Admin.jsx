import React from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate hook for navigation

const Admin = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  // Functions to handle navigation
  const handleViewUsers = () => {
    navigate('/users'); // Navigate to the User Management page
  };

  const handleAddUser = () => {
    navigate('/add-user'); // Navigate to the Add User page
  };

  const handleViewDoctors = () => {
    navigate('/doctors-management'); // Navigate to the Doctor Management page
  };

  const handleAddDoctor = () => {
    navigate('/add-doctor'); // Navigate to the Add Doctor page
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Admin Panel</h1>

      <div style={styles.section}>
        <h2 style={styles.subHeader}>User Management</h2>
        <p style={styles.paragraph}>Manage and monitor registered users here.</p>
        <button style={styles.button} onClick={handleViewUsers}>View Users</button>
        <button style={styles.button} onClick={handleAddUser}>Add User</button>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subHeader}>Doctor Management</h2>
        <p style={styles.paragraph}>Manage and monitor doctor profiles here.</p>
        <button style={styles.button} onClick={handleViewDoctors}>View Doctors</button>
        <button style={styles.button} onClick={handleAddDoctor}>Add Doctor</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f4f7f6',
    padding: '20px',
  },
  header: {
    fontSize: '36px',
    color: '#333',
    marginBottom: '20px',
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    margin: '15px 0',
    width: '80%',
    maxWidth: '600px',
  },
  subHeader: {
    fontSize: '24px',
    color: '#333',
    marginBottom: '10px',
  },
  paragraph: {
    fontSize: '16px',
    color: '#555',
    marginBottom: '15px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginRight: '10px',
    transition: 'background-color 0.3s',
  },
};

export default Admin;
