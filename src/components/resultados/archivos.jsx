import moment from "moment";

function Archivos({ data }) {
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

  const obtenerAntiguedadArchivo = (fechaCreacion) => {
    const ms = (fechaCreacion + "").replace("/Date(", "").replace(")/", "");
    const _fechaCreacion = new Date(Number(ms));
    const fechaActual = moment();
    const diferencia = moment.duration(fechaActual.diff(_fechaCreacion));
    return obtenerUnidadMinima(diferencia);
  };

  const isImage = (url) => {
    const extension = url.split(".").pop().toLowerCase();
    return extension === "jpg" || extension === "jpeg" || extension === "png";
  };

  const backgroundImage = (url) => {
    const extension = url.split(".").pop().toLowerCase();
    if (extension === "pdf") {
      return "assets/img/pdf-icon.png";
    }
    if (extension === "stl") {
      return "assets/img/stl.png";
    }
    if (extension === "bsb") {
      return "assets/img/bsb.png";
    }
    if (extension === "jpg" || extension === "jpeg" || extension === "png") {
      return `https://valcor.app/upload/${url}`;
    }
    return "assets/img/tooth.png";
  };

  const downloadFile = (url) => {
    window.open(`https://valcor.app/upload/${url}`, "_blank");
  };

  const abrirVisor = (url, zoom) => {
    window.open(`/visualizador?archivo=${url}&zoom=${zoom}`, "_blank");
  };

  return (
    <div class="album py-5 bg-body-tertiary">
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {data.map((item) => (
            <div class="col">
              <div class="card shadow-sm">
                <img
                  src={backgroundImage(item.url)}
                  class="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  alt={item.nombre}
                ></img>
                <div class="card-body">
                  <div class="card-text">{item.nombre}</div>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        onClick={() => downloadFile(item.url)}
                      >
                        <i class="fa fa-download"></i> Descargar
                      </button>
                      {isImage(item.url) && (
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                          onClick={() => abrirVisor(item.url, item.zoom)}
                        >
                          <i class="fa fa-eye"></i> Visor
                        </button>
                      )}
                    </div>
                    <small class="text-body-secondary">
                      {obtenerAntiguedadArchivo(item.fechaCreacion)}
                    </small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Archivos;
