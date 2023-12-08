import React, { useState } from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EditIcon from "@mui/icons-material/Edit";
import ApartmentIcon from "@mui/icons-material/Apartment";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import EmailIcon from "@mui/icons-material/Email";
import TagFacesIcon from '@mui/icons-material/TagFaces'
import { useAppointmentProvider } from "../../../hooks/AppointmentContext";
import {
  Alert,
  Box,
  Button,
  Chip,
  Link,
  Snackbar,
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
  const [error, setError] = React.useState(null);
  const [showError, setShowError] = React.useState(false);
  const [sucursales, setSucursales] = useState([]);
  const handleCloseError = () => {
    setShowError(false);
    if (error?.code === "INVALID_PATIENT") {
      setTimeout(() => {
        dispatch({
          type: "APPOINTMENT_FORCE_STEP",
          payload: { step: 0 },
        });
      }, 500);
    }
    if (error?.code === "NG_ERROR") {
      setTimeout(() => {
        dispatch({
          type: "APPOINTMENT_FORCE_STEP",
          payload: { step: 0 },
        });
      }, 500);
    }
    if (error?.code === "DATE_ERROR") {
      setTimeout(() => {
        dispatch({
          type: "APPOINTMENT_FORCE_STEP",
          payload: { step: 2 },
        });
      }, 500);
    }
    if (error?.code === "INVALID_APPOINTMENT") {
      setTimeout(() => {
        dispatch({
          type: "APPOINTMENT_FORCE_STEP",
          payload: { step: 2 },
        });
      }, 500);
    }
  };
  const volverSeleccionHora = () => {
    dispatch({
      type: "APPOINTMENT_FORCE_STEP",
      payload: { step: 3 },
    });
  };
  const volverSeleccionSucursal = () => {
    dispatch({
      type: "APPOINTMENT_FORCE_STEP",
      payload: { step: 2 },
    });
  };
  const volverASeleccionPaciente = () => {
    dispatch({
      type: "APPOINTMENT_FORCE_STEP",
      payload: { step: 0 },
    });
  };
  const volverAEdicionPaciente = () => {
    dispatch({
      type: "APPOINTMENT_FORCE_STEP",
      payload: { step: 1, goToEnd: true },
    });
  };
  const save = () => {
    const payload = {
      paciente: {},
      citacion: {
        idSucursal: state.idSucursal,
        fecha: state.date + "T" + state.hour + ":00",
      },
    };
    if (state.patient.type === "rut") {
      payload.paciente.rut = state.patient.id.replaceAll(".", "");
    } else {
      payload.paciente.pasaporte = state.patient.id;
    }
    if (!state.patientFound) {
      payload.paciente.nombre = state.patientExtraData.patientData.nombre;
      payload.paciente.apellidoPaterno =
        state.patientExtraData.patientData.apellidoPaterno;
      payload.paciente.apellidoMaterno =
        state.patientExtraData.patientData.apellidoMaterno;
      payload.paciente.telefonoMovil =
        state.patientExtraData.patientData.celular;
      payload.paciente.correo = state.patientExtraData.patientData.email;
    }
    ValcorApi.saveAppointment(payload)
      .then((res) => {
        dispatch({
          type: "APPOINTMENT_LOADING",
          payload: { loading: false },
        });
        setSaved(true);

        ValcorApi.getSucursales()
          .then((res) => {
            setSucursales(res);
            dispatch({
              type: "APPOINTMENT_LOADING",
              payload: { loading: false },
            });
          })
      })
      .catch((err) => {
        dispatch({
          type: "APPOINTMENT_LOADING",
          payload: { loading: false },
        });
        setError(err);
        setShowError(true);
      });
    dispatch({
      type: "APPOINTMENT_LOADING",
      payload: { loading: true },
    });
  };
  if (!saved) {
    return (
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Snackbar
          open={showError}
          autoHideDuration={6000}
          onClose={handleCloseError}
        >
          <Alert
            onClose={handleCloseError}
            severity="error"
            sx={{ width: "100%" }}
          >
            {error?.message ?? "Error desconocido"}
          </Alert>
        </Snackbar>
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
              <TableCell scope="row">
                <Button onClick={volverASeleccionPaciente}>
                  <RestartAltIcon />
                </Button>
              </TableCell>
            </TableRow>
            {!state.patientFound && (
              <>
                <TableRow>
                  <TableCell scope="row">
                    <PersonAddIcon />
                  </TableCell>
                  <TableCell scope="row">Nombre paciente</TableCell>
                  <TableCell scope="row">
                    {state.patientExtraData.patientData.nombre}{" "}
                    {state.patientExtraData.patientData.apellidoPaterno}{" "}
                    {state.patientExtraData.patientData.apellidoMaterno}
                  </TableCell>
                  <TableCell scope="row">
                    <Button onClick={volverAEdicionPaciente}>
                      <EditIcon />
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell scope="row">
                    <PhoneAndroidIcon />
                  </TableCell>
                  <TableCell scope="row">Celular</TableCell>
                  <TableCell scope="row">
                    {state.patientExtraData.patientData.celular}
                  </TableCell>
                  <TableCell scope="row">
                    <Button onClick={volverAEdicionPaciente}>
                      <EditIcon />
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell scope="row">
                    <EmailIcon />
                  </TableCell>
                  <TableCell scope="row">Correo</TableCell>
                  <TableCell scope="row">
                    {state.patientExtraData.patientData.email}
                  </TableCell>
                  <TableCell scope="row">
                    <Button onClick={volverAEdicionPaciente}>
                      <EditIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              </>
            )}
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell scope="row">
                <ApartmentIcon />
              </TableCell>
              <TableCell scope="row">Sucursal</TableCell>
              <TableCell scope="row">{state.nombreSucursal}</TableCell>
              <TableCell scope="row">
                <Button onClick={volverSeleccionSucursal}>
                  <EditIcon />
                </Button>
              </TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell scope="row">
                <CalendarMonthIcon />
              </TableCell>
              <TableCell scope="row">Fecha</TableCell>
              <TableCell scope="row">
                {state.date} {state.hour}
              </TableCell>
              <TableCell scope="row">
                <Button onClick={volverSeleccionHora}>
                  <EditCalendarIcon />
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Button
          disabled={state.loading || error}
          onClick={save}
          variant="outlined"
          sx={{ marginBottom: 2 }}
        >
          Confirmar y Agendar
        </Button>
      </Box>
    );
  }
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }} style={{textAlign: "center", maxWidth: "600px"}}>
      <TagFacesIcon style={{fontSize: "90px", color: "#E97417", textAlign: "center", width: "100%"}} />
      <h2>
      ¡Gracias por elegir Valcor para tu cita de radiología dental!
      </h2>
      <br />
      <span>
        Apreciamos tu confianza en nuestros servicios. Confirmaremos tu cita a
        través del correo electrónico proporcionado. Si tienes alguna pregunta o
        necesitas asistencia adicional, no dudes en contactarnos a través de
        WhatsApp.
      </span>
      <br />
      <span>
        Estamos aquí para brindarte la mejor atención. ¡Esperamos verte pronto
        en Valcor!
      </span>
      <br />
      {sucursales.map((sucursal) => (
        <Box sx={{ marginBottom: 2, display: "flex", flexDirection: "column" }}>
          <Link
            href={
              "https://api.whatsapp.com/send?phone=" +
              sucursal.whatsapp +
              "&text=" +
              encodeURIComponent(sucursal.defaultWhatsappText)
            }
            // startIcon={<LocationOnIcon />}
            // onClick={() => goNext(sucursal.id, sucursal.Descripcion)}
            variant="contained"
            style={{textTransform: "capitalize", backgroundColor: "#E97417", color: "white", fontWeight: "bold", fontSize: "18px", padding: "10px", textDecoration: "none", textAlign: "center", width: "100%"}}
          >
            Sucursal {sucursal.Descripcion.toLowerCase()}
          </Link>
        </Box>
      ))}
    </Box>
  );
};

export default Confirmation;
