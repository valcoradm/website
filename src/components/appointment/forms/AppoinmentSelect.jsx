import React, { useState } from "react";
import { useAppointmentProvider } from "../../../hooks/AppointmentContext";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Alert, Button, Stack } from "@mui/material";
import { Box } from "@mui/system";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { useEffect } from "react";

const maxPage = 3;
const AppoinmentSelect = () => {
  const [page, setPage] = useState(0);
  const [fechas, setFechas] = useState(
    obtenerFechasSemana(sumarDias(new Date(), 7 * page))
  );
  useEffect(() => {
    setFechas(obtenerFechasSemana(sumarDias(new Date(), 7 * page)));
  }, [page]);

  function sumarDias(fecha, dias) {
    const fechaObj = new Date(fecha);
    fechaObj.setDate(fechaObj.getDate() + dias);
    return fechaObj.toISOString().split("T")[0];
  }
  function obtenerFechasSemana(fecha) {
    // Convertir la cadena de fecha a un objeto Date
    const fechaObj = new Date(fecha);

    // Obtener el día de la semana (0 para domingo, 1 para lunes, ..., 6 para sábado)
    const diaSemana = fechaObj.getDay();

    // Calcular la fecha del lunes de la semana actual
    const lunesSemana = new Date(fechaObj);
    lunesSemana.setDate(fechaObj.getDate() - diaSemana);

    // Crear un array para almacenar las fechas de la semana
    const fechasSemana = [];
    for (let i = 0; i < 7; i++) {
      const fecha = new Date(lunesSemana);
      fecha.setDate(lunesSemana.getDate() + i);
      fechasSemana.push(fecha.toISOString().split("T")[0]);
    }

    return fechasSemana;
  }

  const { dispatch } = useAppointmentProvider();
  const goNext = () => {
    dispatch({
      type: "APPOINTMENT_SELECT_DATE",
    });
  };
  const diasSemana = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];
  return (
    <>
      <Stack direction="column" spacing={2}>
        <Stack direction="row" spacing={2}>
          <Button
            startIcon={<ArrowCircleLeftIcon />}
            disabled={page <= 0}
            onClick={() => setPage(page - 1)}
          />
          {fechas.map(
            (fecha, index) =>
              diasSemana[index] && (
                <Button disabled={index % 2}>
                  <div style={{ textAlign: "center" }}>
                    {diasSemana[index]} <br />
                    <small>{fecha}</small>
                  </div>
                </Button>
              )
          )}
          <Button
            disabled={page >= maxPage}
            onClick={() => setPage(page + 1)}
            startIcon={<ArrowCircleRightIcon />}
          />
        </Stack>
        <Alert severity="error">No hay atenciones para la semana seleccionada</Alert>  
      </Stack>
    </>
  );
};

export default AppoinmentSelect;
