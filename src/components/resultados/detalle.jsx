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
    const idObservaciones = [3, 1, 2, 4];
    console.log(idObservaciones);
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
    <>
      <div className="w-full bg-gray-100 p-4 rounded-lg mb-6 text-center">
        <h3 className="text-lg font-semibold">Prestaciones</h3>
        {data.prestaciones.map((prestacion) => (
          <p className="text-gray-700">
            {prestacion.cantidad} {prestacion.nombre}
          </p>
        ))}
      </div>
      <div className="w-full bg-gray-100 p-4 rounded-lg mb-6 text-center">
        <h3 className="text-lg font-semibold">Observaciones</h3>
        {obs.map((item) => (
          <p className="text-gray-700">
            {item.titulo}: {item.texto}
          </p>
        ))}
      </div>
    </>
  );
}

export default Detalle;
