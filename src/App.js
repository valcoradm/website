import React, { useEffect } from "react";
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import MainPage from "./pages/Main";
import AppointmentPage from "./pages/Appointment";
import ValcorApi from "./api/ValcorApi";

function App() {
  window.sucursales = {
    loading: false,
    loaded: false,
    data: [],
  };
  useEffect(() => {
    if (!window.sucursales.loading) {
      window.sucursales.loading = true;
      ValcorApi.getSucursales()
        .then((data) => {
          window.sucursales.data = data;
          window.sucursales.loaded = true;
          window.sucursales.loading = false;
        })
        .catch((ex) => {
          window.$(".wz").hide();
        });
    }
  }, []);

  const browserRouter = createBrowserRouter([
    {
      path: "Appointment",
      element: <AppointmentPage />,
    },
    {
      path: "/",
      element: (window?.location?.hash?.toLowerCase())  === '#appointment' ? <AppointmentPage /> : <MainPage />,
    },
    {
      path: "*",
      element: <MainPage />,
    },
  ]);

  return <RouterProvider router={browserRouter} />;
}

export default App;
