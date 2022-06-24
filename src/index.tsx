import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { GlobalStyles, theme } from "./theme";
import App from "./App";
import { ThemeProvider } from "styled-components";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyles />
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
