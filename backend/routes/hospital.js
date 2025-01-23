// routes/hospital.js
const express = require('express');
const Hospital = require("../db");;
const hospitalRouter = express.Router();

// Add a new hospital
hospitalRouter.post('/add',   async (req, res) => {
  const { name, location, contact, services } = req.body;
    
  try {
    const newHospital = new Hospital({
      name,
      location,
      contact,
      services,
    });
    await newHospital.save();
    res.status(201).json({ message: 'Hospital added successfully', hospital: newHospital });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error adding hospital' });
  }
});

// Get all hospitals
hospitalRouter.get('/all', async (req, res) => {
  try {
    const hospitals = await Hospital.find();
    res.status(200).json(hospitals);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching hospitals' });
  }
});

module.exports = { hospitalRouter };
