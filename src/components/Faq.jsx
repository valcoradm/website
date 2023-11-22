import { useEffect } from "react";

function Faq({ info }) {
  useEffect(() => {
    if (window.loadedAccordion) return;
    window.loadedAccordion = true;
    const $ = window.$;
    $(".accordion > li:eq(0) .title").addClass("active").next().slideDown();
    $(".accordion .title").click(function (j) {
      var dropDown = $(this).closest("li").find(".accordion-content");
      $(this)
        .closest(".accordion")
        .find(".accordion-content")
        .not(dropDown)
        .slideUp();
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
      } else {
        $(this)
          .closest(".accordion")
          .find(".title.active")
          .removeClass("active");
        $(this).addClass("active");
      }
      dropDown.stop(false, true).slideToggle();
      j.preventDefault();
    });
  }, []);
  return (
    <div class="frequently-area ptb-100">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="frequently-text">
              <div class="section-title-two">
                <h2>{info.title}</h2>
                <p>{info.subtitle}</p>
              </div>
              <div class="faq-contant">
                <div class="row align-items-center">
                  <ul class="accordion">
                    {info.questions.map(({ question, answer }, index) => (
                      <li key={question + "." + index}>
                        <h3 class="title">{question}</h3>
                        <div class="accordion-content">
                          <p>{answer}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="frequently-img">
              <div class="main-img">
                <img src="assets/img/preguntasfrecuentes.jpg" alt="Image" />
              </div>
              <div class="shape-1">
                <img src="assets/img/shapes/shape-14.png" alt="Shape" />
              </div>
              <div class="shape-2">
                <img src="assets/img/shapes/shape-15.png" alt="Shape" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
