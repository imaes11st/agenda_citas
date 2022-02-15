import React from "react-dom";
import "./Home.css";
import { Card } from "@mui/material";
import { Button } from "@mui/material";

const Home = () => {
  return (
    <div className="ensayo">
      <Card>
        <h1>Consultas</h1>
        <div>
          <p>Aqui apareceran las citas pendientes</p>
          <p>No hay citas pendientes</p>
        </div>
        <Button>Pedir cita</Button>
      </Card>
    </div>
  );
};

export default Home;
