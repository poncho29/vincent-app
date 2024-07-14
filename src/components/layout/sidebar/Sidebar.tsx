import { IoLayers } from "react-icons/io5";
import { MdPets } from "react-icons/md";

import { LinkSidebar } from "./LinkSidebar";

import { IRoute } from "@/interfaces";
import { ButtonLogout } from "./ButtonLogout";
import { HeaderSidebar } from "./HeaderSidebar";

export const routes: IRoute[] = [
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

export const Sidebar = () => {
  return (
    <div className='w-72 h-screen flex flex-col p-4 bg-slate-300'>
      <HeaderSidebar />

      <hr className='w-full my-4' />

      <div className="grow flex flex-col gap-1">
        {routes.map((route) => (
          <LinkSidebar route={route} key={route.path} />
        ))}
      </div>
      
      <hr className='w-full my-4' />

      <ButtonLogout />
    </div>
  )
}
