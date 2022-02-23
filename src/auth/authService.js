const signup = async (email, password) => {
  try {
    const response = await fetch(`http://n2j-api.herokuapp.com/register`, {
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
    return data.success;
  } catch (err) {
    if (err) {
      console.log(err);
    }
  }
};

const login = async (email, password) => {
  try {
    const response = await fetch(`http://n2j-api.herokuapp.com/login`, {
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
    return data;
  } catch (err) {
    if (err) {
      console.log(err);
    }
  }
};

const logout = async () => {
  try {
    const response = await fetch(`http://n2j-api.herokuapp.com/logout`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: localStorage.getItem("jwt"),
      }),
    });
    const data = await response.json();
    localStorage.removeItem("jwt");
    localStorage.removeItem("lifespan");
    localStorage.removeItem("refreshToken");
    return data;
  } catch (err) {
    if (err) {
      console.log(err);
    }
  }
};

const exports = {
  signup,
  login,
  logout,
};

export default exports;
