import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import HomePage from './pages/HomePage/HomePage';
import { useEffect } from 'react';
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Ghsearch from "./components/Github-search/Ghsearch";
import Ecommerce from "./components/Ecommerce/Ecommerce"
import Equalizer from "./components/Equalizer/Equalizer"
import Loopstudio from "./components/Loopstudio/Loopstudio"
import TipsCalc from "./components/Tips-Calculator/Tipscalc"

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
          <Route path="/login" element = {(!user && <Login/>) || (user && <Navigate to ="/"/>)}/>
          <Route path="/register"  element = {(!user && <Register/>) || (user && <Navigate to ="/"/>)}/>
          <Route path="/e-commerce" element = {(user && <Ecommerce />)} />
          <Route path="/equalizer" element = {(user && <Equalizer />)} />
          <Route path="/github-user-search-app" element={(user && <Ghsearch />)} />
          <Route path="/loopstudio" element = {(user && <Loopstudio />)} />
          <Route path="/tips-calculator" element = {(user && <TipsCalc />)} />
        </Routes>
    </Router>
  );
}

export default App;
