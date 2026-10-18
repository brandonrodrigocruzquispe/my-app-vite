import React from "react";

const Funciones = () => {
  const frutas = ["manzana", "pera", "sandia"];

  return (
    <div>
      {frutas.map((fruta, index) => {
        return <li key={fruta.id}>Fruta: {fruta}</li>;
      })}
    </div>
  );
};

export default Funciones;