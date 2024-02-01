import { useEffect } from "react";

function ClientComments({ comments = [] }) {
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
          {comments.map(({ name, title, stars, video, description, image }) => (
            <div class="clients-card">
              <div class="client-img">
                <a href={video} target="_blank">
                  <img src={image} alt="Image" />
                  <i class="bx bxl-youtube"></i>
                </a>
              </div>

              <p>{description}</p>

              <div class="clients-name">
                <h3>{name}</h3>
                <span>{title}</span>
                <div class="rating">
                  {Array.from({ length: stars }, (_, i) => (
                    <i class="bx bxs-star"></i>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ClientComments;
