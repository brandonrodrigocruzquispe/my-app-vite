function Render2() {
    const isLogging = false;
    const usuario = 'usuario';

    if (isLogging) {
        return <div>Cargando perfil...</div>;
    }

    if (!usuario) {
        return <div>No existe usuario</div>;
    }

    return (
        <div>
            <h1>Render 2</h1>
        </div>
    );
}

export default Render2;