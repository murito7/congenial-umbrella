import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import useLogout from "../../hooks/useLogout";

export default function Navbar() {
  const { logout } = useLogout();
  const { user } = useContext(AuthContext);
  return (
    <div className="navbar">
      <ul>
        <li>{!user && <Link to="/login">Login</Link>}</li>
        <li>{!user && <Link to="/register">Signup</Link>}</li>
        {user && <li>{<button onClick={() => logout()}>Logout</button>}</li>}
      </ul>
    </div>
  );
}
