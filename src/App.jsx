import React from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/globals.css"
import Home from "./pages/Home";
import Header from "./components/Header";

const App = ({ data }) => {
  return (
    <>
    <Header adminDetail={data.AdminDetailData} propertylist={data.PropertyListData} completedPropertylist={data.CompletedPropertyListData} pageList={data.PageListData} socialList={data.SocialMediaListData}  />
    <main>
    <Routes>
      <Route path="/" element={<Home data={data.homeDetailData} />} />
    </Routes>
    </main>
    </>
  );
};

export default App;