import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import coverRPG from "../images/cover-rpg.jpg";
import Main from "./layouts/Main";
import { FaDiceD20, FaFlag } from "react-icons/fa";

const home: React.FC = () => {
  const { logout } = useAuth();

  return (
    <Main>
      <div>
        <section>
          <div className="relative shadow-lg">
            <div className="absolute w-full h-full opacity-20 filter blur-sm contrast-100  bg-black hover:opacity-40 transition ease-in-out duration-150"></div>
            <img
              className="max-h-96 w-full object-cover"
              src={coverRPG}
              alt="Imagem de jogadores de RPG"
            />
            <h1 className="absolute cursor-default pointer-events-none left-0 right-0 bottom-3 text-center text-xl text-gray-100 font-bold mb-2 sm:text-5xl">
              Taverna de Mordor
            </h1>
          </div>
        </section>
        <div>
          <article className="py-5 bg-gray-600 sm:px-10 sm:py-10 sm:grid ">
            <div className="container rounded-md mx-auto bg-white overflow-hidden">
              <div className="flex justify-between">
                <div className="w-2/3 h-auto relative flex flex-grow top-0 bottom-0 bg-cover bg-tabuleiro-rpg">
                  <div className="bg-black opacity-40 absolute w-full h-full"></div>
                  <div className="w-100 justify-center mx-auto z-30 my-auto p-3 sm:p-10">
                    <span className="px-3 text-lg sm:text-2xl z-30 text-center text-white">
                      <strong className="z-30">A Regra de Ouro do RPG:</strong>{" "}
                      "Para o Bem e Para o Mal... Diversão até o final!"
                    </span>
                  </div>
                </div>
                <div className="w-2/3 ml-6 sm:ml-12 flex flex-col py-32 pr-5 sm:pr-0">
                  <br />
                  <strong className="flex text-xl sm:text-3xl text-gray-800 items-center">
                    <FaDiceD20 className="far text-2xl mr-3" />
                    Oque fazemos?
                  </strong>
                  <br />
                  <br />
                  <p className="text-lg font-sans">
                    O Site da taverna de mordor surgiu com o objetivo de unir
                    jogar com organizar os jogos, gerenciar mesas e participar
                    de eventos
                  </p>
                  <br />
                  <br />
                  <strong className="flex text-xl sm:text-3xl text-gray-800 items-center">
                    <FaFlag className="far text-2xl mr-3" />
                    Qual a nossa meta?
                  </strong>
                  <br />
                  <br />
                  <p className="text-lg font-sans">
                    Dar total autonomia para o mestre gerenciar sua mesa e para
                    os admistradores terem uma visão geral sobr/e os jogadores
                    quanto os mestres e as mesas
                  </p>
                </div>
              </div>
            </div>
          </article>
          <section className="bg-white ">
            <div className="container mx-auto mt-5 sm:mt-8">
              <h3 className="text-lg font-bold sm:text-3xl text-center text-gray-800">
                Conheça o Mundo do RPG
              </h3>
              <br />
              <div className="hidden grid-flow-col grid-rows-2 grid-cols-3 gap-5 sm:grid">
                <div className="bg-vampire-the-mascarade bg-center rounded-md overflow-hidden">
                  <a
                    href="https://www.worldofdarkness.com/vampire-the-masquerade"
                    target="_blank"
                  >
                    <div className="w-full h-full flex items-end text-center justify-center font-bold text-white">
                      <span className="text-2xl bg-gradient-to-b w-full from-transparent to-black p-10">
                        Vampiro a Máscara
                      </span>
                    </div>
                  </a>
                </div>
                <div className="col-start-3 bg-al-rpg-club bg-center bg-cover rounded-md overflow-hidden">
                  <a
                    href="https://www.instagram.com/alrpgcluboficial/"
                    target="_blank"
                  >
                    <div className="w-full h-full flex items-end text-center justify-center font-bold text-white">
                      <span className="text-2xl w-full bg-gradient-to-b from-transparent to-black p-10">
                        AL RPG CLUB
                      </span>
                    </div>
                  </a>
                </div>
                <div className="bg-logo bg-no-repeat bg-cover rounded-md overflow-hidden">
                  <a
                    href="https://chat.whatsapp.com/Cmcaoa8QIb5EJ662FZKZVv"
                    target="_blank"
                  >
                    <div className="w-full h-full flex items-end text-center justify-center font-bold text-white ">
                      <span className="text-2xl w-full bg-gradient-to-b from-transparent to-black p-10">
                        Faça parte do grupo no whatsapp
                      </span>
                    </div>
                  </a>
                </div>
                <div className="bg-cyberpunk rounded-md overflow-hidden">
                  <a href="/events" target="_blank">
                    <div className="w-full h-full flex items-end text-center justify-center font-bold text-white">
                      <span className="text-2xl w-full bg-gradient-to-b from-transparent to-black p-10">
                        Comece a experiência
                      </span>
                    </div>
                  </a>
                </div>
                <div className="row-start-1 h-52 col-start-2 col-span-2 bg-dungeons-and-dragons bg-no-repeat bg-left-top bg-cover rounded-md overflow-hidden">
                  <a href="https://dnd.wizards.com/" target="_blank">
                    <div className="w-full h-full flex items-end text-center justify-center font-bold text-white">
                      <span className="text-2xl w-full bg-gradient-to-b from-transparent to-black p-10">
                        Dungeons and Dragons
                      </span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 sm:hidden">
                <div className="bg-vampire-the-mascarade bg-center rounded-md overflow-hidden">
                  <a
                    href="https://www.worldofdarkness.com/vampire-the-masquerade"
                    target="_blank"
                  >
                    <div className="w-full h-full flex items-end text-center justify-center font-bold text-white">
                      <span className="text-2xl bg-gradient-to-b w-full from-transparent to-black p-10">
                        Vampiro a Máscara
                      </span>
                    </div>
                  </a>
                </div>
                <div className="bg-al-rpg-club bg-center bg-cover rounded-md overflow-hidden">
                  <a href="https://www.instagram.com/alrpgcluboficial/">
                    <div className="w-full h-full flex items-end text-center justify-center font-bold text-white">
                      <span className="text-2xl w-full bg-gradient-to-b from-transparent to-black p-10">
                        AL RPG CLUB
                      </span>
                    </div>
                  </a>
                </div>
                <div className="bg-cyberpunk rounded-md overflow-hidden">
                  <a href="/events">
                    <div className="w-full h-full flex items-end text-center justify-center font-bold text-white">
                      <span className="text-2xl w-full bg-gradient-to-b from-transparent to-black p-10">
                        Comece a experiência
                      </span>
                    </div>
                  </a>
                </div>
                <div className="bg-dungeons-and-dragons rounded-md overflow-hidden">
                  <a href="https://dnd.wizards.com/">
                    <div className="w-full h-full flex items-end text-center justify-center font-bold text-white">
                      <span className="text-2xl w-full bg-gradient-to-b from-transparent to-black p-10">
                        Dungeons and Dragons
                      </span>
                    </div>
                  </a>
                </div>
                <div className="bg-logo col-start-1 rounded-md overflow-hidden col-span-2">
                  <a href="https://chat.whatsapp.com/Cmcaoa8QIb5EJ662FZKZVv">
                    <div className="w-full h-full flex items-end text-center justify-center font-bold text-white ">
                      <span className="text-2xl w-full bg-gradient-to-b from-transparent to-black p-10">
                        Faça parte do grupo no whatsapp
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Main>
  );
};

export default home;
