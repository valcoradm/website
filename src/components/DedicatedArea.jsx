import { useEffect } from "react";

function DedicatedArea({info}) {
    useEffect(() => {
        window.$('.dedicated-slider').owlCarousel({
            items: 1,
            loop: true,
            margin: 20,
            nav: false,
            autoplay: true,
            autoplayHoverPause: true,
            dots: true,
            responsive:{
                0:{
                    items:1,
                },
                600:{
                    items:2,
                },
                1000:{
                    items:3,
                }
            }
        })
    }, []);
  return (
    <div className="dedicated-area ptb-100">
      <div className="container">
        <div className="section-title-one">
          <h2>EXÁMENES RADIOLOGICOS</h2>
        </div>

        <div className="dedicated-slider owl-carousel owl-theme">
        { info.map((item, index) => (
            <div className="dedicated-card" key={item.title + "." + index}>
            <img src={item.image} alt="Image" />
            <div className="d-card-text">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
            </div>
        )) }
        </div>
      </div>
    </div>
  );
}

export default DedicatedArea;
