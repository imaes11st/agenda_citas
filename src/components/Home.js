import React from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { FormGroup } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { Checkbox } from "@mui/material";
import { useState, useRef } from "react";
import { Alert, AlertTitle } from "@mui/material";
import ReCAPTCHA from "react-google-recaptcha";
import "./Home.css";

const Home = () => {
  const [captchaValido, cambiarCaptchaValido] = useState(null);
  const [usuarioValido, cambiarUsuarioValido] = useState(false);

  const captcha = useRef(null);

  const onChange = () => {
    if (captcha.current.getValue()) {
      console.log("El usuario no es un robot");
      cambiarCaptchaValido(true);
    }
  };

  const submit = (e) => {
    e.preventDefault();

    // Validamos los inputs del formulario
    // Si son correctos ya podemos enviar el fomulario, actualizar la Interfaz, etc.

    if (captcha.current.getValue()) {
      console.log("El usuario no es un robot");
      cambiarUsuarioValido(true);
      cambiarCaptchaValido(true);
    } else {
      console.log("Por favor acepta el captcha");
      cambiarUsuarioValido(false);
      cambiarCaptchaValido(false);
    }
  };

  return (
    <div className="App">
      {!usuarioValido && (
        <div>
          <h1>Asignacion citas</h1>
          <form className="App-form" action="" onSubmit={submit}>
            <div className="App-textField">
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox {...Checkbox} />}
                  label="Recordar"
                />
              </FormGroup>
              <TextField
                sx={{ m: 1 }}
                className="App-textField"
                label="Contraseña"
                type="password"
                variant="outlined"
              />
              <TextField
                sx={{ m: 1, marginLeft: 15 }}
                className="App-textField"
                label="Documento Identidad"
                variant="outlined"
              />
            </div>
            <div className="App-recaptcha">
              <ReCAPTCHA
                ref={captcha}
                sitekey="6LfD5lkeAAAAABZ4Y6ffNcPvebGmiyxAcE4Wc-vw"
                onChange={onChange}
              />
            </div>
            {captchaValido === false && (
              <div className="error-captcha">
                <Alert severity="error">
                  <AlertTitle>Error</AlertTitle>
                  Esta es una alerta de error reCaptcha—{"#01RC"}
                </Alert>
              </div>
            )}
            <div className="App-row">
              <Button
                sx={{ marginLeft: 2, marginRight: 2 }}
                ClassName="App-button"
                variant="text"
              >
                Registrar
              </Button>
              <Button
                sx={{ marginLeft: 2, marginRight: 2 }}
                type="submit"
                ClassName="App-button"
                variant="contained"
                disableElevation
              >
                Ingresar
              </Button>
            </div>
          </form>
          <div className="olvidoContraseña">
            <li>
              <a href="./register">¿Olvidaste tu contraseña?</a>
            </li>
          </div>
        </div>
      )}
      {usuarioValido && (
        <div>
          <h1>Iniciaste sesion</h1>i
        </div>
      )}
    </div>
  );
};

export default Home;
