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
  const router = createHashRouter([
    {
      path: "Appointment",
      element: <AppointmentPage />,
    },
    {
      path: "/",
      element: <MainPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
