import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-white relative pt-1 border-b-2 mt-auto border-gray-800">
      <div className="container mx-auto px-6">
        <div className="mt-2 border-t-2 border-gray-300 flex flex-col items-center">
          <div className="sm:w-2/3 text-center py-6">
            <p className="text-sm text-gray-800 font-bold mb-2">
              © 2021{" "}
              <a href="https://github.com/Manuel-Antunes">Manuel-Antunes</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
