import React from 'react'

interface MainProps {
  children: React.ReactNode
}

const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <div>
      { children }
      <script src="https://cdn.socket.io/4.0.1/socket.io.min.js"></script> 
    </div>
  );
};

export default Main;