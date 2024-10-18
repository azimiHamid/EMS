/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { getFromLocalStorage, setToLocalStorage } from "../utils/storage.js";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Check if data exists in localStorage, if not, set it
    const localStorageData = getFromLocalStorage();
    if (!localStorageData.employees || !localStorageData.admin) {
      setToLocalStorage(); // Set the data only if it's missing
    }

    const { employees, admin } = getFromLocalStorage();
    setUserData({ employees, admin });
  }, []);

  if (!userData) {
    return <div>Loading...</div>; // Handle loading state
  }

  return (
    <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
