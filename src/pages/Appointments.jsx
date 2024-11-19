import React, { useState, useEffect } from "react";

const Appointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [formData, setFormData] = useState({ firstName: "", lastName: "", appointmentDate: "" });

  // Inline CSS for styling
  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#e8f5e9", // Light green background
      minHeight: "100vh",
      padding: "20px",
      textAlign: "center",
    },
    hero: {
      backgroundImage: `url('./image.png')`, // Use the uploaded image
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "black",
      padding: "50px 20px",
      borderRadius: "10px",
      marginBottom: "30px",
    },
    form: {
      marginBottom: "30px",
      padding: "20px",
      backgroundColor: "#fff",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    },
    input: {
      padding: "10px",
      margin: "10px 0",
      width: "90%",
      borderRadius: "5px",
      border: "1px solid #ccc",
    },
    button: {
      padding: "10px 20px",
      backgroundColor: "#4caf50",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
    appointmentsList: {
      marginTop: "30px",
    },
    appointmentItem: {
      backgroundColor: "#fff",
      marginBottom: "15px",
      padding: "15px",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  };

  // Fetch appointments
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/appointments");
        const data = await response.json();
        setAppointments(data);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    fetchAppointments();
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const newAppointment = await response.json();
      setAppointments((prev) => [...prev, newAppointment]);
      setFormData({ firstName: "", lastName: "", appointmentDate: "" }); // Clear form
    } catch (error) {
      console.error("Error creating appointment:", error);
    }
  };

  // Delete appointment
  const deleteAppointment = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/appointments/${id}`, {
        method: "DELETE",
      });
      setAppointments((prev) => prev.filter((appointment) => appointment._id !== id));
    } catch (error) {
      console.error("Error deleting appointment:", error);
    }
  };

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <div style={styles.hero}>
        <h1>Schedule Your Appointment</h1>
        <p>Plan your visit to LifeQuest Care and get the best healthcare services.</p>
      </div>

      {/* Appointment Form */}
      <div style={styles.form}>
        <h2>Book an Appointment</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            style={styles.input}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            style={styles.input}
            required
          />
          <input
            type="date"
            name="appointmentDate"
            value={formData.appointmentDate}
            onChange={(e) => setFormData({ ...formData, appointmentDate: e.target.value })}
            style={styles.input}
            required
          />
          <button type="submit" style={styles.button}>
            Submit
          </button>
        </form>
      </div>

      {/* Appointments List */}
      <div style={styles.appointmentsList}>
        <h2>Upcoming Appointments</h2>
        <ul>
          {appointments.map((appointment) => (
            <li key={appointment._id} style={styles.appointmentItem}>
              <span>
                {appointment.firstName} {appointment.lastName} -{" "}
                {new Date(appointment.appointmentDate).toLocaleDateString("en-GB")}
              </span>
              <button
                onClick={() => deleteAppointment(appointment._id)}
                style={{ ...styles.button, backgroundColor: "#f44336" }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Appointment;
