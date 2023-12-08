import {
  Box,
  CircularProgress,
  Dialog,
  Snackbar,
} from "@mui/material";
import React, { useReducer, createContext, useContext } from "react";

// Definir el contexto
const MyContext = createContext();

// Acciones para el reducer
const ACTIONS = {
  PATIENT_FOUNDED: "APPOINTMENT_PATIENT_FOUNDED",
  PATIENT_NOT_FOUNDED: "APPOINTMENT_PATIENT_NOT_FOUNDED",
  SET_PATIENT_EXTRA_DATA: "APPOINTMENT_SET_PATIENT_EXTRA_DATA",
  SELECT_SUCURSAL: "APPOINTMENT_SELECT_SUCURSAL",
  SELECT_DATE: "APPOINTMENT_SELECT_DATE",
  LOADING: "APPOINTMENT_LOADING",
  ERROR_RESET: "APPOINTMENT_ERROR_RESET",
  FORCE_STEP: "APPOINTMENT_FORCE_STEP",
  RETURN_TO_END: "APPOINTMENT_RETURN_TO_END",
};

// Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.PATIENT_FOUNDED:
      return {
        ...state,
        patient: {
          type: action.payload.type,
          id: action.payload.id,
        },
        patientFound: true,
        step: 2,
      };
    case ACTIONS.PATIENT_NOT_FOUNDED:
      return {
        ...state,
        patient: {
          type: action.payload.type,
          id: action.payload.id,
        },
        patientFound: false,
        step: 1,
      };
    case ACTIONS.SET_PATIENT_EXTRA_DATA:
      return {
        ...state,
        patientExtraData: action.payload,
        step: 2,
      };
    case ACTIONS.SELECT_SUCURSAL:
      return {
        ...state,
        step: 3,
        idSucursal: action.payload.id,
        nombreSucursal: action.payload.name,
      };
    case ACTIONS.SELECT_DATE:
      return {
        ...state,
        step: 4,
        date: action.payload.date,
        hour: action.payload.hour,
      };
    case ACTIONS.LOADING:
      return {
        ...state,
        loading: action.payload.loading,
      };
    case ACTIONS.ERROR_RESET:
      return {
        ...state,
        patientFound: null,
        patient: {
          type: "",
          id: "",
        },
        patientExtraData: null,
        idSucursal: null,
        loading: false,
        step: 0,
        payload: action.payload.error,
        date: null,
        hour: null,
      };
    case ACTIONS.FORCE_STEP:
      return {
        ...state,
        step: action.payload.step,
        goToEnd: action.payload.goToEnd,
      };
    case ACTIONS.RETURN_TO_END:
      return {
        ...state,
        patientExtraData: action.payload,
        goToEnd: false,
        step: 4,
      };
    default:
      return state;
  }
};

const AppointmentProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    step: 0,
    patientFound: null,
    patient: {
      type: "",
      id: "",
    },
    patientExtraData: null,
    idSucursal: null,
    nombreSucursal: null,
    loading: false,
    date: null,
    hour: null,
    goToEnd: false,
  });
  return (
    <MyContext.Provider value={{ state, dispatch }}>
      {children}
      <Snackbar
        open={state.error}
        autoHideDuration={6000}
        // onClose={handleClose}
        message="Note archived"
        // action={(action)}
      />
      <Dialog open={state.loading}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "10px 20px",
          }}
        >
          <CircularProgress color="inherit" />
          Espere un momento por favor...
        </Box>
      </Dialog>
    </MyContext.Provider>
  );
};

// Hook personalizado para acceder al contexto
const useAppointmentProvider = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext debe usarse dentro de un MyProvider");
  }
  return context;
};

export { AppointmentProvider, useAppointmentProvider, ACTIONS };
