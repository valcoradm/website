import React, { useEffect, useState } from "react";
import { Checkbox, FormControlLabel, TextField } from "@mui/material";

const Patient = () => {
  const [rutOrPassport, setRutOrPassport] = useState();
  const [identificador, setIdentificador] = useState();
  return (
    <div>
      <TextField
        required
        value={rutOrPassport}
        onChange={(evt) => setRutOrPassport(evt.target.value)}
        id="outlined-required"
        label="Required"
      />
      <FormControlLabel
        control={
          <Checkbox
            defaultChecked
            checked={identificador === "rut"}
            onChange={() => {
              setIdentificador("rut");
            }}
            onBlur={()=>{
              
            }}
          />
        }
        label="Rut"
      />
      <FormControlLabel
        control={
          <Checkbox
            defaultChecked
            checked={identificador === "passport"}
            onChange={() => {
              setIdentificador("passport");
            }}
          />
        }
        label="Pasaporte"
      />
    </div>
  );
};

export default Patient;
