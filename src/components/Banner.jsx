import { useEffect } from "react";

function Banner({info}) {  
    useEffect(() => {
        window.$('.banner-slide').owlCarousel({
            margin: 0,
            items: 1,
            loop: false,
            nav: false,
            dots: false,
            autoplay: false,
            autoplayHoverPause: true,
            navText: [
                "<i className='bx bx-chevron-left'></i>",
                "<i className='bx bx-chevron-right'></i>"
            ],
        })
    }, []);
    
    return (
    <div className="banner-slide owl-carousel">
            <div className="banner-two">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="b-two-text">
                                <h1>{info.title}</h1>
                                <p>{info.subtitle}</p>
                                { info.links.map(({target, href, icon, text}, index) => (
                                    <div className="b-two-btn" key={text + "." + index}>
                                    <a target={target} href={href} className="default-btn two">
                                        <i className={icon} aria-hidden="true"></i>  {text}
                                        <span></span>
                                    </a>
                                </div>
                                ))}
                            </div>
                        </div>
    
                        <div className="col-lg-6">
                            <div className="b-two-img">
                                <div className="main-img">
                                    <img src={info.image} alt="Image"/>
                                </div>
                                <div className="shape">
                                    <img src="assets/img/shapes/shape-9.png" alt="Shape"/>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div className="banner-two-shape">
                        <div className="shape-1">
                            <img src="assets/img/shapes/shape-7.png" alt="Shape"/>
                        </div>
                        <div className="shape-2">
                            <img src="assets/img/shapes/shape-8.png" alt="Shape"/>
                        </div>
                        <div className="shape-3">
                            <img src="assets/img/shapes/shape-10.png" alt="Shape"/>
                        </div>
                        <div className="shape-4">
                            <img src="assets/img/shapes/shape-11.png" alt="Shape"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default Banner;
