import React from "react";
import "./Login.css";
import FormularioLogin from "./FormularioLogin";

const Home = () => {
  return (
    <div className="App">
      <div>
        <h1 className="h1-title">ASIGNACION CITAS</h1>
        <div>
          <FormularioLogin />
        </div>
      </div>
    </div>
  );
};
export default Home;
