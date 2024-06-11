import Image from 'next/image';

import { Menu } from './Menu';

export const Header = () => {
  return (
    <header
      className="w-full max-w-[1440px] h-[67px] flex items-center justify-between px-6 mx-auto bg-white
      md:px-12 lg:h-[110px] xl:px-[100px]"
    >
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
    </header>
  )
}
