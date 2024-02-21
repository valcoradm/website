import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Check from "@mui/icons-material/Check";
import ListAltIcon from "@mui/icons-material/ListAlt";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TodayIcon from "@mui/icons-material/Today";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { AccountCircle } from "@mui/icons-material";
import { useAppointmentProvider } from "../../../hooks/AppointmentContext";

const QontoStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
  display: "flex",
  height: 22,
  alignItems: "center",
  ...(ownerState.active && {
    color: "#784af4",
  }),
  "& .QontoStepIcon-completedIcon": {
    color: "#784af4",
    zIndex: 1,
    fontSize: 18,
  },
  "& .QontoStepIcon-circle": {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
};

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      background:
        "#E97417",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      background:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    background:
      "#E97417",
    boxShadow: "0 4px 10px 0 rgba(233,116,23,.25)",
  }),
  ...(ownerState.completed && {
    background:
      "#E97417",
  }),
}));

function ColorlibStepIcon(props) {
  const { dispatch } = useAppointmentProvider();
  const goTo = (target, completed) => () => {
    if(!completed) return;
    const pageIdByStep = {
      1: 0,
      2: 2,
      3: 3,
      4: 4,
    }
    const pageId = pageIdByStep[target];
    if(pageId === null || pageId === undefined) return;
    dispatch({
      type: "APPOINTMENT_FORCE_STEP",
      payload: { step: pageId, goToEnd: false },
    });
  };
  const { active, completed, className } = props;

  const icons = {
    1: <AccountCircle />,
    2: <LocationOnIcon />,
    3: <TodayIcon />,
    4: <BookmarkAddedIcon />,
  };

  return (
    <>
      <ColorlibStepIconRoot
        ownerState={{ completed, active }}
        className={className}
        toGoId="1"
        onClick={goTo(props.icon, completed)} 
      >
        {icons[String(props.icon)]}
      </ColorlibStepIconRoot>
    </>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const steps = ["Identificación", "Sucursal", "Hora", "Confirmación"];

export default function Steppers({ step }) {
  const { state } = useAppointmentProvider();
  const stateMap = {
    0: 0,
    1: 0,
    2: 1,
    3: 2,
    4: 3,
  };
  return (
    <Stack sx={{ width: "100%" }}  style={{marginBottom: '10px', marginTop: '20px'}} spacing={4}>
      <Stepper
        alternativeLabel
        activeStep={stateMap[state.step]}
        connector={<ColorlibConnector />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
}
