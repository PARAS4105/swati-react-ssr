// index.js
import React from "react";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorBoundary from "./components/ErrorBoundary";

const data = window.__INITIAL_DATA__ || {};

hydrateRoot(
  document.getElementById("root"),
  <BrowserRouter>
    <ErrorBoundary>
      <App data={data} />
    </ErrorBoundary>
  </BrowserRouter>
);