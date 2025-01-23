// src/components/AllHospitals.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AllHospitals = () => {
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        const response = await axios.get('http://localhost:3000/hospital/all');
        setHospitals(response.data);
      } catch (error) {
        console.error('Error fetching hospitals:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHospitals();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl text-gray-600">Loading hospitals...</div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h2 className="text-4xl font-semibold text-center text-indigo-600 mb-8">All Hospitals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {hospitals.map((hospital) => (
          <div
            key={hospital._id}
            className="bg-white rounded-lg shadow-lg overflow-hidden p-6 transform transition-all hover:scale-105 hover:shadow-xl"
          >
            <h3 className="text-xl font-semibold text-indigo-700">{hospital.name}</h3>
            <p className="text-gray-500">Location: {hospital.location}</p>
            <p className="text-gray-500">Contact: {hospital.contact}</p>
            <p className="text-gray-500">Services: {hospital.services.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllHospitals;
