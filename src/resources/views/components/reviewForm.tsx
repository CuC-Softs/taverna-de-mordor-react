import React from "react";
import { FaStarHalfAlt, FaStar } from "react-icons/fa";

const ReviewForm: React.FC = () => {
  return (
    <form action="/{{element}}/{{id}}/reviews" method="POST">
      <input type="hidden" name="senderId" value="{{auth.user?.id}}" />
      <div className="flex flex-wrap space-x-3">
        <div>
          <span className="font-normal ml-2 text-white">Avalie:</span>
        </div>
        <div>
          <div
            className="rate flex cursor-pointer"
          >
            <input
              type="number"
              step="any"
              name="rating"
              className="hidden"
            />
            <div className="pr-1">
              <span className="text-gray-400 hover:text-gray-700">⨯</span>
            </div>
            <FaStarHalfAlt className="text-gray-400 transition duration-150 text-base" />
            <FaStar className="text-gray-400 transition duration-150 text-base" />
            <FaStarHalfAlt className="text-gray-400 transition duration-150 text-base" />
            <FaStar className="text-gray-400 transition duration-150 text-base" />
            <FaStarHalfAlt className="text-gray-400 transition duration-150 text-base" />
            <FaStar className="text-gray-400 transition duration-150 text-base" />
            <FaStarHalfAlt className="text-gray-400 transition duration-150 text-base" />
            <FaStar className="text-gray-400 transition duration-150 text-base" />
            <FaStarHalfAlt className="text-gray-400 transition duration-150 text-base" />
            <FaStar className="text-gray-400 transition duration-150 text-base" />
          </div>
        </div>
      </div>
      <div>
        <div>
          <textarea
            id="content"
            className="w-full h-24 sm:h-full border-0 p-3 placeholder-gray-600 resize-none mt-1 text-white bg-gray-900 rounded shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
            name="comment"
            placeholder="Digite seu comentário aqui..."
          ></textarea>
          <div className="flex justify-between w-auto">
            <div>
              <span className="text-2xs text-gray-500"></span>
            </div>
            <button type="submit">
              <svg
                width="30"
                height="27"
                viewBox="0 0 30 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_509_1389)">
                  <path
                    d="M6.59141 20.625L23.2085 13.5L6.59141 6.375L6.5835 11.9167L18.4585 13.5L6.5835 15.0833L6.59141 20.625Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_509_1389"
                    x="0.583496"
                    y="0.375"
                    width="28.625"
                    height="26.25"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="3" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_509_1389"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_509_1389"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ReviewForm;
