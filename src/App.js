import Header from "./components/Header.js";
import SearchPage from "./components/SearchPage.js";
import Home from "./components/Home.js";
import { Route, Routes } from "react-router-dom";

// App

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/home" element={<Home />} />
        <Route path="/searchPage" element={<SearchPage />} />
      </Routes>
    </div>
  );
}

export default App;
