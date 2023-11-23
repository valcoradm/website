import React, { useState } from "react";
import { useAppointmentProvider } from "../../../hooks/AppointmentContext";
import { Alert, Button, Chip, Stack } from "@mui/material";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { useEffect } from "react";
import ValcorApi from "../../../api/ValcorApi";

const maxPage = 3;
const AppoinmentSelect = () => {
  const [page, setPage] = useState(0);
  const [fechas, setFechas] = useState(
    obtenerFechasSemana(sumarDias(new Date(), 7 * page))
  );
  const [selectedDate, setSelectedDate] = useState(null);
  const [horasPorFecha, setHorasPorFecha] = useState({});
  const [fechasDisponibles, setFechasDisponibles] = useState([]);
  useEffect(() => {
    dispatch({
      type: "APPOINTMENT_LOADING",
      payload: { loading: true },
    });
    ValcorApi.getAgenda(state.idSucursal).then((res) => {
      const horaPorFecha = res.reduce((acc, agenda) => {
        if (!acc[agenda.Fecha]) {
          acc[agenda.Fecha] = [];
        }
        acc[agenda.Fecha].push(agenda.Hora);
        return acc;
      }, {});
      setHorasPorFecha(horaPorFecha);
      setFechasDisponibles(Object.keys(horaPorFecha));
      dispatch({
        type: "APPOINTMENT_LOADING",
        payload: { loading: false },
      });
    }).catch((err) => {
      dispatch({
        type: "APPOINTMENT_LOADING",
        payload: { loading: false },
      });
      dispatch({
        type: "APPOINTMENT_ERROR",
        payload: { error: err.message },
      });
    });
  }, []);
  useEffect(() => {
    setFechas(obtenerFechasSemana(sumarDias(new Date(), 7 * page)));
  }, [page]);

  function padTo2Digits(num) {
    return num.toString().padStart(2, "0");
  }

  function formatDate(date) {
    return [
      padTo2Digits(date.getDate()),
      padTo2Digits(date.getMonth() + 1),
      date.getFullYear(),
    ].join("/");
  }
  function getRandomNumbers(array, count) {
    const result = [];
    
    // Ensure count is not greater than the array length
    count = Math.min(count, array.length);
    
    // Get random indices and push corresponding elements to the result array
    while (result.length < count) {
      const randomIndex = Math.floor(Math.random() * array.length);
      if (!result.includes(array[randomIndex])){
        result.push(array[randomIndex]);
      }
    }
  
    return result.sort();
  }
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
      fechasSemana.push(formatDate(fecha));
    }

    return fechasSemana;
  }

  const { state, dispatch } = useAppointmentProvider();
  const goNext = (hour) => {
    dispatch({
      type: "APPOINTMENT_SELECT_DATE",
      payload: { date: selectedDate, hour },
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

  const semanaTieneHorasDisponibles = fechas.some((fecha) => {
    return horasPorFecha[fecha] && horasPorFecha[fecha].length > 0;
  });
  return (
    <>
      <Stack direction="column" spacing={2}>
        <Stack direction="row" spacing={2}>
          <Button
            startIcon={<ArrowCircleLeftIcon />}
            disabled={page <= 0}
            onClick={() => setPage(page - 1) || setSelectedDate(null)}
          />
          {fechas.map(
            (fecha, index) =>
              diasSemana[index] && (
                <Button
                  onClick={() => setSelectedDate(fecha)}
                  disabled={!fechasDisponibles.includes(fecha)}
                >
                  <div style={{ textAlign: "center" }}>
                    {diasSemana[index]} <br />
                    <small>{fecha}</small>
                  </div>
                </Button>
              )
          )}
          <Button
            disabled={page >= maxPage}
            onClick={() => setPage(page + 1) || setSelectedDate(null)}
            startIcon={<ArrowCircleRightIcon />}
          />
        </Stack>
        {!semanaTieneHorasDisponibles && (
          <Alert severity="error">
            No hay atenciones para la semana seleccionada
          </Alert>
        )}
        {semanaTieneHorasDisponibles && !selectedDate && (
          <Alert severity="warning">Seleccione una fecha</Alert>
        )}
        {selectedDate && (
          <Alert severity="success">
            Horas sugeridas disponibles para: {selectedDate}
          </Alert>
        )}
        {selectedDate && getRandomNumbers(horasPorFecha[selectedDate], 5).map((hora) => (
          <Chip label={hora} style={{cursor: "pointer"}} onClick={() => goNext(hora)}/>
        ))}
      </Stack>
    </>
  );
};

export default AppoinmentSelect;
