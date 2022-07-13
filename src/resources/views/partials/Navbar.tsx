import React, { useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";

const Navbar: React.FC = () => {
  const { googleOauth, logout, login, user, signed } = useAuth();
  const [toogleNotifications, setToogleNotifications] =
    useState<boolean>(false);

  const handleToogleNotifications = () => {
    setToogleNotifications(!toogleNotifications);
  };

  const handleLogout = async () => {
    await logout();
  };

  return (
      <nav className="bg-gray-900 z-10">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-8 w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-md md:text-xl font-title text-shadow text-white">
                  Taverna de Mordor
                </h1>
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  <a
                    href="/"
                    className="font-text text-gray-300 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Início
                  </a>
                  <a
                    href="/equipe"
                    className="font-text text-gray-300 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Equipe
                  </a>
                  <a
                    href="/events"
                    className="font-text text-gray-300 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Eventos
                  </a>
                  <a
                    href="/boards"
                    className="font-text text-gray-300 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Mesas
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="relative">
                <button
                  type="button"
                  onClick={handleToogleNotifications}
                  className="bg-gray-900 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 relative focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span className="sr-only">View notifications</span>
                  <div className="w-2 h-2 bg-red-600 rounded-full absolute left-4 right-0 top-0"></div>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </button>
                {toogleNotifications && (
                  <div className="absolute text-gray-400 -right-12 w-[20rem] md:right-0 mt-2 bg-white rounded-md shadow-lg overflow-hidden z-50">
                    <div className="py-2">
                      <template>
                        <button
                          type="button"
                          className="flex items-center px-4 py-3 border-b hover:bg-gray-100 -mx-2"
                        >
                          <img
                            className="h-8 w-8 rounded-full object-cover mx-1"
                            alt="avatar"
                          />
                          <p className="text-gray-600 text-sm mx-2"></p>
                        </button>
                      </template>
                      <template>
                        <p className="text-center">Nenhuma notificação</p>
                      </template>
                    </div>
                    <a
                      href="#"
                      className="block bg-gray-900 text-white text-center font-bold py-2"
                    >
                      Ver todas as notificações
                    </a>
                  </div>
                )}
              </div>
              <div className="ml-3 relative">
                {signed ? (
                  <>
                    <div>
                      <button
                        type="button"
                        className="mt-2"
                        id="user-menu-button"
                        aria-expanded="false"
                        aria-haspopup="true"
                      >
                        <span className="sr-only">Open user menu</span>
                        <div className="w-10 h-10">
                          <svg
                            viewBox="0 0 100 100"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <defs>
                              <pattern
                                id="img"
                                patternUnits="userSpaceOnUse"
                                width="100"
                                height="100"
                              >
                                <image
                                  href={user?.photo_url}
                                  x="-25"
                                  width="150"
                                  height="100"
                                />
                              </pattern>
                            </defs>
                            <polygon
                              points="50 1 95 25 95 75 50 99 5 75 5 25"
                              fill="url(#img)"
                            />
                          </svg>
                        </div>
                      </button>
                    </div>
                    <div
                      id="profile-management-popup"
                      className="origin-top-right absolute right-0 z-10 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu-button"
                    >
                      <a
                        href={`/users/${user?.id}`}
                        className="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        id="user-menu-item-0"
                      >
                        <i className="fas fa-user mr-4"></i>
                        Perfil
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        id="user-menu-item-1"
                      >
                        <i className="fas fa-cogs mr-3"></i>
                        Configurações
                      </a>
                      {signed && user?.is_adm && (
                        <a
                          href="/users"
                          className="block px-4 py-2 text-sm text-gray-700"
                          role="menuitem"
                          id="user-menu-item-2"
                        >
                          <i className="fas fa-crown mr-4"></i>
                          Área do Adm
                        </a>
                      )}

                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        id="user-menu-item-2"
                        onClick={handleLogout}
                      >
                        <i className="fas fa-sign-out-alt mr-4"></i>
                        Sair
                      </a>
                    </div>
                  </>
                ) : (
                  <div>
                    <a href={import.meta.env.VITE_DEV_GOOGLE_REDIRECT}>
                      <div>
                        <button
                          type="button"
                          className="mt-2"
                          id="user-menu-button"
                          aria-expanded="false"
                          aria-haspopup="true"
                          
                        >
                          <span className="sr-only">Open user menu</span>
                          <div className="w-10 h-10">
                            <svg
                              viewBox="0 0 100 100"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <defs>
                                <pattern
                                  id="img"
                                  patternUnits="userSpaceOnUse"
                                  width="150"
                                  height="100"
                                >
                                  <image
                                    href="https://user-images.githubusercontent.com/83377948/151102922-533821eb-93f1-4ced-8d59-63a90a5d25c1.png"
                                    x="-25"
                                    width="150"
                                    height="100"
                                  />
                                </pattern>
                              </defs>
                              <polygon
                                points="50 1 95 25 95 75 50 99 5 75 5 25"
                                fill="url(#img)"
                              />
                            </svg>
                          </div>
                        </button>
                      </div>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="sm:hidden z-50" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="/"
              className="font-text text-gray-300 hover:bg-gray-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Início
            </a>
            <a
              href="/equipe"
              className="font-text text-gray-300 hover:bg-gray-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Equipe
            </a>
            <a
              href="/events"
              className="font-text text-gray-300 hover:bg-gray-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Eventos
            </a>
            <a
              href="/boards"
              className="font-text text-gray-300 hover:bg-gray-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Mesas
            </a>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
