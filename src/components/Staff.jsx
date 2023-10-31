import { useEffect } from "react";

function Staff({ info }) {
  const $ = window.$;
  useEffect(() => {
    $(".doctors-slider").owlCarousel({
      items: 1,
      loop: true,
      margin: 20,
      nav: false,
      autoplay: true,
      autoplayHoverPause: true,
      dots: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });
    return () => {
      $(".doctors-slider").owlCarousel("destroy");
    };
  }, []);
  return (
    <div className="doctors-area ptb-100">
      <div className="container">
        <div className="section-title-one">
          <h2>Conoce nuestro equipo de especialistas</h2>
        </div>

        <div className="doctors-slider owl-carousel owl-theme">
          {info.map((item, index) => (
            <div className="doctors-card" key={item.name}>
              <a href="doctors-details">
                <img src={item.image} alt="Image" />
              </a>
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="caption">
                    <div className="caption-text">
                      <h3>
                        <a href="doctors-details">{item.name}</a>
                      </h3>
                      <p>{item.speciality}</p>
                      <a href="#">{item.university}</a>
                      <ul className="see-more-button">
                        <li>
                          <a href="#" target="_blank">
                            Ver más
                          </a>
                        </li>
                      </ul>
                    </div>
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

export default Staff;
