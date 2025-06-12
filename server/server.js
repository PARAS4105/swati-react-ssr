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
import { PropertyList  } from "../src/services/PropertList";
import { CompletedPropertyList  } from "../src/services/CompletedPropertyList";
import { PageList } from "../src/services/PageList";
import { SocialMediaList } from "../src/services/SocialMediaList";
import { AdminDetail } from "../src/services/AdminDetail";
import { HomeDetail } from "../src/services/HomeDetail";



const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.get("*", async (req, res) => {
  try {

    const isHomePage = req.url === "/";
    
    const [AdminDetailData , PropertyListData, CompletedPropertyListData , PageListData  , SocialMediaListData] = await Promise.all([
      AdminDetail(),
       PropertyList(),
       CompletedPropertyList(),
       PageList(),
       SocialMediaList(),
     ]);
    const homeDetailData = isHomePage ? await HomeDetail() : null;

    const data = { 
      AdminDetailData ,
      PropertyListData, 
      CompletedPropertyListData, 
      PageListData, 
      SocialMediaListData ,
      ...(homeDetailData && { homeDetailData })};
    
    const appHtml = renderToString(
      <StaticRouter location={req.url}><ErrorBoundary><App data={data} /></ErrorBoundary></StaticRouter>
    );

    const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>SSR App</title>
        <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" />
      </head>
      <body>
        <div id="root">${appHtml}</div>
        <script>
          window.__INITIAL_DATA__ = ${JSON.stringify(data).replace(/</g, '\\u003c')};
        </script>
        <script src="/bundle.js?v=${Date.now()}"></script>
      </body>
    </html>
  `;

  res.send(html);
  } catch (error) {
    console.error("SSR Error:", error);
    res.status(500).send("Something went wrong");
  }
});

app.listen(PORT, () => {
  console.log(`✅ SSR server running at http://localhost:${PORT}`);
});
