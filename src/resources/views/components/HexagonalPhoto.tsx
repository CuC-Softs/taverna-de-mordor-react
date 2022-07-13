import React from "react";

const HexagonalPhoto: React.FC = () => {
  return (
    <div className="hexagon flex relative">
      <img
        className="w-full h-auto block object-cover"
        src="{{photoUrl}}"
        alt="some"
      />
      <img
        className="w-full h-auto block object-cover"
        src="{{asset('assets/images/user-avatar.jpg')}}"
        alt="some"
      />
    </div>
  );
};

export default HexagonalPhoto;
