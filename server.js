const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
const cors = require("cors");

const app = express();
const PORT = 5000;

const url = "mongodb://localhost:27017";
const dbName = "hospitalDB";
let db;

// Middleware
app.use(cors());
app.use(express.json()); // Correct usage of JSON middleware

// Connect to MongoDB
MongoClient.connect(url, { useUnifiedTopology: true })
  .then(client => {
    db = client.db(dbName);
    console.log("Connected to MongoDB");
  })
  .catch(err => console.error(err));

// Routes

// Users
// app.post("/api/sign-up", async (req, res) => {
//   const { username, password } = req.body;
//   try {
//     const result = await db.collection("users").insertOne({ username, password });
//     res.status(201).json(result);
//   } catch (err) {
//     res.status(500).send(err.message);
//   }
// });

// app.post("/api/login", async (req, res) => {
//   const { username, password } = req.body;
//   const user = await db.collection("users").findOne({ username, password });
//   user ? res.json(user) : res.status(404).send("Invalid credentials");
// });

// Appointments
app.post("/api/appointments", async (req, res) => {
  try {
    const result = await db.collection("appointments").insertOne(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.get("/api/appointments", async (req, res) => {
  const appointments = await db.collection("appointments").find().toArray();
  res.json(appointments);
});

app.delete("/api/appointments/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.collection("appointments").deleteOne({ _id: new ObjectId(id) });
    res.json(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
});
app.post("/api/users", async (req, res) => {
  const { name, email } = req.body;
  try {
    const newUser = new User({ name, email });
    await newUser.save();
    res.status(201).json({ message: "User added successfully!" });
  } catch (error) {
    res.status(400).json({ message: "Error adding user." });
  }
});

// Doctors
app.get("/api/doctors", async (req, res) => {
  const doctors = await db.collection("doctors").find().toArray();
  res.json(doctors);
});

app.listen(PORT, () => console.log("Server running on 5000"));