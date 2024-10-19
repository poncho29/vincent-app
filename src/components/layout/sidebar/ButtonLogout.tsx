'use client';

import { IoLogOut } from 'react-icons/io5';

import { useAuth } from '@/context';

interface Props {
  toggleSidebar: boolean;
}

export const ButtonLogout = ({ toggleSidebar }: Props) => {
  const { logout } = useAuth();

  return (
    <button
      className="flex items-center gap-2 cursor-pointer"
      onClick={logout}
    >
      <IoLogOut size={28} className="rotate-[-180deg]" />
      <span
        className={`transition-all duration-300 ${toggleSidebar ? 'hidden' : 'block'}`}
      >
        Salir
      </span>
    </button>
  )
}
