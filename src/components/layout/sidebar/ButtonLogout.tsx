'use client';

import { useRouter } from 'next/navigation';

import { IoLogOut } from 'react-icons/io5'

export const ButtonLogout = () => {
  const router = useRouter();

  return (
    <button
      className="flex items-center gap-2 cursor-pointer"
      onClick={() => router.push('/')}
    >
      <IoLogOut size={28} className="rotate-[-180deg]" />
      <span>Salir</span>
    </button>
  )
}
