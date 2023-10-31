import { useEffect } from "react";

function ClientComments() {
    useEffect(() => {
        window.$('.clients-slider').owlCarousel({
            items: 1,
            loop: true,
            margin: 30,
            nav: false,
            autoplay: true,
            autoplayHoverPause: true,
            dots: true,
            responsive:{
                0:{
                    items:1,
                },
                768:{
                    items:2,
                },
                1000:{
                    items:2,
                }
            }
        })
    }
    , []);
  return (
    <div className="clients-area pb-100">
      <div className="container">
        <div className="section-title-one">
          <h2>COMENTARIOS DE NUESTROS CLIENTES</h2>
        </div>

        <div className="clients-slider owl-carousel owl-theme">
          <div className="clients-card">
            <div className="client-img">
              <a href="http://www.google.com" target="_blank">
                <img src="assets/img/doctors/doctor-10.jpg" alt="Image" />
                <i className="bx bxl-youtube"></i>
              </a>
            </div>

            <p>
              This has the most hi tech and most effective & the doctor has
              appear here is highly profiled. It will make a proper image
            </p>

            <div className="clients-name">
              <h3>Glenn K Riley</h3>
              <span>CEO, Doctors union</span>
              <div className="rating">
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
              </div>
            </div>
          </div>

          <div className="clients-card">
            <div className="client-img">
              <a href="http://www.google.com" target="_blank">
                <img src="assets/img/doctors/doctor-11.jpg" alt="Image" />
                <i className="bx bxl-youtube"></i>
              </a>
            </div>

            <p>
              I have started work with this agency and it give us the special
              support on the global market. It has a brilliant team for treat
            </p>
            <div className="clients-name">
              <h3>Paul J Santiago</h3>
              <span>Advisor, visual corporation.</span>
              <div className="rating">
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
              </div>
            </div>
          </div>

          <div className="clients-card">
            <div className="client-img">
              <a href="http://www.google.com" target="_blank">
                <img src="assets/img/doctors/doctor-12.jpg" alt="Image" />
                <i className="bx bxl-youtube"></i>
              </a>
            </div>

            <p>
              This has the most hi tech and most effective & the doctor has
              appear here is highly profiled. It will make a proper image
            </p>
            <div className="clients-name">
              <h3>Glenn K Riley</h3>
              <span>CEO, Doctors union</span>
              <div className="rating">
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientComments;
