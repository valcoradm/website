import React, { useEffect } from "react";
import Preloader from "../components/preloader";
import Navbar from "../components/Navbar";
import Steppers from "../components/appointment/Steppers";
import Patient from "../components/appointment/forms/patient";
import { Box } from "@mui/material";
import PatientExtraData from "../components/appointment/forms/patientExtraData";
import { AppointmentProvider } from "../hooks/AppointmentContext";
import AppointmentActionFlow from "../components/appointment/forms/ActionFlow";
import ReactGA from 'react-ga';

const Appointment = () => {
  const [step, setStep] = React.useState(0);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
    document.getElementsByTagName("html")[0].classList.remove("theme-dark");
    setStep(0);
    // Reset form
  }, []);
  return (
    <div>
      {/* <Navbar /> */}
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <center>
          <img
            src="assets/img/logo.png"
            alt="image"
            style={{ maxWidth: "300px", marginTop: "30px", marginBottom: "20px" }}
          ></img>
          <h1 style={{ marginBottom: "20px", color: '#E97417' }}>AGENDAMIENTO EN LINEA</h1>
        </center>
        <AppointmentProvider>
          <Steppers />
          <AppointmentActionFlow />
        </AppointmentProvider>
      </Box>
    </div>
  );
};

export default Appointment;
