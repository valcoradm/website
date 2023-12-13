import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  TextField,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Validator from "../../../util/Validators";
import { useAppointmentProvider } from "../../../hooks/AppointmentContext";
import ValcorApi from "../../../api/ValcorApi";

const Patient = () => {
  const { dispatch } = useAppointmentProvider();
  const [rutOrPassport, setRutOrPassport] = useState();
  const [identificador, setIdentificador] = useState("rut");
  const [error, setError] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  useEffect(() => {
    setRutOrPassport("");
  }, [identificador]);
  const search = () => {
    if (error) return;
    setIsSearching(true);
    dispatch({
      type: "APPOINTMENT_LOADING",
      payload: { loading: true },
    });
    ValcorApi.checkPatientExists(identificador, rutOrPassport).then((res) => {
      dispatch({
        type: "APPOINTMENT_LOADING",
        payload: { loading: false },
      });
      if (res.exists) {
        dispatch({
          type: "APPOINTMENT_PATIENT_FOUNDED",
          payload: { type: identificador, id: rutOrPassport },
        });
        return;
      } else {
        dispatch({
          type: "APPOINTMENT_PATIENT_NOT_FOUNDED",
          payload: { type: identificador, id: rutOrPassport },
        });
      }
    });
  };
  return (
    <div>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <TextField
          disabled={isSearching}
          required
          value={rutOrPassport}
          onChange={(evt) => {
            if (identificador === "rut") {
              return setRutOrPassport(
                evt.target.value.replace(/[^0-9kK]/g, "")
              );
            }
            setRutOrPassport(evt.target.value);
          }}
          id="outlined-required"
          helperText={error}
          error={error}
          label={identificador === "rut" ? "Rut" : "Pasaporte"}
          onBlur={() => {
            if (rutOrPassport.length < 3) {
              setError(`El ${identificador} debe tener al menos 3 caracteres`);
              return;
            }
            setError(null);
            if (identificador !== "rut") return;
            let rutNumero = rutOrPassport.slice(0, -1);
            let rutVerificador = rutOrPassport.slice(-1);
            let rutFormateado =
              rutNumero.replace(/\B(?=(\d{3})+(?!\d))/g, ".") +
              "-" +
              rutVerificador;
            rutFormateado = rutFormateado.toUpperCase();
            setRutOrPassport(rutFormateado);
            if (!Validator.rut(rutFormateado)) {
              setError("Rut inválido");
            }
          }}
          onFocus={() => {
            if (identificador !== "rut") return;
            setRutOrPassport(
              rutOrPassport.replace(/\./g, "").replace(/-/g, "")
            );
          }}
        />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <FormControlLabel
          disabled={isSearching}
          control={
            <Checkbox
              style={{ color: '#E97417' }}
              defaultChecked
              checked={identificador === "rut"}
              onChange={() => {
                setIdentificador("rut");
              }}
            />
          }
          label="Rut"
        />
        <FormControlLabel
          disabled={isSearching}
          control={
            <Checkbox
              style={{ color: '#E97417' }}
              defaultChecked
              checked={identificador === "pasaporte"}
              onChange={() => {
                setIdentificador("pasaporte");
              }}
            />
          }
          label="Pasaporte"
        />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Button
          style={{ color: '#E97417', borderColor: '#E97417', width: '100%' }}
          variant="outlined"
          endIcon={<ArrowForwardIosIcon />}
          onClick={search}
          disabled={isSearching}
        >
          {isSearching && (
            <>
              <CircularProgress size={12} color="success" /> &nbsp;{" "}
            </>
          )}
          Ingresar
        </Button>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", maxWidth:"200px", textAlign: "center", marginTop: "20px" }}>
        <small>Si eres extranjero puedes utilizar tu número de documento nacional (pais de procedencia) o el de tu pasaporte, seleccionando la casilla pasaporte</small>  
      </Box>
    </div>
  );
};

export default Patient;
