import React, { useState } from "react";
import { useAppointmentProvider } from "../../../hooks/AppointmentContext";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import ValcorApi from "../../../api/ValcorApi";

const SucursalSelect = () => {
  const { dispatch } = useAppointmentProvider();
  const [sucursales, setSucursales] = useState([]);
  useState(() => {
    dispatch({
      type: "APPOINTMENT_LOADING",
      payload: { loading: true },
    });
    ValcorApi.getSucursales()
      .then((res) => {
        setSucursales(res);
        dispatch({
          type: "APPOINTMENT_LOADING",
          payload: { loading: false },
        });
      })
      .catch((err) => {
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
  const goNext = (id, name) => {
    dispatch({
      type: "APPOINTMENT_SELECT_SUCURSAL",
      payload: { id, name },
    });
  };
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {sucursales.map((sucursal) => (
          <Box sx={{ marginBottom: 2, display: "flex", flexDirection: "column" }}>
            <Button
              startIcon={<LocationOnIcon />}
              onClick={() => goNext(sucursal.id, sucursal.Descripcion)}
              variant="outlined"
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <span style={{ textAlign: "left" }}>
                  {sucursal.Descripcion}
                </span>
                <span style={{ textAlign: "left" }}></span>
              </Box>
            </Button>
            <small style={{textAlign: "center"}}>{sucursal.Direccion}</small>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default SucursalSelect;
