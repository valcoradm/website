import React, { useEffect, useState } from "react";
import { Box, Button, FormHelperText, TextField } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useAppointmentProvider } from "../../../hooks/AppointmentContext";
import { PhoneNumberUtil } from "google-libphonenumber";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const phoneUtil = PhoneNumberUtil.getInstance();

const initialValues = {
  nombre: "",
  apellidoPaterno: "",
  apellidoMaterno: "",
  celular: "+56",
  email: "",
};
const PatientExtraData = () => {
  const { state, dispatch } = useAppointmentProvider();
  const [error, setError] = useState(null);
  const [canSave, setCanSave] = useState(false);
  const [edited, setEdited] = useState({});
  const [patientData, setPatientData] = useState({
    nombre: state.patientExtraData?.patientData?.nombre ?? initialValues.nombre,
    apellidoPaterno:
      state.patientExtraData?.patientData?.apellidoPaterno ??
      initialValues.apellidoPaterno,
    apellidoMaterno:
      state.patientExtraData?.patientData?.apellidoMaterno ??
      initialValues.apellidoMaterno,
    celular:
      state.patientExtraData?.patientData?.celular ?? initialValues.celular,
    email: state.patientExtraData?.patientData?.email ?? initialValues.email,
  });
  useEffect(() => {
    if (Object.keys(error ?? {}).length > 0) return setCanSave(false);
    if (patientData.nombre === initialValues.nombre) return setCanSave(false);
    if (patientData.apellidoPaterno === initialValues.apellidoPaterno)
      return setCanSave(false);
    if (patientData.apellidoMaterno === initialValues.apellidoMaterno)
      return setCanSave(false);
    if (patientData.celular === initialValues.celular) return setCanSave(false);
    if (patientData.email === initialValues.email) return setCanSave(false);
    setCanSave(true);
  }, [patientData, error]);
  const goNext = () => {
    if (Object.keys(edited ?? {}).length !== Object.keys(patientData).length)
      return validarTodo();
    if (Object.keys(error ?? {}).length > 0) return;
    if (state.goToEnd) {
      return dispatch({
        type: "APPOINTMENT_RETURN_TO_END",
        payload: { goToEnd: false, patientData },
      });
    }
    // if (error) return;
    dispatch({
      type: "APPOINTMENT_SET_PATIENT_EXTRA_DATA",
      payload: { patientData },
    });
  };
  const updateValue = (evt) => {
    setPatientData({ ...patientData, [evt.target.name]: evt.target.value });
  };
  const validarTodo = () => {
    validarNombre();
    validarApellidoPaterno();
    validarApellidoMaterno();
    validarCelular();
    validarCorreo();
    setEdited({
      nombre: true,
      apellidoPaterno: true,
      apellidoMaterno: true,
      celular: true,
      email: true,
    });
  };
  const validarNombre = () => {
    if (patientData.nombre?.length < 3) {
      setError((error) => ({
        ...(error ?? {}),
        nombre: "Debe indicar el nombre",
      }));
    } else {
      setError((error) => {
        const newError = { ...(error ?? {}) };
        delete newError.nombre;
        return newError;
      });
    }
  };
  const validarApellidoPaterno = () => {
    if (patientData.apellidoPaterno?.length < 3) {
      setError((error) => ({
        ...(error ?? {}),
        apellidoPaterno: "Debe indicar el apellido paterno",
      }));
    } else {
      setError((error) => {
        const newError = { ...(error ?? {}) };
        delete newError.apellidoPaterno;
        return newError;
      });
    }
  };
  const validarApellidoMaterno = () => {
    if (patientData.apellidoMaterno?.length < 3) {
      setError((error) => ({
        ...(error ?? {}),
        apellidoMaterno: "Debe indicar el apellido materno",
      }));
    } else {
      setError((error) => {
        const newError = { ...(error ?? {}) };
        delete newError.apellidoMaterno;
        return newError;
      });
    }
  };
  const validarCelular = (cel) => {
    let valido = true;
    try {
      valido = phoneUtil.isValidNumber(
        phoneUtil.parseAndKeepRawInput(cel ?? patientData?.celular)
      );
    } catch (error) {
      valido = false;
    }
    if (!valido) {
      setError((error) => ({
        ...(error ?? {}),
        celular: "Celular invalido",
      }));
    } else {
      setError((error) => {
        const newError = { ...(error ?? {}) };
        delete newError.celular;
        return newError;
      });
    }
  };
  const validarCorreo = () => {
    if (
      !String(patientData.email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      setError((error) => ({ ...(error ?? {}), email: "Email invalido" }));
    } else {
      setError((error) => {
        const newError = { ...(error ?? {}) };
        delete newError.email;
        return newError;
      });
    }
  };
  const markAsEdited = (evt) => {
    setEdited({ ...edited, [evt.target.name]: true });
  };
  return (
    <div>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <TextField
          margin="dense"
          required
          id="outlined-required"
          label="Nombre"
          value={patientData.nombre}
          onBlur={markAsEdited}
          onSubmit={() => {
            console.log("submit");
          }}
          onKeyUp={validarNombre}
          name="nombre"
          onChange={updateValue}
          helperText={edited.nombre && error?.nombre}
          error={edited.nombre && error?.nombre}
        />
        <TextField
          margin="dense"
          required
          id="outlined-required"
          label="Apellido Paterno"
          name="apellidoPaterno"
          value={patientData.apellidoPaterno}
          onChange={updateValue}
          onBlur={markAsEdited}
          onKeyUp={validarApellidoPaterno}
          helperText={edited.apellidoPaterno && error?.apellidoPaterno}
          error={edited.apellidoPaterno && error?.apellidoPaterno}
        />
        <TextField
          margin="dense"
          required
          id="outlined-required"
          label="Apellido Materno"
          name="apellidoMaterno"
          value={patientData.apellidoMaterno}
          onChange={updateValue}
          onBlur={markAsEdited}
          onKeyUp={validarApellidoMaterno}
          helperText={edited.apellidoMaterno && error?.apellidoMaterno}
          error={edited.apellidoMaterno && error?.apellidoMaterno}
        />
        <PhoneInput
          defaultCountry="cl"
          value={patientData.celular}
          name="celular"
          onChange={(phone) => {
            setPatientData({ ...patientData, celular: phone });
            validarCelular(phone);
          }}
          forceDialCode={true}
          onBlur={() => markAsEdited({ target: { name: "celular" } })}
          helperText={error?.celular}
          error={error?.celular}
        />
        <FormHelperText error={error?.celular}>{error?.celular}</FormHelperText>
        <TextField
          type="email"
          margin="dense"
          required
          id="outlined-required"
          label="Email"
          value={patientData.email}
          name="email"
          onChange={updateValue}
          onBlur={markAsEdited}
          onKeyUp={validarCorreo}
          helperText={edited.email && error?.email}
          error={edited.email && error?.email}
        />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Button
          variant="outlined"
          endIcon={<ArrowForwardIosIcon />}
          onClick={goNext}
        >
          Siguiente
        </Button>
      </Box>
    </div>
  );
};

export default PatientExtraData;
