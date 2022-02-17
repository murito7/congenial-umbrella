import React from "react";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";
import './Register.css';

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password);
  };

  return (
    <div className="box">
      <div className="page-messages">
        <h1>Welcome</h1>
        <h2>Register here please !</h2>
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
        <button>submit</button>
      </form>
    </div>
  );
}
