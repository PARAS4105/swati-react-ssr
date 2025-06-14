import React from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/globals.css"
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Detail from "./pages/Detail"
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
      <Route path="/:slug" element={<Detail data={data.propertyDetailData} />} />
    </Routes>
    </main>
    <Footer adminDetail={data.AdminDetailData} propertylist={data.PropertyListData} completedPropertylist={data.CompletedPropertyListData} pageList={data.PageListData} socialList={data.SocialMediaListData}  />

    </>
  );
};

export default App;