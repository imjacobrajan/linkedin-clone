import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { router } from "./Routes/index.jsx";
import { RouterProvider } from "react-router-dom";
import { app } from "./firebaseConfig";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>
);
