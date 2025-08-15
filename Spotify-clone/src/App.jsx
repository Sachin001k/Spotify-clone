import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Callback from "./Callback";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/callback" element={<Callback />} />
      </Routes>
    </Router>
  );
}

export default App;
