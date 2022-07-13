import React from "react";
import Main from "../layouts/Main";

const BoardIndex: React.FC = () => {
  return (
    <Main>
      <section
        className="bg-gray-900 h-full"
        x-data="{contentId:1, openModal:false}"
      >
        <div>
          <img
            className="h-full absolute object-cover w-full"
            src="{{board.system.photoUrl}}"
            alt=""
          />
          <img
            className="h-full absolute object-cover w-full"
            src="{{asset('assets/images/cover-rpg.jpg')}}"
            alt=""
          />
        </div>

        <div className="flex h-10 justify-end items-center p-5 sm:p-7 md:p-10">
          <div className="absolute mr-8 sm:mr-12 md:mr-14 lg:mr-16">
            <a href="/boards/{{board.id}}/edit">
              <i className="fas fa-pen text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white"></i>
            </a>
          </div>
          <div className="absolute">
            <a href="">
              <i className="fas fa-share-square text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white"></i>
            </a>
          </div>
        </div>

        <div className="relative mx-auto sm:mx-auto md:mt-9 sm:mt-6 mt-3 max-w-full w-64 sm:w-83 md:w-130 lg:w-200 p-3 sm:p-3 md:p-6 flex flex-col sm:text-sm md:text-xl lg:text-2xl text-xs rounded text-white">
          <div className="justify-between text-right flex">
            <div className="lg:space-x-1.5 flex flex-1">
              <i className="fas fa-dice sm:text-sm md:text-base lg:text-xl text-white"></i>
              <span>Nome: </span>
            </div>
            <div>
              <span></span>
            </div>
          </div>
          <div className="justify-between text-right flex">
            <div className="space-x-1 lg:space-x-3 flex flex-1">
              <i className="fas fa-dice-d20 sm:text-sm lg:text-xl md:text-base text-white"></i>
              <span>Sistema: </span>
            </div>
            <div>
              <span></span>
            </div>
          </div>
          <div className="justify-between text-right flex">
            <div className="space-x-0.5 lg:space-x-1.5 flex flex-1">
              <i className="fas fa-gamepad sm:text-xs md:text-sm lg:text-base text-3xs text-white"></i>
              <span>Jogadores: </span>
            </div>
            <div>
              <span></span>
            </div>
          </div>
          <div className="justify-between text-right flex">
            <div className="space-x-1 lg:space-x-3 flex flex-1">
              <i className="fas fa-chess-king sm:text-sm md:text-base lg:text-xl text-white"></i>
              <span>Mestre: </span>
            </div>
            <div>
              <span></span>
            </div>
          </div>
          <div className="justify-between text-right flex">
            <div className="space-x-1 lg:space-x-3 flex flex-1">
              <i className="fas fa-calendar-day sm:text-sm md:text-base lg:text-xl text-white"></i>
              <span>Próxima sessão: </span>
            </div>
          </div>
        </div>

        <div className="relative pb-3 sm:pb-5 mx-auto lg:w-230 md:w-200 sm:w-130 md:mt-12 sm:mt-8 mt-5 max-w-full w-100 text-xs md:text-lg flex flex-wrap sm:justify-around justify-center space-x-3">
          <div>
            <template x-if="contentId==1">
              <button
                disabled
                className="bg-white text-black sm:rounded-lg rounded-md button-clicked lg:w-40 md:w-36 sm:w-32 sm:h-8 md:h-10 w-18 h-6"
                x-transition
              >
                Visão geral
              </button>
            </template>
            <template x-if="contentId!=1">
              <button
                className="bg-gray-700 text-white sm:rounded-lg rounded-md button-clicked lg:w-40 md:w-36 sm:w-32 sm:h-8 md:h-10 w-18 h-6"
                x-transition
              >
                Visão geral
              </button>
            </template>
          </div>
          <div>
            <template x-if="contentId==2">
              <button
                disabled
                className="bg-white text-black sm:rounded-lg rounded-md button-clicked lg:w-40 md:w-36 sm:w-32 sm:h-8 md:h-10 w-18 h-6"
              >
                Membros
              </button>
            </template>
            <template x-if="contentId!=2">
              <button className="transition ease-in-out delay-150 bg-gray-700 sm:rounded-lg rounded-md text-white button-clicked lg:w-40 md:w-36 sm:w-32 sm:h-8 md:h-10 w-18 h-6">
                Membros
              </button>
            </template>
          </div>
          <div>
            <template x-if="contentId==3">
              <button
                disabled
                className="bg-white text-black sm:rounded-lg rounded-md button-clicked lg:w-40 md:w-36 sm:w-32 sm:h-8 md:h-10 w-18 h-6"
              >
                Sessões
              </button>
            </template>
            <template x-if="contentId!=3">
              <button className="bg-gray-700 sm:rounded-lg rounded-md text-white button-clicked lg:w-40 md:w-36 sm:w-32 sm:h-8 md:h-10 w-18 h-6">
                Sessões
              </button>
            </template>
          </div>
          <div>
            <template x-if="contentId==4">
              <button
                disabled
                className="bg-white text-black sm:rounded-lg rounded-md button-clicked lg:w-40 md:w-36 sm:w-32 sm:h-8 md:h-10 w-18 h-6"
              >
                Avaliações
              </button>
            </template>
            <template x-if="contentId!=4">
              <button className="bg-gray-700 text-white sm:rounded-lg rounded-md button-clicked lg:w-40 md:w-36 sm:w-32 sm:h-8 md:h-10 w-18 h-6">
                Avaliações
              </button>
            </template>
          </div>
        </div>
      </section>

      <section className="block max-w-full mx-auto min-h-screen">
        <div x-show="contentId===1" className="mx-auto mt-7 max-w-full w-4/5">
          <div className="mx-auto max-w-full w-80 p-2 sm:w-96 md:w-110 pt-1 px-4 sm:p-3 md:p-4 bg-gray-800">
            <div className="flex flex-wrap justify-between">
              <div>
                <span className="text-white text-xs sm:text-base sm:ml-3 md:text-xl">
                  Avaliação da mesa
                </span>
              </div>
              <div className="flex flex-wrap space-x-2 md:space-x-3">
                <div>
                  <span className="text-white text-xs sm:text-base md:text-xl"></span>
                </div>
                <div className="sm:text-base md:text-xl"></div>
              </div>
            </div>
          </div>
        </div>

        <div x-show="contentId===4" className="sm:mx-auto mt-7 h-full pb-10">
          <div className="sm:mx-auto max-w-full px-3 sm:w-110 md:w-130 lg:w-200">
            <h1 className="text-xl lg:text-5xl md:text-4xl sm:text-3xl text-white font-bold">
              Sua análise
            </h1>
            <div className="mt-4 sm:mt-6 bg-gray-800 p-2 sm:p-4 shadow-md">
              <div className="flex" x-data="{openEditModal:false}">
                <div className="w-16 lg:w-24 md:w-20 sm:w-18"></div>
                <div className="mt-1 mx-2 w-full text-white font-bold">
                  <div>
                    <span className="text-base md:text-2xl sm:text-xl"></span>
                  </div>
                  <div className="-mt-1">
                    <i className="fas fa-user-tie text-gray-400"></i>
                    <span className="text-xs lg:text-sm md:text-base sm:text-sm text-gray-600">
                      Admin
                    </span>
                    <i className="fas fa-chess-king text-gray-400"></i>
                    <span className="text-xs lg:text-sm md:text-base sm:text-sm text-gray-600">
                      Mestre
                    </span>
                    <i className="fas fa-user-ninja text-gray-400"></i>
                    <span className="text-xs lg:text-sm md:text-base sm:text-sm text-gray-600">
                      Jogador
                    </span>
                  </div>
                  <div>
                    <span className="text-base md:text-2xl sm:text-xl">
                      Sem nome
                    </span>
                  </div>
                  <div className="-mt-1">
                    <i className="fas fa-user-times text-gray-400"></i>
                    <span className="text-xs lg:text-sm md:text-base sm:text-sm text-gray-600">
                      Não logado
                    </span>
                  </div>
                </div>

                <div className="flex">
                  <div x-data="{ dropdownOpen: false }" className="relative">
                    <button className="relative z-10 block">
                      <i className="fas fa-ellipsis-v text-white lg:text-2xl"></i>
                    </button>

                    <div
                      x-show="dropdownOpen"
                      className="fixed inset-0 h-full w-full z-10"
                    ></div>

                    <div
                      x-show="dropdownOpen"
                      className="absolute right-0 mt-2 py-2 w-48 bg-gray-600 rounded-md shadow-xl z-20"
                    >
                      <form
                        action="/reviews/{{authReview.id}}?_method=DELETE"
                        method="POST"
                      >
                        <button className="w-full block px-4 py-2 text-sm capitalize text-left text-white hover:bg-gray-700">
                          Deletar resenha
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-2"></div>
            </div>
            <h1 className="text-xl lg:text-5xl md:text-4xl sm:text-3xl text-white font-bold mt-16">
              Outras análises
            </h1>
            <div className="mt-4 sm:mt-6 bg-gray-800 p-2 sm:p-4 shadow-md">
              <div className="flex">
                <div className="w-16 lg:w-24 md:w-20 sm:w-18"></div>
                <div className="mt-1 mx-2 w-full text-white font-bold">
                  <div>
                    <span className="text-base md:text-2xl sm:text-xl"></span>
                  </div>
                  <div>
                    <i className="fas fa-user-tie text-gray-400"></i>
                    <span className="text-xs lg:text-sm md:text-base sm:text-sm text-gray-600">
                      Admin
                    </span>
                  </div>
                  <div>
                    <i className="fas fa-chess-king text-gray-400"></i>
                    <span className="text-xs lg:text-sm md:text-base sm:text-sm text-gray-600">
                      Mestre
                    </span>
                  </div>
                  <div>
                    <i className="fas fa-user-ninja text-gray-400"></i>
                    <span className="text-xs lg:text-sm md:text-base sm:text-sm text-gray-600">
                      Jogador
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-2 "></div>
            </div>
          </div>
        </div>
      </section>
    </Main>
  );
};

export default BoardIndex;
