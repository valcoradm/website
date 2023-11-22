import WhatsappBtn from "./WhatsappBtn";

function OfferArea() {
  return (
    <div className="offers-area ptb-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="offer-text">
              <div className="section-title-two">
                <h2>TECNOLOGÍA PREMIUM</h2>
                <p className="t-justify">
                  Orgullosos en servicio de Vanguardia: valoramos la calidad y
                  tecnología de avanzada, respaldados por equipos importados
                  desde potencias mundiales como Finlandia, nuestras sucursales
                  están equipadas con tecnología de última generación,
                  permitiendo una visualización y diagnóstico preciso y
                  detallado. Garantizamos estudios y planificación de la más
                  alta calidad. Ofrecemos la mejor calidad y tecnología Premium
                  en Antofagasta y Calama.
                </p>

                <p className="t-justify">
                  Nuestro compromiso con la excelencia se refleja en cada paso
                  que damos, desde la adquisición de imágenes digitales de alta
                  resolución hasta la precisa planificación de procedimientos.
                  Tu salud buco-dental es siempre máxima prioridad y, nuestra
                  inversión en tecnología de punta es un testimonio de ello.
                </p>
              </div>
              <ul style={{ display: "inline-block" }}>
                <li>
                  <i class="bx bx-check-circle"></i>
                  OP 300 Instrumentarium
                </li>
                <li>
                  <i class="bx bx-check-circle"></i>
                  Focus Instrumentarium
                </li>
                <li>
                  <i class="bx bx-check-circle"></i>
                  OP 3D PRO Kavo
                </li>
                <li>
                  <i class="bx bx-check-circle"></i>
                  OP 3D PRO Dexis
                </li>
                <li>
                  <i class="bx bx-check-circle"></i>
                  Express Instrumentarium
                </li>
              </ul>
              <div className="offers-btn">
                <WhatsappBtn isMain={true} />
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="offer-img">
              <img src="assets/img/offer.jpg" alt="Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OfferArea;
