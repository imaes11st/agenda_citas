import Header from "./components/Header.js";
import Login from "./components/Login.js";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register.js";
import Home from "./components/Home.js";

// App

function App() {
  return (
    <div>
      <div>
        <Routes>
          <Route path="/" element={<Header />} />
        </Routes>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
