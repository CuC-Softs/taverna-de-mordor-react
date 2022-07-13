import React, { useEffect, useState } from "react";
import api from "../../../services/api";
import IPage from "../../../shared/interfaces/IPage";
import IUser from "../../../shared/interfaces/IUser";
import Main from "../layouts/Main";
import UsersCard from "./components/UsersCard";

const list: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [page, setPage] = useState<IPage>({} as IPage);

  const handleListUsers = async () => {
    try {
      const { data } = await api.get("/users");
      console.log(data.data, "Pinto");
      console.log(data.meta, "Meta ok");
      setUsers(data.data);
      setPage(data.meta);
    } catch (err) {
      console.log(err, "Bunda!");
    }
  };

  useEffect(() => {
    handleListUsers();
  }, []);

  return (
    <Main>
      <div className="p-3 my-3">
        <div className="bg-white p-8 rounded-md w-full">
          <div className=" flex items-center justify-between pb-6">
            <div>
              <h2 className="text-gray-600 font-semibold">Lista de Usuários</h2>
              <span className="text-xs">Todos os usuários da taverna</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex bg-gray-50 items-center p-2 rounded-md"></div>
            </div>
          </div>
          <div>
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th className="px-5 py-3 border-b-2 border-gray-200 whitespace-nowrap bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Nome
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 whitespace-nowrap bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        <i className="far fa-envelope sm:text-xs"></i>
                        <span>E-mail</span>
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 whitespace-nowrap bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        <i className="fab fa-whatsapp"></i>
                        <span>Telefone</span>
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 whitespace-nowrap bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        <i className="fab fa-instagram"></i>
                        <span>Instagram</span>
                      </th>
                      <th className="px-5 py-3 border-b-2  border-gray-200 whitespace-nowrap bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        <i className="fab fa-battle-net"></i>
                        <span>Cargo</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.length > 0 &&
                      users.map((user) => {
                        return (
                          <UsersCard
                            id={user.id}
                            name={user.name}
                            email={user.email}
                            cell_phone_number={user.cell_phone_number}
                            instagram_ref={user.instagram_ref}
                            is_adm={user.is_adm}
                            is_master={user.is_master}
                            photo_url={user.photo_url}
                            key={user.id}
                            username={user.username}
                            description={user.description}
                            created_at={user.created_at}
                            updated_at={user.updated_at}
                            avaluation={user.avaluation}
                            reviews={user.reviews}
                          />
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div>
          <ul className="flex pl-0 list-none rounded my-2"></ul>
        </div>
      </div>
      <li>
        <a className="page-link w-full h-full">
          <button className="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 border-r-0 ml-0 rounded-l hover:bg-gray-200">
            Anterior
          </button>
        </a>
      </li>
      <li>
        <a className="page-link w-full h-full" href="">
          <button className="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 border-r-0 hover:bg-gray-200"></button>
        </a>
      </li>
      <li>
        <a className="page-link w-full h-full" href="">
          <button className="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 rounded-r hover:bg-gray-200">
            Próximo
          </button>
        </a>
      </li>
    </Main>
  );
};

export default list;
