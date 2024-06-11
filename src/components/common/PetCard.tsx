import Image from 'next/image';

import { Button } from './Button';

export const PetCard = () => {
  return (
    <div
      className="relative w-[247px] h-[255px] rounded-3xl shadow-lg bg-white
      lg:w-[400px] lg:h-[505px]"
    >
      <Image
        src={"/pets/nala-mobile.png"}
        alt="Nala"
        width={247}
        height={199}
        className="z-10 lg:hidden"
      />
      
      <Image
        src={"/pets/nala.png"}
        alt="Nala"
        width={400}
        height={397.5}
        className="hidden z-10 lg:block"
      />

      <div
        className="absolute bottom-5 left-1/2 transform -translate-x-1/2 lg:bottom-6"
      >
        <span
          className="inline-block w-56 text-sm text-center text-blackLight font-semibold leading-4 mb-4
          lg:w-full lg:text-[22px] lg:mb-7"
        >
          Hembra • Adulta • Raza criolla
        </span>

        <div className="flex items-center gap-5 justify-center">
          <Button>Adoptar</Button>
          <Button variant="outline">Apadrinar</Button>
        </div>
      </div>
    </div>
  )
}
