import moment from "moment";
import { useState } from "react";

function Archivos({ data }) {
  const descargarTodo = async () => {
    for (const item of data) {
      await downloadFile(item.url);
    }
  };
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

  const downloadFile = async (url) => {
    const extension = url.split('.').pop().toLowerCase();
    const isImageOrPdf = extension === 'jpg' || extension === 'jpeg' || extension === 'png' || extension === 'pdf';

    if (isImageOrPdf) {
      try {
        const response = await fetch(`https://valcor.app/upload/${url}`);
        if (!response.ok) {
          throw new Error(`Error al descargar el archivo: ${url}`);
        }
        const blob = await response.blob();
        const downloadUrl = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = downloadUrl;
        a.setAttribute("download", url.split('/').pop());
        a.style.display = "none";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(downloadUrl);
      } catch (error) {
        console.error("Error al descargar el archivo:", error);
      }
    } else {
      // Abrir otros tipos de archivos en una nueva pestaña
      window.open(`https://valcor.app/upload/${url}`, "_blank");
    }
  };

  const abrirVisor = (url, zoom) => {
    const iframeContainer = document.createElement('div');
    iframeContainer.style.position = 'fixed';
    iframeContainer.style.top = '0';
    iframeContainer.style.left = '0';
    iframeContainer.style.width = '100%';
    iframeContainer.style.height = '100%';
    iframeContainer.style.zIndex = '9999';
    iframeContainer.style.backgroundColor = '#fff';

    const iframe = document.createElement('iframe');
    iframe.src = `/visualizador?archivo=${url}&zoom=${zoom}`;
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';

    iframeContainer.appendChild(iframe);
    // Configurar el manejador de mensajes para el iframe
    const messageHandler = function(event) {
        if (event.data.type === 'cambiarImagen') {
            document.body.removeChild(iframeContainer);
            window.removeEventListener('message', messageHandler);
            abrirModal(url);
        }
        if (event.data && event.data.type === 'cerrarVisor') {
            document.body.removeChild(iframeContainer);
            window.removeEventListener('message', messageHandler);
        }
    };
    window.addEventListener('message', messageHandler);
    document.body.appendChild(iframeContainer);
  };

  const isSafariOnIOS = () => {
    const ua = navigator.userAgent;
    return /iP(hone|od|ad)/.test(ua) && /Safari/.test(ua) && !/Chrome/.test(ua);
  };

  const [modalImagen, setModalImagen] = useState(null);

  const abrirModal = (url) => {
    if (isImage(url)) {
      setModalImagen(url);
    }
  };

  const cerrarModal = () => {
    setModalImagen(null);
  };

  // Modal para visualizar imagen
  const modalVisualizador = (
    <div className={`modal fade ${modalImagen ? 'show d-block' : ''}`} tabIndex="-1" role="dialog" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="btn-close" onClick={cerrarModal}></button>
          </div>
          <div className="modal-body text-center p-0">
            <div className="position-relative">
              <button 
                type="button"
                className="btn btn-outline-secondary position-absolute top-50 start-0 translate-middle-y ms-2"
                onClick={() => {
                  const currentIndex = data.findIndex(item => item.url === modalImagen);
                  let index = currentIndex - 1;
                  while (index >= 0) {
                    if (isImage(data[index].url)) {
                      setModalImagen(data[index].url);
                      break;
                    }
                    index--;
                  }
                }}
              >
                <i className="fa fa-chevron-left"></i>
              </button>
              <img 
                src={`https://valcor.app/upload/${modalImagen}`}
                className="img-fluid w-100"
                style={{maxHeight: '70vh', objectFit: 'contain'}}
                alt="Vista previa"
              />
              <button 
                type="button"
                className="btn btn-outline-secondary position-absolute top-50 end-0 translate-middle-y me-2"
                onClick={() => {
                  const currentIndex = data.findIndex(item => item.url === modalImagen);
                  let index = currentIndex + 1;
                  while (index < data.length) {
                    if (isImage(data[index].url)) {
                      setModalImagen(data[index].url);
                      break;
                    }
                    index++;
                  }
                }}
              >
                <i className="fa fa-chevron-right"></i>
              </button>
            </div>
          </div>
          <div className="modal-footer">
            <button 
              type="button" 
              className="btn btn-primary"
              onClick={() => {
                let zoom = data.find(item => item.url === modalImagen)?.zoom;
                if(zoom === undefined || zoom === null){
                  zoom = 0;
                }
                abrirVisor(modalImagen, zoom);
                cerrarModal();
              }}
            >
              <i className="fa fa-eye"></i> Abrir en Visor
            </button>
            <button type="button" className="btn btn-secondary" onClick={cerrarModal}>
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div class="album py-5 bg-body-tertiary">
      {!isSafariOnIOS() && (
        <div className="text-center mb-3">
          <button class="btn btn-primary" onClick={descargarTodo}>
            <i class="fa fa-download"></i> Descargar todo
          </button>
        </div>
      )}
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
                  onClick={() => {
                    if (item.url.toLowerCase().endsWith('.pdf')) {
                      window.open(`https://valcor.app/upload/${item.url}`, "_blank");
                    }
                    if(isImage(item.url)){
                      abrirModal(item.url);
                    }
                  }}
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
      {modalImagen && modalVisualizador}
    </div>
  );
}

export default Archivos;
