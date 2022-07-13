import React from "react";
import Footer from "../partials/Footer";
import Navbar from "../partials/Navbar";

interface MainProps {
  children: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
      <script src="https://cdn.socket.io/4.0.1/socket.io.min.js"></script>
    </div>
  );
};

export default Main;
