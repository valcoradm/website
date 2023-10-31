import { useEffect } from "react";

function ReasonSelectUs({ info }) {
  useEffect(() => {
    window.$(".treatment-slider").owlCarousel({
      items: 1,
      loop: true,
      margin: 20,
      nav: false,
      autoplay: false,
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
  }, []);
  return (
    <div className="treatment-area ptb-100">
      <div className="container">
        <div className="section-title-one">
          <h2>Razones para elegir nuestro servicio</h2>
        </div>

        <div className="treatment-slider owl-carousel owl-theme">
          {info.map((item, index) => (
            <div className="treatment-card bg-color-2" key={item.title}>
              <div className="shape">
                <img
                  style={{ visibility: "hidden" }}
                  src="assets/img/shapes/shape-13.png"
                  alt="Shape"
                />
                <i className={item.iconClass}></i>
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ReasonSelectUs;
