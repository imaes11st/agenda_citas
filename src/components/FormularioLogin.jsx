import React from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { FormGroup } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { Checkbox } from "@mui/material";
import { Alert, AlertTitle } from "@mui/material";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useState, useRef } from "react";

const FormularioLogin = () => {
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
    <div>
      {!usuarioValido && (
        <form className="App-form1" action="" onSubmit={submit}>
          <div className="App-textField1">
            <FormGroup>
              <FormControlLabel
                control={<Checkbox {...Checkbox} />}
                label="Recordar"
              />
            </FormGroup>
            <TextField
              sx={{ m: 1 }}
              className="App-textField"
              id="contraseña"
              name="contraseña"
              label="Contraseña"
              type="password"
              variant="outlined"
            />
            <TextField
              sx={{ m: 1, marginLeft: 15 }}
              className="App-textField"
              id="cedula"
              name="cedula"
              label="Cedula"
              type="int"
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
                <AlertTitle>
                  <strong>ERROR</strong>
                </AlertTitle>
                <strong>Realizar RECAPCHA {"#C001"}</strong>
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
              sx={{ marginLeft: 1, marginRight: 1 }}
              type="submit"
              className="App-button"
              variant="contained"
              disableElevation
            >
              Ingresar
            </Button>
          </div>
          <div className="olvidoContraseña">
            <Link to="./Register.js">
              <Button
                sx={{ marginLeft: 1, marginRight: 1 }}
                className="App-button"
                variant="text"
              >
                Olvido Clave
              </Button>
            </Link>
          </div>
        </form>
      )}
      <div className="flechaLogin">
        <ArrowDownwardIcon color="primary" />
      </div>
    </div>
  );
};

export default FormularioLogin;
