import React, { useState, useEffect } from "react";
import Preloader from "../components/preloader";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import DedicatedArea from "../components/DedicatedArea";
import examenesData from "../data/examenes.json";
import headerData from "../data/header.json";
import razonesParaSeleccionarnosData from "../data/razonesParaSeleccionarnos.json";
import staffData from "../data/staff.json";
import faqData from "../data/faq.json";
import Staff from "../components/Staff";
import AgencyArea from "../components/AgencyArea";
import ReasonSelectUs from "../components/ReasonSelectUs";
import WorkWithUs from "../components/WorkWithUs";
import OfferArea from "../components/OfferArea";
import ClientComments from "../components/ClientComments";
import Faq from "../components/Faq";
import VirtualPlanification from "../components/VirtualPlanification";
import Footer from "../components/Footer";
import WhatsappBtn from "../components/WhatsappBtn";
import GoTopBtn from "../components/GoTopBtn";
import ThemeSelector from "../components/ThemeSelector";
import ReactGA from 'react-ga';

function Main() {
  const [imagesArray, setImagesArray] = useState([]);
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
    getImagesArray();
  }, []);
  const getImagesArray = () => {
    const images = [];
    examenesData.forEach((examen) => {
      images.push(examen.image);
    });
    staffData.forEach((staff) => {
      images.push(staff.image);
    });
    setImagesArray(images);
  };

  return (
    <div className="App">
      <Preloader files={imagesArray}></Preloader>
      <Navbar></Navbar>
      <Banner info={headerData}></Banner>
      <DedicatedArea info={examenesData}></DedicatedArea>
      <VirtualPlanification></VirtualPlanification>
      <AgencyArea></AgencyArea>
      <OfferArea></OfferArea>
      <ReasonSelectUs info={razonesParaSeleccionarnosData}></ReasonSelectUs>
      {/* <WorkWithUs></WorkWithUs> */}
      <Staff info={staffData}></Staff>
      <ClientComments></ClientComments>
      <Faq info={faqData}></Faq>
      <Footer></Footer>
      <WhatsappBtn popover="Dudas o agenda tu hora"/>
      <GoTopBtn></GoTopBtn>
      <ThemeSelector></ThemeSelector>
    </div>
  );
}

export default Main;
