// src/Callback.jsx
import { useEffect, useState } from "react";

function Callback() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    // Get the token from URL hash
    const hash = window.location.hash
      .substring(1)
      .split("&")
      .reduce((acc, item) => {
        const [key, value] = item.split("=");
        acc[key] = decodeURIComponent(value);
        return acc;
      }, {});

    window.location.hash = ""; // clean the URL
    if (hash.access_token) {
      setToken(hash.access_token);
      console.log("Spotify Token:", hash.access_token);
    }
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {token ? (
        <div>
          <h2>Login Successful!</h2>
          <p>Access Token: {token}</p>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}

export default Callback;
