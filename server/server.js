import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import App from "../src/App.jsx";
import fs from "fs";
import path from "path";

const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  const appHtml = renderToString(<App />);
  const htmlTemplate = fs.readFileSync(
    path.resolve("public/index.html"),
    "utf8"
  );
  const finalHtml = htmlTemplate.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`
  );
  res.send(finalHtml);
});

app.listen(PORT, () => {
  console.log(`SSR server running at http://localhost:${PORT}`);
});
