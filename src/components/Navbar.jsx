import { useEffect, useState } from "react";

function Navbar() {
  const [show, setShow] = useState(window.scrollY > 400);
  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, []);
  const checkScrollTop = () => {
    setShow(window.scrollY > 120);
  };
  return (
    <div className={show ? "navbar-area is-sticky" : "navbar-area"}>
      <div className="main-responsive-nav">
        <div className="container">
          <div className="main-responsive-menu">
            <div className="logo">
              <a href="index.html">
                <img src="assets/img/logo.png" alt="image" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className={
          show ? "main-navbar fixed-top is-sticky" : "main-navbar fixed-top"
        }
      >
        <div className="container">
          <nav className="navbar  navbar-expand-md navbar-two">
            <a className="navbar-brand" href="index.html">
              <img src="assets/img/logo.png" alt="image" />
            </a>

            <div
              className="collapse navbar-collapse mean-menu"
              id="navbarSupportedContent"
            ></div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
