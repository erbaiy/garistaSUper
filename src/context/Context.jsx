import React, { createContext, useState } from "react";

const AuthContext = createContext();

const Context = ({ children }) => {
  const [authState, setAuthState] = useState({
    isAuthenticated: !!localStorage.getItem("authToken"),
  });

  return (
    <AuthContext.Provider value={[authState, setAuthState]}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, Context };
