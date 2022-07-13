import React from "react";
import Main from "../layouts/Main";

const BoardList: React.FC = () => {
  return (
    <Main>
      <section className="container mx-auto">
        <div className="px-5 py-14">
          <div className="flex flex-wrap w-full mb-4 -ml-1 m-5 p-4 md:space-x-3">
            <div className="w-full flex md:mb-2 lg:mb-0 md:mx-auto">
              <i className="lg:text-6xl md:text-5xl md:mt-2 lg:mt-0 sm:text-5xl text-3xl mt-1 sm:mt-1 mr-2 sm:mr-3 ml-2 fas fa-dice-d20 text-gray-800"></i>
              <h1 className="title-font font-extrabold text-gray-800 text-2xl sm:mt-0 mt-1.5 sm:text-5xl md:text-6xl">
                Mesas da taverna
              </h1>
            </div>
            <div className="h-0.5 sm:h-1 w-40 ml-2 sm:ml-0 lg:w-72 md:w-64 sm:w-60 lg:mt-3 sm:mt-2 mt-0.5 bg-gray-800 rounded"></div>
          </div>
          <div className="md:grid md:grid-cols-2 xl:grid-cols-3 md:space-x-3 ">
            <section className="ml-5 py-10">
              <p className="text-xl"> Oops! Sem mesas registradas.</p>
              <a
                className="text-blue-700 hover:text-blue-500 flex"
                href="/boards/create"
              >
                <p> Clique aqui para criar uma mesa</p>
              </a>
            </section>
          </div>
          <div className="sticky flex justify-end bottom-16 xl:p-10 right-10 md:right-20 z-50">
            <a href="/boards/create">
              <i className="fas fa-plus text-white"></i>
            </a>
          </div>
        </div>
      </section>
      <div className="flex justify-center">
        <div>
          <ul className="flex pl-0 list-none rounded my-2">
            <li>
              <a
                className="page-link w-full h-full"
                href="/boards{{boards.getPreviousPageUrl()}}"
              >
                <button className="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 border-r-0 ml-0 rounded-l hover:bg-gray-200">
                  Anterior
                </button>
              </a>
            </li>
            <li>
              <a
                className="page-link w-full h-full"
                href="/boards{{boards.getPreviousPageUrl()}}"
              >
                <button
                  disabled
                  className="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 border-r-0 ml-0 rounded-l opacity-50 cursor-not-allowed"
                >
                  Anterior
                </button>
              </a>
            </li>
            <li>
              <a
                className="page-link w-full h-full"
                href="/boards{{anchor.url}}"
              >
                <button className="relative block py-2 px-3 leading-tight bg-blue-500 border border-gray-300 text-white border-r-0"></button>
              </a>
            </li>
            <li>
              <a
                className="page-link w-full h-full"
                href="/boards{{boards.getNextPageUrl()}}"
              >
                <button className="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 rounded-r hover:bg-gray-200">
                  Próximo
                </button>
              </a>
            </li>
            <li>
              <a
                className="page-link w-full h-full"
                href="/boards{{boards.getNextPageUrl()}}"
              >
                <button
                  disabled
                  className="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 rounded-r opacity-50 cursor-not-allowed"
                >
                  Próximo
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Main>
  );
};

export default BoardList;
