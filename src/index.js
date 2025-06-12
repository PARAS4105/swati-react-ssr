// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorBoundary from "./components/ErrorBoundary";
import { hydrateRoot } from "react-dom/client";




const data = window.__INITIAL_DATA__ || {};
console.log("📦 Hydration received data:", data); // You should see real data here

hydrateRoot(
  document.getElementById("root"),
  <BrowserRouter>
    <ErrorBoundary>
      <App data={data} />
    </ErrorBoundary>
  </BrowserRouter>
);

if (typeof window !== "undefined") {
  delete window.__INITIAL_DATA__;
}