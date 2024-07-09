// import React, { useEffect, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/Context";

// const AuthMiddleware = ({ children }) => {
//   const navigate = useNavigate();
//   const [authState] = useContext(AuthContext);
//   useEffect(() => {
//     if (!authState.isAuthenticated) {
//       console.log("User not authenticated, redirecting to login");
//       navigate("/Login");
//     }
//   }, [authState, navigate]);
//   if (!authState.isAuthenticated) {
//     console.log("User x ");
//   } else {
//     console.log("User authenticated");
//   }
//   return <>{children}</>; // Render children when authenticated
// };

// export default AuthMiddleware;

import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/Context";

const AuthMiddleware = ({ children }) => {
  const navigate = useNavigate();
  const [authState] = useContext(AuthContext);

  useEffect(() => {
    if (!authState.isAuthenticated) {
      console.log("User not authenticated, redirecting to login");
      navigate("/Login");
    }
  }, [authState, navigate]);

  if (!authState.isAuthenticated) {
    console.log("User not authenticated");
    return null; // Return null if not authenticated, you can also render a loading spinner or a message
  }

  console.log("User authenticated");
  return <>{children}</>; // Render children when authenticated
};

export default AuthMiddleware;
