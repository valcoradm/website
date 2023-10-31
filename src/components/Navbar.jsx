import { useEffect } from "react";

function Navbar() {
    useEffect(() => {
        if (window.navBarBehaviorEnabled) return;
        const $ = window.$;
        $(window).on('scroll',function() {
            if ($(this).scrollTop() > 120){  
                $('.navbar-area').addClass("is-sticky");
                $('.main-navbar').addClass("is-sticky");
            }
            else{
                $('.navbar-area').removeClass("is-sticky");
                $('.main-navbar').removeClass("is-sticky");
            }
        });
        window.navBarBehaviorEnabled = true;
    }, []);
    return (
    <div className="navbar-area">
            <div className="main-responsive-nav">
                <div className="container">
                    <div className="main-responsive-menu">
                        <div className="logo">
                            <a href="index.html">
                                <img src="assets/img/logo.png" alt="image"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="main-navbar fixed-top">
                <div className="container">
                    <nav className="navbar  navbar-expand-md navbar-two">
                        <a className="navbar-brand" href="index.html">
                            <img src="assets/img/logo.png" alt="image"/>
                        </a>

                        <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                        </div>
                    </nav>
                </div>
            </div>
        </div>
  );
}

export default Navbar;
