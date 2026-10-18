const Funciones = () => {
    const estado = 'enviado';

    const renderEstado = () => {
        switch (estado) {
            case 'enviado':
                return <h1>Enviado</h1>;

            case 'entregado':
                return <h1>Entregado</h1>;

            default:
                return <h1>Desconocido</h1>;
        }
    };

    return (
        <div>
            {renderEstado()}
            <span>Estado: {1 + 5}</span>
        </div>
    );
};

export default Funciones;
