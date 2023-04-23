import React, { useRef } from 'react';
import './Login.css';

function Login() {
  const formRef = useRef(null);

  const handleFormClick = () => {
    // Activar la animación de entrada de la columna de imagen
    
    formRef.current.classList.add('form-column-active');


  };
  

  return (
    <div className="container">
      <div className="image-column">
      </div>
      <div className="form-column" ref={formRef}>
        <form onClick={handleFormClick}>
          <label htmlFor="usuario">Usuario:</label>
          <input type="text" id="usuario" name="usuario" placeholder='Ingrese su nombre de usuario' required />

          <label htmlFor="contraseña">Contraseña:</label>
          <input type="password" id="contraseña" name="contraseña" placeholder='Ingrese su contraseña' required />

          <input type="submit" value="Iniciar sesión" />
        </form>
      </div>
    </div>
  );
}

export default Login;
