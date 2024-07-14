import { IoLayers } from "react-icons/io5";
import { MdPets } from "react-icons/md";

import { IAdminMenu } from "@/interfaces";

export const adminMenu: IAdminMenu[] = [
  {
    path: '/admin/mascotas',
    name: 'Mascotas',
    icon: <MdPets size={24} className="text-blackLight" />
  },
  {
    path: '/admin/usuarios',
    name: 'Usuarios',
    icon: <IoLayers size={24} className="text-blackLight" />
  }
];