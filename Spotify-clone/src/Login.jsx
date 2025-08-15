// src/Login.jsx
const AUTH_URL = 
  `https://accounts.spotify.com/authorize?client_id=${import.meta.env.VITE_SPOTIFY_CLIENT_ID}&response_type=token&redirect_uri=${encodeURIComponent(import.meta.env.VITE_SPOTIFY_REDIRECT_URI)}&scope=user-read-private%20user-read-email%20user-read-playback-state%20user-modify-playback-state`;

export default function Login() {
  return (
    <div style={{ display: "flex", height: "100vh", justifyContent: "center", alignItems: "center" }}>
      <a href={AUTH_URL}>
        <button style={{ padding: "12px 24px", fontSize: "18px", backgroundColor: "#1DB954", color: "white", border: "none", borderRadius: "25px", cursor: "pointer" }}>
          Login into Spotify Clone
        </button>
      </a>
    </div>
  );
}
