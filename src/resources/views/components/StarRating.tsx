import React from "react";
import { FaStar } from "react-icons/fa";

const StarRating: React.FC = () => {
  return (
    <div className="flex cursor-pointer">
      <input type="number" name="rating" className="hidden" />
      <template>
        <span className="text-gray-400 hover:text-gray-700 space-x-1">⨯</span>
      </template>
      <template>
        <FaStar className="text-yellow-400" />
      </template>
    </div>
  );
};

export default StarRating;
