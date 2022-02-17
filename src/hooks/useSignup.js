import { api } from '../api/api'

export default function useSignup() {
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
        console.log(data);
        return data.success;
      } catch (err) {
        if (err) {
          console.log(err);
        }
      }
    };
    return { signup };
  }