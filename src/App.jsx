import Header from "./components/Header.jsx";
import Login from "./components/Login.jsx";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register.jsx";
import Home from "./components/Home.jsx";
import ViewColaborador from "./components/ViewColaborador.jsx";
import Footer from "./components/Footer.jsx";

// App

function App() {
  return (
    <div>
      <div>
        <Routes>
          <Route path="/" element={<Header />} />
        </Routes>
      </div>
      <div>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<Login />} />
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
