import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Navbar() {
  const { user } = useContext(AuthContext);
  return (
    <div className="navbar">
      <ul>
        <li>{!user && <Link to="/login">Login</Link>}</li>
        <li>{!user && <Link to="/register">Signup</Link>}</li>
        {user && (<li>{<button>Logout</button>}</li>)}
      </ul>
    </div>
  );
}
