import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Preloader from "./components/preloader";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import DedicatedArea from "./components/DedicatedArea";
import examenesData from "./data/examenes.json";
import headerData from "./data/header.json";
import razonesParaSeleccionarnosData from "./data/razonesParaSeleccionarnos.json";
import staffData from "./data/staff.json";
import faqData from "./data/faq.json";
import Staff from "./components/Staff";
import AgencyArea from "./components/AgencyArea";
import ReasonSelectUs from "./components/ReasonSelectUs";
import WorkWithUs from "./components/WorkWithUs";
import OfferArea from "./components/OfferArea";
import ClientComments from "./components/ClientComments";
import Faq from "./components/Faq";
import VirtualPlanification from "./components/VirtualPlanification";
import Footer from "./components/Footer";
import WhatsappBtn from "./components/WhatsappBtn";
import GoTopBtn from "./components/GoTopBtn";

function App() {
  const [loaded, setLoaded] = useState(false);
  const setLightBehavior = () => {
    if (window.lightBehaviorLoaded) return;
    window.setTheme = (themeName) => {
      localStorage.setItem("covax_theme", themeName);
      document.documentElement.className = themeName;
    };
    window.toggleTheme = () => {
      if (localStorage.getItem("covax_theme") === "theme-dark") {
        window.setTheme("theme-light");
      } else {
        window.setTheme("theme-dark");
      }
    };
    window
      .$("body")
      .append(
        "<div class='switch-box'><label id='switch' class='switch'><input type='checkbox' onchange='toggleTheme()' id='slider'><span class='slider round'></span></label></div>"
      );
    if (localStorage.getItem("covax_theme") === "theme-dark") {
      window.setTheme("theme-dark");
      document.getElementById("slider").checked = false;
    } else {
      window.setTheme("theme-light");
      document.getElementById("slider").checked = true;
    }
    window.lightBehaviorLoaded = true;
  };
  useEffect(() => {
    setLightBehavior();
    setTimeout(() => {
      setLoaded(true);
      window.jQuery(".preloader").fadeOut(500);
    }, 1000);
  }, []);

  return (
    <div className="App">
      <Preloader></Preloader>
      <Navbar></Navbar>
      <Banner info={headerData}></Banner>
      <DedicatedArea info={examenesData}></DedicatedArea>
      <AgencyArea></AgencyArea>
      <ReasonSelectUs info={razonesParaSeleccionarnosData}></ReasonSelectUs>
      <WorkWithUs></WorkWithUs>
      <Staff info={staffData}></Staff>
      <OfferArea></OfferArea>
      <ClientComments></ClientComments>
      <Faq info={faqData}></Faq>
      <VirtualPlanification></VirtualPlanification>
      <Footer></Footer>
      <WhatsappBtn
        phone="56957410727"
        message="Hola Valcor, quiero pedir una hora"
        popover="Dudas o agenda tu hora"
      ></WhatsappBtn>
      <GoTopBtn></GoTopBtn>
    </div>
  );
}

export default App;
