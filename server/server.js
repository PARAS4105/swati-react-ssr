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
    console.log("🚀 [SSR] Incoming request:", req.url);


    // Determine slug: if root, slug = null
    // const parts = req.path.split("/").filter(Boolean); // remove empty strings

      // If no parts => home
      // If one part => that's the slug
      // If more than one part => probably invalid => 404 or fallback
      // let slug = null;

      // if (parts.length === 1) {
      //   slug = parts[0];
      // } else if (parts.length > 1) {
      //   console.log(`⚠️ Unexpected nested path: ${req.path}`);
      //   res.status(404).send("Page Not Found");
      //   return;
      // }

  // console.log("✅ Slug:", slug);

    // Prepare data object
    const data = {
      homeDetailData: null,
      PropertyListData: [],
      CompletedPropertyListData: [],
      SocialMediaListData: [],
      PageListData: [],
      AdminDetailData: []
    };

    // Fetch common data in parallel
    const [
      adminData,
      socialData,
      propertyList,
      pageList,
      completedList
    ] = await Promise.all([
      AdminDetail(),
      SocialMediaList(),
      PropertyList(),
      PageList(),
      CompletedPropertyList()
    ]);

    data.AdminDetailData = adminData;
    data.SocialMediaListData = socialData;
    data.PropertyListData = propertyList;
    data.PageListData = pageList;
    data.CompletedPropertyListData = completedList;

    if (req.url === "/") {
      data.homeDetailData = await HomeDetail();
    } 
    // } else if(slug) {
    //   data.propertyDetailData = await PropertyDetail(slug);
    //   if (!data.propertyDetailData) {
    //     console.log(`⚠️ No property found for slug "${slug}". Sending 404.`);
    //     res.status(404).send("Page Not Found");
    //     return;
    //   }
    // }else {
    //   res.status(404).send("Page Not Found");
    //   return;
    // }

    // ✅ Render React to string with StaticRouter
    const appHtml = renderToString(
      <StaticRouter location={req.url}>
        <ErrorBoundary>
          <App data={data} />
        </ErrorBoundary>
      </StaticRouter>
    );

    // ✅ Inject to final HTML
    const html = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>SSR App</title>
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          	<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,500,0,0" />
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
// app.get("/:slug", ssrHandler );



let server;
function startServer() {
  const PORT = process.env.PORT || 3000;
  server = app.listen(PORT, () => {
    console.log(`✅ SSR Server listening at http://localhost:${PORT}`);
    
  });
}
startServer();
// Handle hot reload
if (module.hot) {
  module.hot.dispose(() => server && server.close());
}