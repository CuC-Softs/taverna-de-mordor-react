import React from "react";
import { useAuth } from "../contexts/AuthContext";

const home: React.FC = () => {
  const { logout } = useAuth();

  return <div>home</div>;
};

export default home;
