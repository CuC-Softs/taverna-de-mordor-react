import React from "react";

const FloatingActionButton: React.FC = () => {
  return (
    <button className="p-0 {{button_size}} bg-{{color}} rounded-full hover:bg-{{hover}} active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
      <i className="fa-"></i>
    </button>
  );
};

export default FloatingActionButton;
