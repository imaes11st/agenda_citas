import Header from "./components/Header.js";
import Login from "./components/Login.js";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register.js";
import Home from "./components/Home.js";
import ViewColaborador from "./components/ViewColaborador.js";
import Footer from "./components/Footer.js";

// App

function App() {
  return (
    <div>
      <div>
        <Routes>
          <Route path="/Header" element={<Header />} />
        </Routes>
      </div>
      <div>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/ViewColaborador" element={<ViewColaborador />} />
        </Routes>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Footer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
