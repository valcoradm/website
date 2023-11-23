import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useAppointmentProvider } from "../../../hooks/AppointmentContext";
import { PhoneInput } from "react-international-phone";
import 'react-international-phone/style.css';

const PatientExtraData = () => {
  const { dispatch } = useAppointmentProvider();
  const [error, setError] = useState(null);
  const [patientData, setPatientData] = useState({
    nombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    celular: "+56",
    email: "",
  });
  const goNext = () => {
    // if (error) return;
    dispatch({
      type: "APPOINTMENT_SET_PATIENT_EXTRA_DATA",
      payload: { patientData },
    });
  };
  return (
    <div>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <TextField
          margin="dense"
          required
          id="outlined-required"
          label="Nombre"
          value={patientData.nombre}
          onChange={(evt) => {
            setPatientData({ ...patientData, nombre: evt.target.value });
          }}
        />
        <TextField
          margin="dense"
          required
          id="outlined-required"
          label="Apellido Paterno"
          value={patientData.apellidoPaterno}
          onChange={(evt) => {
            setPatientData({
              ...patientData,
              apellidoPaterno: evt.target.value,
            });
          }}
        />
        <TextField
          margin="dense"
          required
          id="outlined-required"
          label="Apellido Materno"
          value={patientData.apellidoMaterno}
          onChange={(evt) => {
            setPatientData({
              ...patientData,
              apellidoMaterno: evt.target.value,
            });
          }}
        />
        <PhoneInput
          defaultCountry="cl"
          value={patientData.celular}
          onChange={(phone) =>
            setPatientData({ ...patientData, celular: phone })
          }
        />
        <TextField
          margin="dense"
          required
          id="outlined-required"
          label="Email"
          value={patientData.email}
          onChange={(evt) => {
            setPatientData({ ...patientData, email: evt.target.value });
          }}
        />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Button
          variant="outlined"
          endIcon={<ArrowForwardIosIcon />}
          onClick={goNext}
        >
          Siguiente
        </Button>
      </Box>
    </div>
  );
};

export default PatientExtraData;
