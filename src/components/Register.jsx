import "./Register.css";
import React from "react-dom";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { FormControl } from "@mui/material";
import { MenuItem } from "@mui/material";
import { InputLabel } from "@mui/material";
import { Select } from "@mui/material";
import { Formik } from "formik";

const Register = () => {
  return (
      <>
      <Formik 
      initialValues={{
        nombre:'',
        apellido:'',
        email:'',
        docIdentidad:'',
        contraseña:''
      }}
      validate={(valores) => {
        let errores = {};
        //Valiacion nombre
        if (!valores.name){
          errores.name = 'Por favor ingrese el nombre'
        } else if (!/^[0-9]/.test(valores.name)){
          errores.name= 'El nombre solo contiene letras'
        }
        //Validacion apellido
        if (!valores.apellido){
          errores.apellido = 'Por favor ingrese el apellido'
        } else if (!/^[0-9]/.test(valores.apellido)){
          errores.apellido= 'El apellido solo contiene letras'
        }
        //Validacion email
        if (!valores.email){
          errores.email = 'Por favor ingrese el email'
        } else if (!/^[0-9]/.test(valores.email)){
          errores.email= 'Digite correctamente el email'
        }
        // Validacion documento identidad
        if (!valores.docIdentidad){
          errores.docIdentidad = 'Por favor ingrese el documento'
        } else if (!/^[0-9]/.test(valores.docIdentidad)){
          errores.docIdentidad= 'El documento solo contiene numeros'
        }
        // Validacion Contraseña
        if (!valores.contraseña){
          errores.contraseña = 'Por favor ingrese la contraseña'
        } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/.test(valores.contraseña)){
          errores.contraseña= 'Digite la contraseña'
        }
        
        return errores;
      }}
      onSubmit={(valores, {resetForm}) => {
        resetForm();
        console.log('Formulario enviado') //Llamado a la API
      }}
      >
      {({values, errors, touched, handleSubmit, handleChange, handleBlur}) => 
        <form className="App-form">
        <h1 className="registerTitle">
          Registro perfil citas
        </h1>
        <div className="App-textField">
          <div className="register-col2">
            <TextField
              sx={{ m: 1, marginTop: 0 }}
              className="App-textField"
              label="Nombre"
              variant="outlined"
              type="name"
              name="name"
              placeholder="Nombre"         
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.name && errors.name && <div className='error'>{errors.name}</div>}
            <TextField
              sx={{ m: 1, marginTop: 0 }}
              className="App-textField"
              label="Email"
              type="email"
              name="email"
              variant="outlined"
              placeholder="Email"         
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.email && errors.email && <div className='error'>{errors.email}</div>}
            <TextField
              sx={{ m: 1, marginTop: 0 }}
              className="App-textField"
              label="Documento Identidad"
              name="docIdentidad"
              variant="outlined"
              type="text"
              placeholder="Documento Identidad"         
              value={values.docIdentidad}
              onChange={handleChange}
              onBlur={handleBlur}
            />      
            {touched.docIdentidad && errors.docIdentidad && <div className='error'>{errors.docIdentidad}</div>}
          </div>
          <div className="register-col1">
            <TextField
              sx={{ m: 1, marginTop: 0 }}
              className="App-textField"
              label="Apellido"
              type="text"
              variant="outlined"
              name="apellido"
              placeholder="Apellido"         
              value={values.apellido}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.apellido && errors.apellido && <div className='error'>{errors.apellido}</div>}
            <TextField
              sx={{ m: 1 }}
              className="App-textField"
              label="Contraseña"
              type="password"
              variant="outlined"
              name="contraseña"
              placeholder="Contraseña"         
              value={values.contraseña}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.contraseña && errors.contraseña && <div className='error'>{errors.contraseña}</div>}
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
        </div>
        <div className="App-row">
          <Button
            sx={{ marginLeft: 2, marginRight: 2 }}
            className="App-button"
            variant="contained"
            disableElevation
          >
            Registrar
          </Button>
        </div>
      </form>  
      }  
      </Formik>
    </>
  );
};

export default Register;
