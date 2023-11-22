function AgencyArea() {
  return (
    <div className="agency-area ptb-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="agency-img">
              <img src="assets/img/agency.jpg" alt="Image" />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="agency-text">
              <div className="section-title-two">
                <h2 className="t-justify">
                  COMPROMETIDOS CON LA CALIDAD DE NUESTROS SERVICIOS
                </h2>
                <p className="t-justify">
                  Nuestro equipo está conformado por personas dinámicas, de
                  invaluable talento humano, ultra especializadas en su labor;
                  con un alto compromiso en su profesión y entrega hacia
                  nuestros pacientes. Reflejando la vivencia de una cultura
                  organizacional orientada hacia el servicio.
                </p>

                <p className="t-justify">
                  Innovación y precisión. Pilares sólidos en la elección de la
                  tecnología que disponemos al servicio de nuestros pacientes.
                  Diez años de experiencia nos avalan, garantizando resultados
                  sólidos, respaldados por una seria formación profesional. Tu
                  elección se traduce en confianza y tranquilidad.
                </p>
              </div>

              {/* <div className="agency-btn">
                <a
                  href="https://www.youtube.com/watch?v=0gv7OC9L2s8"
                  className="popup-youtube"
                >
                  <i className="bx bx-play"></i>
                </a>
                <h3>Te invitamos a que veas nuestro video de introducción</h3>
                <p>
                  Confianza y comodidad para nuestros pacientes en cada paso de
                  su tratamiento odontológico.{" "}
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgencyArea;
