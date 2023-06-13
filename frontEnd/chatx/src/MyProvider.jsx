// MyProvider.js
import React from "react";
import { useState } from "react";
import MyContex from "./MyContex";

const MyProvider = ({ children }) => {
  const [userName, setUserName] = useState("");

  const contextValue = {
    userName,
    setUserName,
  };
  return (
    <MyContex.Provider value={contextValue}>
      {children}
    </MyContex.Provider>
  );
};

export default MyProvider;
