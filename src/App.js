import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import HomePage from './pages/HomePage/HomePage';
import { useEffect } from 'react';
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user, setUser } = useContext(AuthContext);
  

  useEffect(() => {
    setUser(JSON.parse(window.localStorage.getItem('user')));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('user', user);
  }, [user])

  return (
    <Router>
        <Routes>
          <Route path="/" element = {(user && <HomePage />)|| (!user && <Navigate to ="/login"/>)} />
          <Route path="/login" element = {<Login/>}/>
          <Route path="/register"  element = {<Register/>}/>
        </Routes>
    </Router>
  );
}

export default App;
