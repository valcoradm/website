import React from "react";
import { createBrowserRouter, createHashRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/Main";
import AppointmentPage from "./pages/Appointment";

function App() {
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
