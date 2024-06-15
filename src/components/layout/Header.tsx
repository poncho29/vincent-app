import Image from 'next/image';

import { Menu } from './Menu';

export const Header = () => {
  return (
    <header
      className="sticky top-0 w-full h-[67px] shadow-sm z-1000 bg-white lg:h-[110px]"
    >
      <div className='w-full h-full max-w-section mx-auto flex items-center justify-between px-6 md:px-12 xl:px-[100px]'>
        <Image
          src="/landing/vincent-logo-mobile.png"
          alt="Vincent Logo"
          width={142}
          height={36}
          className="block xl:hidden"
        />
        
        <Image
          src="/landing/vincent-logo.png"
          alt="Vincent Logo"
          width={248}
          height={60}
          className="hidden xl:block"
        />

        <Menu />
      </div>
    </header>
  )
}
