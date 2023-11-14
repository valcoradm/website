import React, { useEffect } from "react";
import Preloader from "../components/preloader";
import Navbar from "../components/Navbar";
import Steppers from "../components/appointment/Steppers";
import Patient from "../components/appointment/forms/patient";
import { Box } from "@mui/material";
import PatientExtraData from "../components/appointment/forms/patientExtraData";

const Appointment = () => {
  const [step, setStep] = React.useState(0);

  useEffect(() => {
    setStep(0);
    // Reset form
  }, []);
  return (
    <div>
      {/* <Navbar /> */}
      <Steppers step={step} />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginTop={4}
      >
        {step === 0 && <><Patient /><PatientExtraData/></>}
        {step === 1 && <div>Step 1</div>}
        {step === 2 && <div>Step 2</div>}
        {step === 3 && <div>Step 3</div>}
        {step === 4 && <div>Step 4</div>}
      </Box>
    </div>
  );
};

export default Appointment;
