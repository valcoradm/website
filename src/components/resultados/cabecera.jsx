import moment from "moment";

function Cabecera({data}) {
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
    <section class="py-5 text-center container">
          <img src="assets/img/logo.png" alt="logo" />
      <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
          <h1 class="fw-light">
            {data.nombrePaciente}
          </h1>
          <small>
            Edad: {ObtenerEdadPaciente(data.fechaNacimientoPaciente)}
          </small>
          <p class="lead text-body-secondary">
            A continuación se muestran los resultados de la orden de atención
            realizada el {moment(data.fechaAtencion).format("DD/MM/YYYY")}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Cabecera;
