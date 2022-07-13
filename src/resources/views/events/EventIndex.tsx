import React from "react";
import Main from "../layouts/Main";

const EventIndex: React.FC = () => {
  return (
    <Main>
      <div className="container mx-auto mt-10 rounded-lg px-2 py-10 md:px-6 shadow-2xl w-full ">
        <h1 className="font-bold text-3xl "></h1>
        <div className="md:mx-24 lg:flex">
          <div className="flex m-5 items-center">
            <div className=" flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="font-bold mr-28 md:mr-16">Data: </span>
            </div>
            <p className="flex italic bg-gray-100 p-5 h-auto px-5 rounded-lg shadow-md w-1/3 md:w-2/3"></p>
            <br />
          </div>
          <div className=" flex m-5">
            <div className=" flex items-center">
              <i className="fas fa-dice text-lg mr-2"></i>
              <div className="md:flex mr-5">
                <span className="font-bold mr-0.5 md:mr-1.5"> Máximo </span>
                <span className="font-bold mr-0.5 md:mr-1.5"> de</span>
                <span className="font-bold -mr-2 md:mr-0"> mesas: </span>
              </div>
            </div>
            <p className="flex bg-gray-100 p-5 md:px-14 items-center rounded-lg shadow-md w-1/3  md:w-2/3 h-auto"></p>
            <br />
          </div>
          <div className=" flex m-5 items-center">
            <div className=" flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="font-bold mr-16 md:mr-7 ">Localização: </span>
            </div>
            <p className="flex h-auto bg-gray-100 p-5 px-5 rounded-lg shadow-md w-1/3 md:w-2/3"></p>
            <br />
          </div>
        </div>
        <div className="md:flex m-5 mb-10">
          <div className="flex md:mx-24 w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <div className="w-full">
              <span className="font-bold mr-6 mb-5 md:mb-9">Descrição: </span>
              <p className="md:flex bg-gray-100 p-5 w-full  rounded-lg shadow-md lg:w-full"></p>
              <br />
            </div>
          </div>
        </div>
        <div className="flex space-x-2 ml-5">
          <form action="/events/{{event.id}}?_method=DELETE" method="post">
            <button
              className="bg-red-600 text-white px-5 py-3 rounded-md hover:bg-red-700"
              type="submit"
            >
              Deletar Evento
            </button>
          </form>
          <a href="/events/{{event.id}}/edit">
            <button
              className="bg-green-600 text-white px-5 py-3 rounded-md hover:bg-green-700"
              type="submit"
            >
              Editar Evento
            </button>
          </a>
        </div>
      </div>
      <div className="border bg-white  container mx-auto rounded-lg px-2 py-1 my-3 mt-7 md:mb-16 md:py-10 shadow-2xl">
        <div className="flex m-5 space-x-3">
          <i className="text-2xl fas fa-dice "></i>
          <h2 className="font-bold text-2xl">Mesas do Evento:</h2>
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
      </div>
    </Main>
  );
};

export default EventIndex;
