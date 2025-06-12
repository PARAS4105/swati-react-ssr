// App.jsx
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./styles/App.css";

const App = (props) => {
  const [data, setData] = useState(() => {
    // Use server-passed props if available (SSR)
    if (props.data) return props.data;
    // Use window data on client if available (hydration)
    if (typeof window !== "undefined" && window.__INITIAL_DATA__) {
      return window.__INITIAL_DATA__;
    }
    return null; // default
  });

  // Optional: remove window data after hydration to avoid memory leaks
  useEffect(() => {
    if (typeof window !== "undefined") {
      delete window.__INITIAL_DATA__;
    }
  }, []);

  return (
    <Routes>
  <Route path="/" element={<Home data={data} />} />
  <Route path="*" element={<Home data={data} />} />
</Routes>

  );
};

export default App;
