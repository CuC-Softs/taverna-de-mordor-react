import React from "react";
import AuthRoutes from "./AuthRoutes";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
          <AuthRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
};

export default Routes;
