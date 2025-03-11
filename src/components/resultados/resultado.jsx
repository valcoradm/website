import { useEffect, useState } from "react";
import ValcorApi from "../../api/ValcorApi";
import Loader from "./Loader";
import Archivos from "./archivos";
import Detalle from "./detalle.jsx";
import Cabecera from "./cabecera.jsx";

function Resultado() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [canSendMail, setCanSendMail] = useState(false);
  async function loadData() {
    setLoading(true);
    const params = new URLSearchParams(window.location.search);
    const a = params.get("a");
    const b = params.get("b");
    const c = params.get("c");
    const res = await ValcorApi.getJwt({ a, b, c });
    if (res.data.enabled) {
      const data = await ValcorApi.getOrdenAtencion(res.data.token);
      setData(data);
    } else {
      setCanSendMail(true);
    }
    setLoading(false);
  }
  useEffect(() => {
    setCanSendMail(false);
    setData(null);
    loadData();
  }, []);
  return (
    <main>
      {loading && <Loader />}
      {!loading && (
        <>
          {data && <Cabecera data={data} />}
          <div className="row album py-5 bg-body-tertiary">
            <div className="col-md-9 col-sm-12">
              {data && <Archivos data={data.archivos} />}
            </div>
            <div className="col-md-3 col-sm-12">
              {data && <Detalle data={data} />}
            </div>
          </div>
        </>
      )}
      {canSendMail && (
        <div>
          <h1>No se pudo validar el link</h1>
          <p>
            Por favor, ingrese su correo electrónico para recibir el link de
            descarga de los resultados.
          </p>
        </div>
      )}
    </main>
  );
}

export default Resultado;
