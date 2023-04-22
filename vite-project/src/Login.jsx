import React, { useRef } from 'react';
import './Login.css';

function Login() {
  const formRef = useRef(null);

  const handleFormClick = () => {
    const imageColumn = formRef.current.closest('.image-column');
    imageColumn.classList.add('active');
  };
  

  return (
    <div className="container">
      <div className="image-column">
      </div>
      <div className="form-column" ref={formRef}>
        <form onClick={handleFormClick}>
          <label htmlFor="usuario">Usuario:</label>
          <input type="text" id="usuario" name="usuario" required />

          <label htmlFor="contraseña">Contraseña:</label>
          <input type="password" id="contraseña" name="contraseña" required />

          <input type="submit" value="Iniciar sesión" />
        </form>
      </div>
    </div>
  );
}

export default Login;
