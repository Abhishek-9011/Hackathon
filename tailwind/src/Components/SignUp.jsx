import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // For navigation

function SignUp() {
  const [role, setRole] = useState("user");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Initialize navigate hook

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Prepare data to send to backend
    const userData = {
      username,
      email,
      contact,
      password,
      role, // Include role in the request body
    };

    try {
      let endpoint = "http://localhost:3000/user/signup"; // Default to user signup
      if (role === "admin") {
      endpoint = "http://localhost:3000/admin/signup"; // If admin, send to admin signup
      }

      const response = await axios.post(endpoint, userData);
      setMessage(response.data.message); // assuming the backend returns a message

      // Redirect to sign-in page after successful sign-up
      setTimeout(() => {
        navigate("/sign-in"); // Navigating to the sign-in page
      }, 2000); // Delay navigation for better user experience

    } catch (err) {
      setError(err.response ? err.response.data.message : "Something went wrong.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Sign Up</h1>
      <p className="text-gray-600">Create your account to get started.</p>
      <form className="bg-white p-8 rounded shadow-md w-full max-w-lg mt-6" onSubmit={handleSubmit}>
        {/* Username */}
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="mt-1 p-2 w-full border border-gray-300 rounded"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 p-2 w-full border border-gray-300 rounded"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Contact */}
        <div className="mb-4">
          <label htmlFor="contact" className="block text-sm font-medium text-gray-700">
            Contact Number
          </label>
          <input
            type="tel"
            id="contact"
            className="mt-1 p-2 w-full border border-gray-300 rounded"
            placeholder="Enter your contact number"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 p-2 w-full border border-gray-300 rounded"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Role Selection */}
        <div className="mb-4">
          <label htmlFor="role" className="block text-sm font-medium text-gray-700">
            Sign Up As
          </label>
          <select
            id="role"
            value={role}
            onChange={handleRoleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Sign Up as {role.charAt(0).toUpperCase() + role.slice(1)}
        </button>
      </form>

      {/* Error or Success Message */}
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {message && <p className="text-green-500 mt-4">{message}</p>}
    </div>
  );
}

export default SignUp;
