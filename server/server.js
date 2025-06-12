require("ignore-styles");
require("@babel/register")({
  presets: ["@babel/preset-env", "@babel/preset-react"],
});

console.log("🚀 server.js started");

import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import App from "../src/App";
import ErrorBoundary from "../src/components/ErrorBoundary";
import fs from "fs";
import path from "path";
import { StaticRouter } from "react-router"; 
import { PropertyList } from "../src/services/PropertyList.js";

const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.get("*", async (req, res) => {

  // console.log("🔥 Incoming request to:", req.url);
  // res.send("<h1>Basic Check OK</h1>");

  try {
    const data = await PropertyList(); // ✅ now returns actual data  
    console.log("✅ Data received in server.js before rendering:", data);
    
    const appHtml = renderToString(
      <StaticRouter location={req.url}>
        <ErrorBoundary>
          <App data={data} />
        </ErrorBoundary>
      </StaticRouter>
    );

    const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>SSR App</title>
      </head>
      <body>
        <div id="root">${appHtml}
        </div>
      
        <script>
            window.__INITIAL_DATA__ = ${JSON.stringify(data)};
        </script>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `;

  res.send(html);
  } catch (error) {
    console.error("SSR Error:", error);
    res.status(500).send("Something went wrong");
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ SSR server running at http://localhost:${PORT}`);
});
