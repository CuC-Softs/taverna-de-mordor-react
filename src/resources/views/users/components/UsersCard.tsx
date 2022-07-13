import React from "react";
import IUserCardProps from "../../../../shared/interfaces/IUserCardProps";

const UsersCard: React.FC<IUserCardProps> = ({
  name,
  email,
  cell_phone_number,
  instagram_ref,
  is_adm,
  is_master,
  photo_url,
}) => {
  return (
    <>
      <tr>
        <td className="px-5 py-5 bg-white text-sm">
          <div className="flex items-center">
            <div className="flex-shrink-0 w-10 h-10">
              <img
                className="w-full h-full rounded-full"
                src={photo_url}
                alt=""
              />
            </div>
            <div className="ml-3">
              <p className="text-gray-900 whitespace-no-wrap">{name}</p>
            </div>
          </div>
        </td>
        <td className="px-5 py-5 bg-white text-sm">
          <a href={`mailto:${email}`}>
            <p className="text-blue-500 whitespace-no-wrap">{email}</p>
          </a>
        </td>
        <td className="px-5 py-5 bg-white text-sm">
          <a
            href={`https://api.whatsapp.com/send?phone=${cell_phone_number}`}
            target="_blank"
          >
            <p className="text-blue-500 whitespace-no-wrap">
              {cell_phone_number}
            </p>
          </a>
        </td>
        <td className="px-5 py-5 bg-white text-sm">
          {instagram_ref ? (
            <a href={`http://instagram.com/${instagram_ref}`} target="_blank">
              <p className="text-blue-500 whitespace-no-wrap">
                {instagram_ref}
              </p>
            </a>
          ) : (
            <p className="text-gray-900 whitespace-no-wrap">Não tem</p>
          )}
        </td>
        <td className="px-5 py-5 bg-white">
          <div className="text-xs flex flex-col items-center">
            {is_adm && (
              <span className="mb-1 break-normal whitespace-nowrap relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                <i className="fas fa-crown"></i>
                <span
                  aria-hidden
                  className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                ></span>
                <span className="relative">Admin</span>
              </span>
            )}
            {is_master && (
              <span className="mb-1 break-normal whitespace-nowrap relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                <i className="fas fa-dice-d20"></i>
                <span
                  aria-hidden
                  className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                ></span>
                <span className="relative">Mestre</span>
              </span>
            )}
            {!is_master && !is_adm && (
              <p className="text-gray-900 whitespace-no-wrap text-sm">
                Não tem
              </p>
            )}
          </div>
        </td>
      </tr>
    </>
  );
};

export default UsersCard;
