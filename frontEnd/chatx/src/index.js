import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import UserN from "./UserN";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyProvider from "./MyProvider";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <MyProvider>
      <Routes>
        <Route path="/" element={<UserN />} />
        <Route path="/Chat" element={<App />} />
      </Routes>
    </MyProvider>
  </BrowserRouter>
);
