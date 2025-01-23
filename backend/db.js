const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

// User Schema
const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  contact: { type: String, required: true },
  role: { type: String, enum: ["user", "admin"], default: "user" }, // Role field
}, { timestamps: true });

// Admin Schema
const adminSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}, { timestamps: true });

// Hospital Schema

const hospitalSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    contact: { type: String, required: true },
    services: [String], // e.g., ["Emergency", "Cardiology", "Pediatrics"]
  });
// Appointment Schema
const appointmentSchema = new Schema({
  userId: { type: ObjectId, ref: "user", required: true }, // Reference to the user
  hospitalId: { type: ObjectId, ref: "hospital", required: true }, // Reference to the hospital
  appointmentDate: { type: Date, required: true },
  status: { type: String, enum: ["pending", "confirmed", "cancelled"], default: "pending" },
}, { timestamps: true });

// Models
const userModel = mongoose.model("user", userSchema);
const adminModel = mongoose.model("admin", adminSchema);
const hospitalModel = mongoose.model("hospital", hospitalSchema);
const appointmentModel = mongoose.model("appointment", appointmentSchema);

module.exports = {
  userModel,
  adminModel,
  hospitalModel,
  appointmentModel,
};
