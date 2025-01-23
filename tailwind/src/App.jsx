import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"; 
import SignUp from "./Components/Signup";
import SignIn from "./Components/SignIn";
import Home from "./Components/Home";
import AllHospitals from "./Components/AllHospital";
import AddHospital from "./Components/AddHospital";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/AllHospital" element={<AllHospitals />} />
        <Route path="/AddHospital" element={<AddHospital />} />
      </Routes>
    </Router>
  );
}

export default App;
