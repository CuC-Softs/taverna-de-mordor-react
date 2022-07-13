import React from "react";

const BoardCard: React.FC = () => {
  return (
    <div>
      <div className="mt-7">
        <div className="relative z-0 h-28 overflow-hidden rounded-t-lg ">
          <div className="z-40  rounded-lg">
            <img
              className="z-0 w-full object-cover"
              src="{{board.system.photoUrl}}"
              alt=""
            />
            <img
              className="z-0 w-full object-cover"
              src="{{asset('assets/images/cover-rpg.jpg')}}"
              alt=""
            />
          </div>
          <div className="z-40 absolute top-10 right-2 px-2 rounded-xl">
            <a href="/boards/{{board.id}}">
              <span className=" ml-4 text-white hover:text-blue-400  text-right font-bold text-2xl"></span>
            </a>
          </div>
        </div>

        <div className=" z-10  container bg-white rounded-b-lg w-auto px-2 pb-8 md:px-6 shadow-2xl">
          <section className="space-y-35 ">
            <div className="mb-8">
              <div className="flex items-end">
                <img
                  className="z-40 shadow-lg mr-3 -mt-7 rounded-full"
                  src="{{board.master.photoUrl}}"
                  alt="{{board.master.name}}"
                />

                <div className=" mt-2">
                  <span className="text-xl md:text-2xl font-bold">
                    Mestre: <br />
                  </span>
                  <a href="/users/{{board.master.id}}">
                    <span className=" hover:text-blue-500"></span>
                  </a>
                </div>
              </div>
            </div>
            <div className="mx-3 truncate">
              <div>
                <i className="fas fa-dice text-xl  mr-2 items-center"></i>
                <span className="text-xl md:text-lg">
                  <strong>Mesa:</strong>
                </span>
              </div>
              <div>
                <i className="fas fa-dice-d20 text-xl ml-1  mr-3 items-center"></i>
                <span className="text-xl md:text-lg truncate">
                  <strong>Sistema:</strong>
                </span>
              </div>
              <div>
                <i className="fas fa-users text-xl mr-2"></i>
                <span className="text-xl md:text-lg">
                  <strong>Máximo de Jogadores:</strong>
                </span>
              </div>
              <div>
                <i className="fas fa-user text-xl ml-1 mr-3"></i>
                <span className="text-xl md:text-lg">
                  <strong>Vagas de preenchidas:</strong>
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default BoardCard;
