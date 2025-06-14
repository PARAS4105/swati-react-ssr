import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Detail from "./pages/Detail"
import "../public/styles/globals.css"
if (typeof window !== "undefined") {
  import("@fancyapps/ui/dist/fancybox/fancybox.css");
}
const App = ({ data }) => {
  return (
    <>
    <Header adminDetail={data.AdminDetailData} propertylist={data.PropertyListData} completedPropertylist={data.CompletedPropertyListData} pageList={data.PageListData} socialList={data.SocialMediaListData}  />
    <main>
    <Routes>
      <Route path="/" element={<Home homeDetails={data.homeDetailData} propertylist={data.PropertyListData} completedPropertylist={data.CompletedPropertyListData} />} />
      <Route path="/:slug" element={<Detail propertylist={data.PropertyListData} completedPropertylist={data.CompletedPropertyListData} />} />
    </Routes>
    </main>
    <Footer adminDetail={data.AdminDetailData} propertylist={data.PropertyListData} completedPropertylist={data.CompletedPropertyListData} pageList={data.PageListData} socialList={data.SocialMediaListData}  />

    </>
  );
};

export default App;