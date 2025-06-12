// Enable Babel for JSX/ES6+ and ignore CSS imports
require("ignore-styles");
require("@babel/register")({
  presets: ["@babel/preset-env", "@babel/preset-react"],
});

console.log("🚀 server.js started");

// Core modules and React
import express from "express";
import fs from "fs";
import path from "path";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server"; 

// Components & App
import App from "../src/App";
import ErrorBoundary from "../src/components/ErrorBoundary";

// API services (adjust paths if needed)
import { PropertyList } from "../src/services/PropertList";
import { CompletedPropertyList } from "../src/services/CompletedPropertyList";
import { PageList } from "../src/services/PageList";
import { SocialMediaList } from "../src/services/SocialMediaList";
import { AdminDetail } from "../src/services/AdminDetail";
import { HomeDetail } from "../src/services/HomeDetail";
import { PropertyDetail } from "../src/services/PropertyDetail";

// Init Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static assets (JS, CSS, images)
app.use(express.static(path.resolve(__dirname, "../public")));

// Handle all routes
app.get("*", async (req, res) => {
  try {
    const url = req.url;
    // Prepare initial empty data structure
    const data = {
    homeDetailData: null,
    PropertyListData: [],
    CompletedPropertyListData: [],
    propertyDetailData: null,
    SocialMediaListData: [],
    PageListData: [],
    AdminDetailData: []
  };
  
  data.AdminDetailData = await AdminDetail();
  data.SocialMediaListData = await SocialMediaList();
  data.PropertyListData = await PropertyList();
  data.PageListData = await PageList();
  data.CompletedPropertyListData = await CompletedPropertyList();
  // Parallel fetch core data
 // Home page
if (url === "/") {
  data.homeDetailData = await HomeDetail();
} else {
  const slug = url.replace("/", "");
  const matchedProperty = data.PropertyListData.find(item => item.slug === slug);
  if (matchedProperty) {
    data.propertyDetailData = await PropertyDetail(slug);
  }
}

    // Render App to string using StaticRouter
    const appHtml = renderToString(
      <StaticRouter location={url}>
        <ErrorBoundary>
          <App data={data} />
        </ErrorBoundary>
      </StaticRouter>
    );

    // Build final HTML
    const html = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>SSR App</title>

      <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" />
      <link rel="stylesheet" href="/styles.css" />
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

    res.status(200).send(html);
  } catch (err) {
    console.error("❌ SSR Error:", err);
    res.status(500).send("Internal Server Error");
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ SSR Server listening at http://localhost:${PORT}`);
});
