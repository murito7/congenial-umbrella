import { api } from "../api/api";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";

export default function useLogout() {
  const { setUser } = useContext(AuthContext);
  let Navigate = useNavigate();
  const logout = async () => {
    try {
      const response = await fetch(`${api}/logout`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
            token: localStorage.getItem('jwt')
        }),
      });
      const data = await response.json();
      localStorage.removeItem('jwt')
      localStorage.removeItem('lifespan')
      localStorage.removeItem('refreshToken')
      setUser(false);
      Navigate("/login");
      return data;
    } catch (err) {
      if (err) {
        console.log(err);
      }
    }
  };
  return { logout };
}
