import { createContext } from "react";
import { setUserLocalStorage } from "./util";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  async function authenticate(response) {
    if (response !== undefined) {
      setUserLocalStorage(response);
    }
  }

  const contextValue = {
    authenticate,
    accessToken: "",
    type: "",
    refreshToken: "",
    id: 0,
    username: "",
    email: "",
    roles: ["", ""],
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};