import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import MyRoutes from "./routes/MyRoutes";
import ContextProvider from "./context/context";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <BrowserRouter>
        <MyRoutes />
      </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
