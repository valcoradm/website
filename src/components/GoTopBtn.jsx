import { useEffect, useState } from "react";

function GoTopBtn() {
  const [show, setShow] = useState(window.scrollY > 400);
  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, []);
  const goTop = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };
  const checkScrollTop = () => {
    setShow(window.scrollY > 400);
  };
  return (
    <div className={show ? "go-top active" : "go-top"} onClick={goTop}>
      <i className="bx bxs-upvote"></i>
    </div>
  );
}

export default GoTopBtn;
