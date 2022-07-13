import React from "react";
import Main from "../layouts/Main";

const Chat: React.FC = () => {
  return (
    <Main>
      <div className="container mx-auto">
        <div className="flex-1 p:2 sm:p-6 justify-between flex flex-col">
          <div className="flex sm:items-center justify-between py-3 border-b-2 border-gray-200">
            <div className="flex items-center space-x-4">
              <img
                src="https://s2.glbimg.com/C3GPvh6ECD-33n8Df_v1EecSL9o=/0x0:1600x1000/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2019/m/H/k84eHgTA2l7JhjO3Q6Aw/wallpaper-2560-x-1600-wallpaper.jpg"
                alt=""
                className="w-10 sm:w-16 h-10 sm:h-16 rounded-full"
              />
              <div className="flex flex-col leading-tight">
                <div className="text-2xl mt-1 flex items-center">
                  <span className="text-gray-700 mr-3"></span>
                  <span className="text-green-500">
                    <svg width="10" height="10">
                      <circle cx="5" cy="5" r="5" fill="currentColor"></circle>
                    </svg>
                  </span>
                </div>
                <span className="text-lg text-gray-600"></span>
              </div>
            </div>
          </div>
          <div
            id="messages"
            className="flex flex-col space-y-4 p-3 overflow-y-auto h-96 scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
          >
            <template>
              <div className="chat-message">
                <div>
                  <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                    <div>
                      <template>
                        <div className="flex items-end">
                          <span className="font-thin text-x text-gray-400 mx-2"></span>
                          <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white"></span>
                          <img
                            alt="My profile"
                            className="w-6 h-6 rounded-full order-1 mx-3 mt-2 align-bottom"
                          />
                        </div>
                      </template>
                      <template>
                        <div className="mx-12">
                          <div className="flex items-end">
                            <span className="font-thin text-x text-gray-400 mx-2"></span>
                            <span className="px-4 py-2 rounded-lg inline-block bg-blue-600 text-white"></span>
                          </div>
                        </div>
                      </template>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </div>
          <div className="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
            <div className="relative flex">
              <textarea
                placeholder="Mensagem"
                className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-10 pr-16 py-3 bg-gray-200 rounded-full"
              ></textarea>
              <div className="absolute right-0 items-center inset-y-0 flex">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-6 w-6 transform rotate-90"
                  >
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};
export default Chat;
