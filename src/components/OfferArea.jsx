function OfferArea() {  return (
    <div className="offers-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="offer-img">
                            <img src="assets/img/offer.jpg" alt="Image"/>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="offer-text">
                            <div className="section-title-two">
                                <h2>TECNOLOGÍA PREMIUM</h2>
                                <p>En nuestro centro radiológico dental, nos enorgullece ofrecer servicios de vanguardia respaldados por la última tecnología premium. Utilizamos equipos de diagnóstico de última generación que permiten una visualización precisa y detallada de sus estructuras bucales, garantizando así un tratamiento dental de la más alta calidad.</p>

                                <p>Nuestro compromiso con la excelencia se refleja en cada paso que damos, desde la toma de imágenes digitales de alta resolución hasta la planificación precisa de procedimientos. En todo momento, su salud bucodental es nuestra máxima prioridad, y nuestra inversión en tecnología de punta es un testimonio de ello.</p>
                            </div>
                            <ul>
                                <li>
                                    <i className='bx bx-check-circle'></i>
                                    OP 300 Instrumentarium
                                </li>
                                <li>
                                    <i className='bx bx-check-circle'></i>
                                    Focus Instrumentarium
                                </li>
                                <li>
                                    <i className='bx bx-check-circle'></i>
                                    PaX-i3D Green Vatech
                                </li>
                                <li>
                                    <i className='bx bx-check-circle'></i>
                                    Express Instrumentarium
                                </li>
                                <li>
                                    <i className='bx bx-check-circle'></i>
                                    Drystar 5302
                                </li>
                            </ul>
                            <div className="offers-btn">
                                <a target="_blank" href="https://api.whatsapp.com/send?phone=56957410727&amp;text=Hola+Valcor%2C+quiero+pedir+una+hora" className="default-btn two">
                                    Agenda tu cita
                                    <span></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default OfferArea;
