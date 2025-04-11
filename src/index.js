import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals"; // Asegúrate de que esta línea esté correcta.

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// Si no necesitas `reportWebVitals`, puedes eliminar esta parte.
reportWebVitals();
