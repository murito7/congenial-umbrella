import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router";
import authService from "../../auth/authService";
import "./Login.css";

export default function Login() {
  let navigate = useNavigate();
  const { setUser } = useContext(AuthContext);
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    const data = await authService.login(email, password);
    if(!data.errors){
      localStorage.setItem("jwt", data.accessToken);
      localStorage.setItem("lifespan", data.expiresIn);
      localStorage.setItem("refreshToken", data.refreshToken);
      setUser(true);
      navigate("/");
    }
  };

  return (
    <div className="box">
      <div className="page-messages">
        <h1>Welcome</h1>
        <h2>Login here please !</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button>login</button>
      </form>
    </div>
  );
}
