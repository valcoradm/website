import React, { useState } from "react";
import { useAppointmentProvider } from "../../../hooks/AppointmentContext";
import {
  Alert,
  Box,
  Button,
  Chip,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { useEffect } from "react";
import ValcorApi from "../../../api/ValcorApi";
import BadgeIcon from "@mui/icons-material/Badge";

const Confirmation = () => {
  const [saved, setSaved] = useState(false);
  const { state, dispatch } = useAppointmentProvider();
  console.log("state", state);
  const save = () => {
    dispatch({
      type: "APPOINTMENT_LOADING",
      payload: { loading: true },
    });
    setTimeout(() => {
      dispatch({
        type: "APPOINTMENT_LOADING",
        payload: { loading: false },
      });
      setSaved(true);
    }, 2000);
    // ValcorApi.saveAppointment(state).then((res) => {
    //   dispatch({
    //     type: "APPOINTMENT_LOADING",
    //     payload: { loading: false },
    //   });
    //   setSaved(true);
    // }).catch((err) => {
    //   dispatch({
    //     type: "APPOINTMENT_LOADING",
    //     payload: { loading: false },
    //   });
    //   dispatch({
    //     type: "APPOINTMENT_ERROR",
    //     payload: { error: err.message },
    //   });
    // });
  };
  if (!saved) {
    return (
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Alert severity="warning">
          Favor valide sus datos antes de continuar
        </Alert>
        <Table aria-label="simple table">
          <TableBody>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell scope="row">
                <BadgeIcon />
              </TableCell>
              <TableCell scope="row">
                {state.patient.type.toUpperCase()}
              </TableCell>
              <TableCell scope="row">{state.patient.id}</TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell scope="row">
                <BadgeIcon />
              </TableCell>
              <TableCell scope="row">Sucursal</TableCell>
              <TableCell scope="row">{state.nombreSucursal}</TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell scope="row">
                <BadgeIcon />
              </TableCell>
              <TableCell scope="row">Fecha</TableCell>
              <TableCell scope="row">
                {state.date} {state.hour}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Button onClick={save} variant="outlined" sx={{ marginBottom: 2 }}>
          Confirmar y Agendar
        </Button>
      </Box>
    );
  }
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Alert severity="success">Su hora ha sido reservada con exito</Alert>
      <Button
        onClick={() => {
          window.location.replace("/");
        }}
        variant="outlined"
        sx={{ marginBottom: 2 }}
      >
        Volver al inicio
      </Button>
    </Box>
  );
};

export default Confirmation;
