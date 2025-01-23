import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // React Router v6+

function SignIn() {
  const [role, setRole] = useState("user");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Used to redirect after successful sign-in

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Prepare data to send to backend
    const signInData = {
      email,
      password,
      role,
    };

    try {
      let endpoint = "https://hackathon-flame-chi.vercel.app/"; // Default to user login
      if (role === "admin") {
        endpoint = "https://hackathon-flame-chi.vercel.app/"; // If admin, send to admin login
      }

      const response = await axios.post(endpoint, signInData);
      setMessage(response.data.message); // assuming the backend returns a message

      // Redirect to home page after successful sign-in
      navigate("/home");
    } catch (err) {
      setError(err.response ? err.response.data.message : "Something went wrong.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Sign In</h1>
      <p className="text-gray-600">Access your account below.</p>
      <form
        className="bg-white p-8 rounded shadow-md w-full max-w-lg mt-6"
        onSubmit={handleSubmit}
      >
        {/* Email Field */}
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

        {/* Password Field */}
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
            Sign In As
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
          Sign In as {role.charAt(0).toUpperCase() + role.slice(1)}
        </button>
      </form>

      {/* Error or Success Message */}
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {message && <p className="text-green-500 mt-4">{message}</p>}
    </div>
  );
}

export default SignIn;
