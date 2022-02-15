import "./Register.css";
import React from "react-dom";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { FormControl } from "@mui/material";
import { MenuItem } from "@mui/material";
import { InputLabel } from "@mui/material";
import { Select } from "@mui/material";

const Register = () => {
  return (
    <form className="App-form">
      <h1>
        Registro perfil citas
        <hr></hr>
      </h1>
      <div className="App-textField">
        <div className="register-col1">
          <TextField
            sx={{ m: 1, marginTop: 0 }}
            className="App-textField"
            label="Apellidos"
            variant="outlined"
          />
          <TextField
            sx={{ m: 1 }}
            className="App-textField"
            label="Contraseña"
            type={"password"}
            variant="outlined"
          />
          <FormControl sx={{ m: 1, marginTop: 0 }} fullWidth>
            <InputLabel id="demo-simple-select-label">EPS</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="EPS"
            >
              <MenuItem value={10}>Virrey Solis</MenuItem>
              <MenuItem value={20}>Nueva EPS</MenuItem>
              <MenuItem value={30}>Sura</MenuItem>
              <MenuItem value={30}>Otro</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="register-col2">
          <TextField
            sx={{ m: 1, marginTop: 0 }}
            className="App-textField"
            label="Nombre"
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
            sx={{ m: 1, marginTop: 0 }}
            className="App-textField"
            label="Documento Identidad"
            variant="outlined"
          />
        </div>
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
