import { api } from '../api/api'
import { useNavigate } from "react-router";

export default function useSignup() {
    let Navigate = useNavigate();
    const signup = async (email, password) => {
      try {
        const response = await fetch(`${api}/register`, {
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
        Navigate("/login");
        return data.success;
      } catch (err) {
        if (err) {
          console.log(err);
        }
      }
    };
    return { signup };
  }