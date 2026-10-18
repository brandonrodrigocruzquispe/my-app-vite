function PanelUsuario() {
  const isLogged = true;
  const nuevosMensajes = ['Mensaje 1'];
  return (
    <div>
      <h1>Panel de Usuario</h1>

      {isLogged ? (
        //true,if
        <button>Cerrar sesión</button>
      ) : (
        // false,else
        <button>Iniciar sesión</button>
      )}

      
      {nuevosMensajes.length > 0 && (
        // true
        <p>Tienes {nuevosMensajes.length} nuevos mensajes</p>
      )}  

    </div>
  );
}

export default PanelUsuario;