import React from "react";
import Main from "../layouts/Main";

const BoardCreate: React.FC = () => {
  return (
    <Main>
      <form
        action="/boards"
        method="POST"
        className=" container rounded-lg bg-white w-full block p-8 md:max-w-3xl my-7 mx-auto relative overflow-hidden shadow-xl"
      >
        <div className="flex">
          <i className="fas fa-dice-d20 text-2xl mr-3"></i>
          <h2 className="font-bold text-2xl mb-6 text-gray-800 pb-2">
            Criar Mesa
          </h2>
        </div>

        <div className="mb-4">
          <label className="text-gray-800 block mb-1 font-bold text-sm tracking-wide">
            Titulo da Mesa
          </label>
          <input
            name="name"
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            type="text"
          />
        </div>

        <div className="mb-4">
          <label className="text-gray-800 block mb-1 font-bold text-sm tracking-wide">
            Sistema
          </label>
          <select
            name="systemId"
            className="block appearance-none w-full bg-gray-200 border-2 border-gray-200 hover:border-gray-500 px-4 py-2 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-blue-500 text-gray-700"
          >
            <option value="">Selecione um sistema</option>
            <option value="{{system.id}}"></option>
          </select>
        </div>

        <div className="mb-4">
          <label className="text-gray-800 block mb-1 font-bold text-sm tracking-wide">
            Máximo de Jogadores
          </label>
          <input
            name="maxPlayers"
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            type="number"
          />
        </div>
        <input name="masterId" type="hidden" value="{{auth.user.id}}" />

        <div className="mb-4">
          <label className="text-gray-800 block mb-1 font-bold text-sm tracking-wide">
            Sessão Atual
          </label>
          <input
            name="currentSection"
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            type="number"
          />
        </div>

        <div className="mt-8 text-right">
          <button
            type="button"
            className="bg-white hover:bg-gray-100 text-gray-700 font-semibold py-2 px-4 border border-gray-300 rounded-lg shadow-sm mr-2"
          >
            <a href="/boards">Cancelar</a>
          </button>
          <button
            type="submit"
            className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 border border-gray-700 rounded-lg shadow-sm"
          >
            Criar Mesa
          </button>
        </div>
      </form>
    </Main>
  );
};

export default BoardCreate;
