import React from 'react';
import { Formik } from 'formik';
import { Button, TextField } from '@mui/material';
import "./FormularioLogin.css";
import { Link } from '@material-ui/core';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FormularioLogin = () => {

	return (
		<>
    <Formik 
    initialValues={{
      docIdentidad:'',
      contraseña:''
    }}
    validate={(valores) => {
      let errores = {};
      // Validacion documento identidas
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
    <form onSubmit={handleSubmit}>
    <div className='containerForm'> 
    <div className='formLogin-col'>
      <TextField 
        className="App-textField"
        id="outlined-basic"         
        type="text"
        name="docIdentidad"
        placeholder="Documento Identidad" 
        label="Documento Identidad" 
        variant="outlined"         
        value={values.docIdentidad}
        onChange={handleChange}
        onBlur={handleBlur}/>
        {touched.docIdentidad && errors.docIdentidad && <div className='error'>{errors.docIdentidad}</div>}
    </div>
    <div className="formLogin-col">
    <TextField
        className="App-textField"
        id="outlined-basic1"         
        type="password"
        name="contraseña"
        placeholder="Contraseña" 
        label="Contraseña" 
        variant="outlined"         
        value={values.contraseña}
        onChange={handleChange}
        onBlur={handleBlur}
        />
      {touched.contraseña && errors.contraseña && <div className='error'>{errors.contraseña}</div>}
    </div>
    </div>
    <div className='btnFormLogin'>
    <Button type="submit" variant="contained">Ingresar</Button>
    </div>
    <div className="linkOlvideContraseña">
    <Link href="">
      <strong>Olvide la contraseña</strong>
      </Link>
    </div>
    <div>
    <ExpandMoreIcon color="primary"/>
  </div>
  </form>
    }
			</Formik>
		</>
	);
}
 
export default FormularioLogin;