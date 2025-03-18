import moment from "moment";

function Cabecera({ data }) {
  const obtenerUnidadMinima = (diferencia) => {
    const unidades = [
      { valor: diferencia.asYears(), unidad: "año" },
      { valor: diferencia.asMonths(), unidad: "mes" },
      { valor: diferencia.asWeeks(), unidad: "semana" },
      { valor: diferencia.asDays(), unidad: "día" },
      { valor: diferencia.asHours(), unidad: "hora" },
      { valor: diferencia.asMinutes(), unidad: "minuto" },
      { valor: diferencia.asSeconds(), unidad: "segundo" },
    ];

    for (const { valor, unidad } of unidades) {
      if (valor < 1) continue; // Si el valor es menor que 1, pasa a la siguiente unidad
      const cantidad = Math.floor(valor);
      const plural = unidad === "mes" ? "es" : "s";
      return `${cantidad} ${unidad}${cantidad > 1 ? plural : ""}`;
    }

    return "justo ahora"; // En caso de que la diferencia sea prácticamente 0
  };

  const ObtenerEdadPaciente = (fechaCreacion) => {
    const ms = (fechaCreacion + "").replace("/Date(", "").replace(")/", "");
    const _fechaCreacion = new Date(Number(ms));
    const fechaActual = moment();
    const diferencia = moment.duration(fechaActual.diff(_fechaCreacion));
    return obtenerUnidadMinima(diferencia);
  };

  return (
    <div className="text-center mb-6">
      <h1 className="text-3xl font-bold text-gray-900"><img src="assets/img/logo.png" alt="VALCOR" /></h1>
      <h2 className="text-xl font-semibold text-gray-700">
        {data.nombrePaciente}
      </h2>
      <p className="text-gray-500">
        Edad: {ObtenerEdadPaciente(data.fechaNacimientoPaciente)}
      </p>
      <p className="text-gray-600">
        Resultados de la orden de atención -{" "}
        {moment(data.fechaAtencion).format("DD/MM/YYYY")}
      </p>
    </div>
  );
}

export default Cabecera;
