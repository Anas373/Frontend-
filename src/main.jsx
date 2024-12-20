import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App"
import Dashborde from "./Component/Dashborde"
import Inscription from "./Component/Inscription";
import Reservation from "./Component/Reserver"
import Medcin from "./Component/Medcin"
import Forgetpass from "./Component/Forgetpass"
import ResetPassword from "./Component/Resetpass";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
  },
  {
    path: "/Inscription",
    element:<Inscription/>,
  },
  {
    path: "/Reserver/:id",
    element:<Reservation/>,
  },
  {
    path: "/Medcin",
    element:<Medcin/>,
  },
 {
  path: "Forgetpass",
  element:<Forgetpass/>,
 },
    

 {
  path: "ResetPassword",
  element:<ResetPassword/>,
 },
  {
    path: "/Dashborde/:id",
    element:<Dashborde/>,
  }
 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
