import React, { useState } from "react";
import { useAppointmentProvider } from "../../../hooks/AppointmentContext";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Button } from "@mui/material";
import { Box } from "@mui/system";

const SucursalSelect = () => {
  const { dispatch } = useAppointmentProvider();
  const goNext = () => {
    dispatch({
      type: "APPOINTMENT_SELECT_SUCURSAL",
    });
  };
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {window.sucursales.data.map((sucursal) => (
          <Button
            startIcon={<LocationOnIcon />}
            onClick={goNext}
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
