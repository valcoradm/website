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
    ValcorApi.getSucursales().then((res) => {
      console.log("res",res);
      setSucursales(res);
      dispatch({
        type: "APPOINTMENT_LOADING",
        payload: { loading: false },
      });
    }).catch((err) => {
      console.log("err",err);
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
      payload: {id, name},
    });
  };
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {sucursales.map((sucursal) => (
          <Button
            startIcon={<LocationOnIcon />}
            onClick={()=>goNext(sucursal.id, sucursal.Descripcion)}
            variant="outlined"
            sx={{ marginBottom: 2 }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <span style={{ textAlign: "left" }}>{sucursal.Descripcion}</span>
              <span style={{ textAlign: "left" }}>
                La direccion de la sucursal
              </span>
            </Box>
          </Button>
        ))}
      </Box>
    </>
  );
};

export default SucursalSelect;
