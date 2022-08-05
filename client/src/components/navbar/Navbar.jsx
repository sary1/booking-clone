import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [firstname] = useState(useSelector((store) => store.user.firstname));

  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">{firstname ? firstname : "lama"}booking</span>
        <div className="navItems">
          <button className="navButton">
            <Link to="/register">Register</Link>
          </button>
          <button className="navButton">
            <Link to="/login">Login</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
