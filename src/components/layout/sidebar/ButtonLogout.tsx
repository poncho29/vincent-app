'use client';

import { useRouter } from 'next/navigation';

import { IoLogOut } from 'react-icons/io5';

interface Props {
  toggleSidebar: boolean;
}

export const ButtonLogout = ({ toggleSidebar }: Props) => {
  const router = useRouter();

  return (
    <button
      className="flex items-center gap-2 cursor-pointer"
      onClick={() => router.push('/')}
    >
      <IoLogOut size={28} className="rotate-[-180deg]" />
      <span className={`transition-all duration-300 ${toggleSidebar ? 'hidden' : 'block'}`}>Salir</span>
    </button>
  )
}
