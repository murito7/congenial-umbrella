import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router";
import authService from "../../auth/authService";

export default function Navbar() {
  let navigate = useNavigate()
  const { user, setUser } = useContext(AuthContext);

  const logout = () => {
    authService.logout()
    setUser(false);
    navigate('/login');
  }

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
