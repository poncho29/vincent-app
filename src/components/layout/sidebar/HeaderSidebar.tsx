'use client';

import Image from 'next/image';

import { ButtonMenu } from './ButtonMenu';

interface Props {
  toggleSidebar: boolean;
  onToggleSidebar: () => void;
}

export const HeaderSidebar = ({ toggleSidebar, onToggleSidebar }: Props) => {
  return (
    <div className="h-8 flex items-center justify-between">
      <figure className={`transition-all duration-300 ${toggleSidebar ? 'w-0' : 'w-auto'}`}>
        <Image
          src="/landing/vincent-logo-mobile.png"
          width={120}
          height={80}
          alt="logo"
          className='overflow-hidden'
        />
      </figure>

      <ButtonMenu onToggleSidebar={onToggleSidebar} />
    </div>
  )
}
