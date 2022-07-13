import React from "react";
import Main from "../layouts/Main";

const Edit: React.FC = () => {
  return (
    <Main>
      <form
        action="/events/{{event.id}}?_method=PUT"
        method="POST"
        className="shadow rounded-lg bg-white mx-auto container md:w-3/4 my-7 block p-8 "
      >
        <h2 className="font-bold text-2xl mb-6 text-gray-800 border-b pb-2">
          Atualizar Evento
        </h2>

        <div className="mb-4">
          <label className="text-gray-800 block mb-1 font-bold text-sm tracking-wide">
            Titulo do Evento
          </label>
          <input
            value="{{event.name}}"
            name="name"
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            type="text"
          />
        </div>

        <div className="mb-4">
          <label className="text-gray-800 block mb-1 font-bold text-sm tracking-wide">
            Descrição do Evento
          </label>
          <textarea
            name="description"
            className="bg-gray-200 h-36 appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="text-gray-800 block mb-1 font-bold text-sm tracking-wide">
            Localização do Evento
          </label>
          <input
            value="{{event.location}}"
            name="location"
            placeholder="Casa, Rua, Bairro, Cidade..."
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            type="text"
          />
        </div>

        <div className="mb-4">
          <label className="text-gray-800 block mb-1 font-bold text-sm tracking-wide">
            Data do Evento
          </label>
          <input
            value="{{event.date}}"
            name="date"
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            type="date"
          />
        </div>

        <div className="mb-4">
          <label className="text-gray-800 block mb-1 font-bold text-sm tracking-wide">
            Número Máximo de Mesas
          </label>
          <input
            value="{{event.maxBoards}}"
            name="maxBoards"
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            type="number"
          />
        </div>

        <div className="inline-block w-64 mb-4">
          <label className="text-gray-800 block mb-1 font-bold text-sm tracking-wide">
            Tema do evento
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border-2 border-gray-200 hover:border-gray-500 px-4 py-2 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-blue-500 text-gray-700"
              name="theme"
            >
              <option value="{{theme.value}}"></option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="mt-8 text-right">
          <button
            type="button"
            className="bg-white hover:bg-gray-100 text-gray-700 font-semibold py-2 px-4 border border-gray-300 rounded-lg shadow-sm mr-2"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 border border-gray-700 rounded-lg shadow-sm"
          >
            Atualizar Evento
          </button>
        </div>
      </form>
    </Main>
  );
};

export default Edit;
