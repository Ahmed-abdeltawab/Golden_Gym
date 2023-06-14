import React from "react";
import {  NavLink } from "react-router-dom";
import Logo from "../assets/images/Logo.png";

export default function Navbar() {
  return (
    <div className="sm:w-1/3 flex justify-between items-center mb-16">
      <NavLink to="/">
        <img src={Logo} alt="logo" />
      </NavLink>
      <div className="flex gap-3 items-center">
        <NavLink className="text-lg" to="/">Home</NavLink>
        <NavLink className="text-lg" to="Exercises">Exercises</NavLink>
      </div>
    </div>
  );
}
