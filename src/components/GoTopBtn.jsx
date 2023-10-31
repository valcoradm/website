import { useEffect } from "react";

function GoTopBtn() {
  useEffect(() => {
    if (window.goTopFinished) return;
    const $ = window.$;
    // Go to Top
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 0) {
        $(".go-top").addClass("active");
      } else {
        $(".go-top").removeClass("active");
      }
    });
    $(function () {
      $(window).on("scroll", function () {
        var scrolled = $(window).scrollTop();
        if (scrolled > 600) $(".go-top").addClass("active");
        if (scrolled < 600) $(".go-top").removeClass("active");
      });

      $(".go-top").on("click", function () {
        $("html, body").animate({ scrollTop: "0" }, 1000);
      });
    });
    window.goTopFinished = true;
  }, []);
  return (
    <div class="go-top">
      <i class="bx bxs-upvote"></i>
    </div>
  );
}

export default GoTopBtn;
