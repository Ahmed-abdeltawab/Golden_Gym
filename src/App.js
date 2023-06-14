import React from "react";
import { Routes, Route } from "react-router-dom";

//import components
import Home from "./pages/Home";
import ExerciseDetails from "./pages/ExerciseDetails";
import Navbar from "./components/Navbar";
export default function App() {
  return (
    <div className="px-6 py-3">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetails />} />
      </Routes>
    </div>
  );
}
