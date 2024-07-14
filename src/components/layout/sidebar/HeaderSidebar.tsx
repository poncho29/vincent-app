import Image from 'next/image';

import { IoReorderThree } from 'react-icons/io5';

export const HeaderSidebar = () => {
  return (
    <div className="h-8 flex items-center justify-between">
      <Image
        src="/landing/vincent-logo-mobile.png"
        width={120}
        height={80}
        alt="logo"
      />

      <button
        className="p-1 rounded-md transition-all duration-300 bg-sky hover:bg-skyLight"
      >
        <IoReorderThree
          size={24}
          // onClick={() => {}}
        />
      </button>
    </div>
  )
}
