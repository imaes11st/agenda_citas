import "./register.css";
import React from "react-dom";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";

const Register = () => {
  return (
    <form className="App-form">
      <h1>
        Registro citas
        <hr></hr>
      </h1>
      <div className="App-textField">
        <TextField
          sx={{ m: 1, marginTop: 0 }}
          className="App-textField"
          label="Nombre"
          variant="outlined"
        />
        <TextField
          sx={{ m: 1, marginTop: 0 }}
          className="App-textField"
          label="Apellidos"
          variant="outlined"
        />
        <TextField
          sx={{ m: 1, marginTop: 0 }}
          className="App-textField"
          label="Documento Identidad"
          variant="outlined"
        />
        <TextField
          sx={{ m: 1, marginTop: 0 }}
          className="App-textField"
          label="Email"
          type={"email"}
          variant="outlined"
        />
        <TextField
          sx={{ m: 1 }}
          className="App-textField"
          label="Contraseña"
          type={"password"}
          variant="outlined"
        />
      </div>
      <div className="App-row">
        <Button
          sx={{ marginLeft: 2, marginRight: 2 }}
          ClassName="App-button"
          variant="contained"
          disableElevation
        >
          Registrar
        </Button>
      </div>
    </form>
  );
};

export default Register;
