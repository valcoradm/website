import { useEffect } from "react";

function ClientComments() {
  useEffect(() => {
    window.$(".clients-slider").owlCarousel({
      items: 1,
      loop: true,
      margin: 30,
      nav: false,
      autoplay: true,
      autoplayHoverPause: true,
      dots: true,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 2,
        },
        1000: {
          items: 2,
        },
      },
    });
  }, []);
  return (
    <div className="clients-area pb-100">
      <div className="container">
        <div className="section-title-one">
          <h2>COMENTARIOS DE NUESTROS CLIENTES</h2>
        </div>

        <div class="clients-slider owl-carousel owl-theme">
          <div class="clients-card">
            <div class="client-img">
              <a
                href="https://www.youtube.com/watch?v=L5AGgzzUNP4"
                target="_blank"
              >
                <img src="assets//img/testimonials/client-1.jpg" alt="Image" />
                <i class="bx bxl-youtube"></i>
              </a>
            </div>

            <p>
              Valcor nos ayuda mucho con su tecnología y su gran equipo de
              profesionales a la hora de adquirir imágenes para planificar en
              conjunto nuestras guías quirúrgicas para la implantología dental.
            </p>

            <div class="clients-name">
              <h3>Dr. Michael Arancibia</h3>
              <span>CAIMA Implantes Dentales</span>
              <div class="rating">
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
              </div>
            </div>
          </div>

          <div class="clients-card">
            <div class="client-img">
              <a
                href="https://www.youtube.com/shorts/hXTpeaww9_Y"
                target="_blank"
              >
                <img src="assets/img/testimonials/client-2.jpg" alt="Image" />
                <i class="bx bxl-youtube"></i>
              </a>
            </div>

            <p>
              Valcor me entrega las herramientas digitales necesarias que
              necesitamos hoy en día para poder hacer un correcto diagnóstico y
              un plan de tratamiento para los pacientes.
            </p>
            <div class="clients-name">
              <h3>Dra. Andrea Viacava</h3>
              <span>AVO Ortodoncia</span>
              <div class="rating">
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
              </div>
            </div>
          </div>

          <div class="clients-card">
            <div class="client-img">
              <a
                href="https://www.youtube.com/shorts/NgGZM4-Ec-I"
                target="_blank"
              >
                <img src="assets/img/testimonials/client-3.jpg" alt="Image" />
                <i class="bx bxl-youtube"></i>
              </a>
            </div>

            <p>
              Cuentan con equipos de última generación con tecnología de punta,
              además tenemos acceso a una plataforma virtual en la que podemos
              emitir órdenes, llevar un registro y ver las radiografías en un
              mismo lugar.
            </p>
            <div class="clients-name">
              <h3>Dra. Lucia Flores</h3>
              <span>Clínica Mykonos</span>
              <div class="rating">
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
              </div>
            </div>
          </div>

          <div class="clients-card">
            <div class="client-img">
              <a
                href="https://www.youtube.com/watch?v=Rj_-GwSsOto"
                target="_blank"
              >
                <img src="assets/img/testimonials/client-5.jpg" alt="Image" />
                <i class="bx bxl-youtube"></i>
              </a>
            </div>

            <p>
              Me permiten trabajar de manera más dinámica la planificación de
              mis tratamientos de implantes y la fabricación de guías
              quirúrgicas con su tecnología de impresoras 3D. Además de ayudarme
              a que mis tratamientos sean más precisos.
            </p>
            <div class="clients-name">
              <h3>Dr. Jaime Zambrano</h3>
              <span>Bencodent</span>
              <div class="rating">
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
              </div>
            </div>
          </div>

          <div class="clients-card">
            <div class="client-img">
              <a
                href="https://www.youtube.com/shorts/uv5DTMvj86w"
                target="_blank"
              >
                <img src="assets/img/testimonials/client-4.jpg" alt="Image" />
                <i class="bx bxl-youtube"></i>
              </a>
            </div>

            <p>
              Aseguran una excelente atención a los pacientes y un buen servicio
              de informe radiológico tanto como en los exámenes 2D y 3D.
              Entregando de esta manera un buen complemento al diagnóstico
              clínico que hacemos a los pacientes.
            </p>
            <div class="clients-name">
              <h3>Dr. Luis Burgos</h3>
              <span>Ortodoncia Taltal</span>
              <div class="rating">
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientComments;
