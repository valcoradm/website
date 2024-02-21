import { Box } from "@mui/material";
import Patient from "./patient";
import PatientExtraData from "./patientExtraData";
import { useAppointmentProvider } from "../../../hooks/AppointmentContext";
import SucursalSelect from "./SucursalSelect";
import AppoinmentSelect from "./AppoinmentSelect";
import Confirmation from "./Confirmation";

const AppointmentActionFlow = () => {
  const { state, dispatch } = useAppointmentProvider();
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      marginTop={4}
    >
      {state.step === 0 && <Patient />}
      {state.step === 1 && <PatientExtraData />}
      {state.step === 2 && <div><SucursalSelect/></div>}
      {state.step === 3 && <AppoinmentSelect />}
      {state.step === 4 && <Confirmation />}
    </Box>
  );
};

export default AppointmentActionFlow;
