import { api } from "../api/api";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";

export default function useLogin() {
  let Navigate = useNavigate();
  const {setUser} = useContext(AuthContext);
  const login = async (email, password) => {
    try {
      const response = await fetch(`${api}/login`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await response.json();
      localStorage.setItem("jwt", data.accessToken);
      localStorage.setItem("lifespan", data.expiresIn);
      localStorage.setItem("refreshToken", data.refreshToken);
      setUser(true);
      Navigate("/");
      return data;
    } catch (err) {
      if (err) {
        console.log(err);
      }
    }
  };
  return { login };
}
