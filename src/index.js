import React from "react";
import ReactDOM from "react-dom/client";
import style from "./styles/style.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(<App name="Saeloun blog" />);


reportWebVitals();
