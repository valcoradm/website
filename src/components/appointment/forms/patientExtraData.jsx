import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const PatientExtraData = () => {
  const [error, setError] = useState(null);
  const [patientData, setPatientData] = useState({
    nombre: null,
    apellidoPaterno: null,
    apellidoMaterno: null,
    fechaNacimiento: null,
    sexo: null,
    telefono: null,
    celular: null,
    email: null,
    direccion: null,
    prevision: null,
    previsionPlan: null,
  });
  const goNext = () => {
    if (error) return;
  };
  return (
    <div>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
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
          <TextField
            margin="dense"
            required
            id="outlined-required"
            label="Fecha de Nacimiento"
            value={patientData.fechaNacimiento}
            onChange={(evt) => {
              setPatientData({
                ...patientData,
                fechaNacimiento: evt.target.value,
              });
            }}
          />
          <TextField
            margin="dense"
            required
            id="outlined-required"
            label="Sexo"
            value={patientData.sexo}
            onChange={(evt) => {
              setPatientData({ ...patientData, sexo: evt.target.value });
            }}
          />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <TextField
            margin="dense"
            required
            id="outlined-required"
            label="Teléfono"
            value={patientData.telefono}
            onChange={(evt) => {
              setPatientData({ ...patientData, telefono: evt.target.value });
            }}
          />
          <TextField
            margin="dense"
            required
            id="outlined-required"
            label="Celular"
            value={patientData.celular}
            onChange={(evt) => {
              setPatientData({ ...patientData, celular: evt.target.value });
            }}
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
          <TextField
            margin="dense"
            required
            id="outlined-required"
            label="Dirección"
            value={patientData.direccion}
            onChange={(evt) => {
              setPatientData({ ...patientData, direccion: evt.target.value });
            }}
          />
          <TextField
            margin="dense"
            required
            id="outlined-required"
            label="Previsión"
            value={patientData.prevision}
            onChange={(evt) => {
              setPatientData({ ...patientData, prevision: evt.target.value });
            }}
          />
          <TextField
            margin="dense"
            required
            id="outlined-required"
            label="Plan de Previsión"
            value={patientData.previsionPlan}
            onChange={(evt) => {
              setPatientData({
                ...patientData,
                previsionPlan: evt.target.value,
              });
            }}
          />
        </Box>
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
