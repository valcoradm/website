import React, { useEffect } from "react";
import Preloader from "../components/preloader";
import Navbar from "../components/Navbar";
import Steppers from "../components/appointment/Steppers";
import Patient from "../components/appointment/forms/patient";
import { Box } from "@mui/material";
import PatientExtraData from "../components/appointment/forms/patientExtraData";
import { AppointmentProvider } from "../hooks/AppointmentContext";
import AppointmentActionFlow from "../components/appointment/forms/ActionFlow";

const Appointment = () => {
  const [step, setStep] = React.useState(0);

  useEffect(() => {
    setStep(0);
    // Reset form
  }, []);
  return (
    <div>
      {/* <Navbar /> */}
      <AppointmentProvider>
        <Steppers />
        <AppointmentActionFlow />
      </AppointmentProvider>
    </div>
  );
};

export default Appointment;
