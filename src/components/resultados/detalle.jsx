import { useEffect, useState } from "react";

function Detalle({ data }) {
  const [obs, setObs] = useState([]);

  useEffect(() => {
    const observaciones = {
      3: "Recepcionista",
      1: "Técnico",
      2: "Informante",
      4: "Final",
    };
    const idObservaciones = [3,1,2,4];
    console.log(idObservaciones)
    const obsByTipo = data.observaciones.reduce((acc, item) => {
      acc[item.id] = item;
      return acc;
    }, {});
    const _obs = idObservaciones
      .map((id) => {
        if (obsByTipo[id]) {
          return {
            titulo: observaciones[id],
            texto: obsByTipo[id].texto,
          };
        }
        return null;
      })
      .filter((item) => item !== null && item.texto.trim() !== "");
    setObs(_obs);
  }, [data]);
  return (
    <div>
      <h1>Prestaciones</h1>
      <ul>
        {data.prestaciones.map((prestacion) => (
          <li>
            <span>{prestacion.cantidad} </span>
            <span>{prestacion.nombre}</span>
          </li>
        ))}
      </ul>
      {obs && obs.length > 0 && (
        <>
          <h1>Observaciones</h1>
          <ul>
            {obs.map((item) => (
              <li>
                <strong>{item.titulo}</strong>: {item.texto}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default Detalle;
