import React, { useReducer, createContext, useContext } from "react";

// Definir el contexto
const MyContext = createContext();

// Acciones para el reducer
const ACTIONS = {
  PATIENT_FOUNDED: "APPOINTMENT_PATIENT_FOUNDED",
  PATIENT_NOT_FOUNDED: "APPOINTMENT_PATIENT_NOT_FOUNDED",
  SET_PATIENT_EXTRA_DATA: "APPOINTMENT_SET_PATIENT_EXTRA_DATA",
  SELECT_SUCURSAL: "APPOINTMENT_SELECT_SUCURSAL",
};

// Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.PATIENT_FOUNDED:
      return { ...state, patientFound: true, step: 2 };
    case ACTIONS.PATIENT_NOT_FOUNDED:
      return { ...state, patientFound: false, step: 1 };
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
  });

  return (
    <MyContext.Provider value={{ state, dispatch }}>
      {children}
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
