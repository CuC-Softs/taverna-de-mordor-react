import React from "react";

const Calendar: React.FC = () => {
  return (
    <div className="antialiased sans-serif bg-gray-100">
      <script></script>
      <div>
        <div className="container mx-auto md:px-4 py-2 md:py-5 mb-10">
          <div className="font-bold text-gray-800 text-xl mb-4">
            Eventos da Taverna
          </div>

          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="flex items-center justify-between py-2 px-6">
              <div>
                <span className="text-lg font-bold text-gray-800"></span>
                <span className="ml-1 text-lg text-gray-600 font-normal"></span>
              </div>
              <div className="border rounded-lg px-1">
                <button
                  type="button"
                  className="leading-none rounded-lg transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 items-center"
                >
                  <svg
                    className="h-6 w-6 text-gray-500 inline-flex leading-none"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <div className="border-r inline-flex h-6"></div>
                <button
                  type="button"
                  className="leading-none rounded-lg transition ease-in-out duration-100 inline-flex items-center cursor-pointer hover:bg-gray-200 p-1"
                >
                  <svg
                    className="h-6 w-6 text-gray-500 inline-flex leading-none"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="-mx-1 -mb-1">
              <div className="flex flex-wrap">
                <template>
                  <div className="py-10 px-2 md:py-2">
                    <div className="text-gray-600 text-sm uppercase tracking-wide font-bold text-center"></div>
                  </div>
                </template>
              </div>

              <div className="flex flex-wrap border-t border-l">
                <template>
                  <div className="text-center border-r border-b px-4 pt-2"></div>
                </template>
                <template>
                  <div className="md:px-4 pt-2 border-r border-b relative">
                    <div className="inline-flex w-6 h-6 items-center justify-center cursor-pointer text-center leading-none rounded-full transition ease-in-out duration-100"></div>
                    <div className="overflow-y-auto mt-1">
                      <template>
                        <a className="md:px-2 py-1 rounded-lg mt-1 overflow-hidden border">
                          <p className="md:text-sm text-xs md:font-bold truncate leading-tight"></p>
                        </a>
                      </template>
                    </div>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>
        <div className="fixed z-40 top-0 right-0 left-0 bottom-0 h-full w-full">
          <div className="p-4 max-w-xl mx-auto relative left-0 right-0 overflow-hidden">
            <div className="shadow absolute right-0 top-0 w-10 h-10 rounded-full bg-white text-gray-500 hover:text-gray-800 inline-flex items-center justify-center cursor-pointer">
              <svg
                className="fill-current w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z" />
              </svg>
            </div>

            <form
              action="/events"
              method="POST"
              className="shadow rounded-lg bg-white overflow-hidden w-full block p-8 max-h-screen overflow-y-scroll"
            >
              <h2 className="font-bold text-2xl mb-6 text-gray-800 border-b pb-2">
                Criar Evento
              </h2>

              <div className="mb-4">
                <label className="text-gray-800 block mb-1 font-bold text-sm tracking-wide">
                  Titulo do Evento
                </label>
                <input
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
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                ></textarea>
              </div>

              <div className="mb-4">
                <label className="text-gray-800 block mb-1 font-bold text-sm tracking-wide">
                  Localização do Evento
                </label>
                <input
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
                  name="date"
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  type="text"
                />
              </div>

              <div className="mb-4">
                <label className="text-gray-800 block mb-1 font-bold text-sm tracking-wide">
                  Número Máximo de Mesas
                </label>
                <input
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
                    <template>
                      <option></option>
                    </template>
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
                  Criar Evento
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
