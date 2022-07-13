import React from "react";
import { useAuth } from "../../../contexts/AuthContext";
import Main from "../layouts/Main";
import cover_rpg from "../../images/cover-rpg.jpg";

const Index: React.FC = () => {
  const { user } = useAuth();
  return (
    <Main>
      <div className="relative">
        <img
          className="filter blur-sm contrast-100 w-full object-cover h-48"
          src={cover_rpg}
          alt="Imagem de jogadores de RPG"
        />
        <div className="left-20 bottom-10 absolute flex items-center text-lg font-semibold text-white">
          <img
            className="w-20 h-20 object-cover rounded-full"
            src={user?.photo_url}
            alt={user?.name}
          />
          <span className="ml-10">Name: {user?.name}</span>
        </div>
      </div>
      <div className="container mx-auto flex flex-col">
        <div className="flex">
          <span>Name: {user?.name}</span>
          <span>E-mail: {user?.email}</span>
        </div>
      </div>
    </Main>
  );
};

export default Index;
