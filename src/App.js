import Header from "./components/Header.js";
import Login from "./components/Login.js";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register.js";
import Home from "./components/Home.js";
import ViewColaborador from "./components/ViewColaborador.js";

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
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/ViewColaborador" element={<ViewColaborador />} />
      </Routes>
    </div>
  );
}

export default App;
