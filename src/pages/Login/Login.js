import React from "react";
import { useState } from "react";
import useLogin from "../../hooks/useLogin";
import "./Login.css";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
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
