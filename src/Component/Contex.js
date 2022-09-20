import React, { useState, useContext } from "react";

const AppContex = React.createContext();

const AppProvider = ({ children }) => {
  let userArray = getLocalStorage();

  const [userIdentity, setUserIdentity] = useState(0);
  const [editIndex, setEditIndex] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <AppContex.Provider
      value={{
        userArray,
        userIdentity,
        setUserIdentity,
        editIndex,
        setEditIndex,
        isEditing,
        setIsEditing,
      }}
    >
      {children}
    </AppContex.Provider>
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
