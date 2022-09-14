import React, { useState, useContext, useEffect } from "react";

const AppContex = React.createContext();

const AppProvider = ({ children }) => {
  const userArray = getLocalStorage();

  return (
    <AppContex.Provider value={{ userArray }}>{children}</AppContex.Provider>
  );
};

const getLocalStorage = () => {
  let item = localStorage.getItem("userAccount");
  if (item) {
    return (item = JSON.parse(localStorage.getItem("userAccount")));
  }
  return [];
};

export const useGlobalContext = () => {
  return useContext(AppContex);
};
export { AppProvider };
