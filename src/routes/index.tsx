import React from "react";
import AuthRoutes from "./AuthRoutes";
import AppRoutes from "./AppRoutes";
import { Flowbite } from "flowbite-react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider, useAuth } from "../contexts/AuthContext";

const Routes: React.FC = () => {
  const { signed } = useAuth();

  return (
    <BrowserRouter>
      <AuthProvider>
        <Flowbite theme={{ dark: true }}>
          <div>{signed ? <AppRoutes /> : <AuthRoutes />}</div>
        </Flowbite>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default Routes;
