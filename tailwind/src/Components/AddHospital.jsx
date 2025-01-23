// src/components/AddHospital.js
import React, { useState } from 'react';
import axios from 'axios';

const AddHospital = () => {
  const [hospitalData, setHospitalData] = useState({
    name: '',
    location: '',
    contact: '',
    services: '',
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHospitalData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, location, contact, services } = hospitalData;

    // Validate input fields
    if (!name || !location || !contact || !services) {
      setError('All fields are required!');
      return;
    }
    setError(null); // Clear error if all fields are filled

    try {
      const servicesArray = services.split(',').map((service) => service.trim()); // Split services by commas
      await axios.post('http://localhost:3000/hospital/add', {
        name,
        location,
        contact,
        services: servicesArray,
      });

      alert('Hospital added successfully!');
      setHospitalData({ name: '', location: '', contact: '', services: '' });
    } catch (error) {
      console.error(error);
      alert('Error adding hospital');
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-xl shadow-xl mt-10">
      <h2 className="text-3xl text-white text-center mb-6">Add Hospital</h2>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Hospital Name"
          value={hospitalData.name}
          onChange={handleChange}
          className="w-full p-3 text-lg rounded-lg bg-white border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={hospitalData.location}
          onChange={handleChange}
          className="w-full p-3 text-lg rounded-lg bg-white border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
        <input
          type="text"
          name="contact"
          placeholder="Contact"
          value={hospitalData.contact}
          onChange={handleChange}
          className="w-full p-3 text-lg rounded-lg bg-white border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
        <input
          type="text"
          name="services"
          placeholder="Services (comma separated)"
          value={hospitalData.services}
          onChange={handleChange}
          className="w-full p-3 text-lg rounded-lg bg-white border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
        <button
          type="submit"
          className="w-full p-3 text-lg bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Add Hospital
        </button>
      </form>
    </div>
  );
};

export default AddHospital;
