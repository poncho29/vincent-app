'use client';

import Image from "next/image";
import { usePathname } from "next/navigation";
import { HeartIcon, LocationIcon, MailIcon, PhoneIcon } from "../icons";

export const Footer = () => {
  const pathname = usePathname();

  return (
    <footer
      className="w-full h-[700px] bg-sky lg:h-[426px]"
    >
      <div
        className="w-full h-auto max-w-section mx-auto py-4 text-white"
      >
        <div className="flex flex-col items-center mb-5">
          <Image
            src="/landing/vincent-white-logo.png"
            alt="Vincent Logo"
            width={112}
            height={28}
          />

          <div
            className="h-2.5 flex items-center gap-1.5 my-2.5 font-medium leading-[15px]"
          >
            <LocationIcon className="w-2.5 h-3.5" />
            <p className="text-sm">Socorro, Santander</p>
          </div>

          <p className="text-lg font-semibold">
            “Ayúdanos a hacer la diferencia”
          </p>
        </div>
        
        <div className="flex flex-col items-center mb-5">
          <p
            className="h-[11px] font-bold text-base leading-[22px] mb-[15px]"
          >
            Apóyanos
          </p>

          <ul className="text-center text-sm leading-[18px] font-medium">
            <li>Adoptar</li>
            <li>Apadrinar</li>
            <li>Donar</li>
            <li>Empresas</li>
            <li>Voluntarios</li>
            <li>Hogar de paso</li>
          </ul>
        </div>

        <div
          className="flex flex-col items-center"
        >
          <div className="flex items-center gap-1.5 mb-2">
            <PhoneIcon className="w-3.5 h-[13px]" />
            <a href="tel:+573164148818" className="block text-sm">
              +57 316 414 8818
            </a>
          </div>

          <div className="flex items-center gap-1.5 mb-1.5">
            <MailIcon className="w-[13px] h-2.5" />
            <a href="mailto:fundaciónvincent@gmail.com" className="block text-sm">
              fundaciónvincent@gmail.com
            </a>
          </div>

          <p className="font-medium mb-1.5">NIT. 901539964</p>
          
          <p className="font-bold mb-2">Cuentas de donaciones</p>

          <p className="font-semibold leading-4">Bancolombia Ahorros</p>
          <p className="font-medium leading-4">Fundación Vincent rescate animal</p>
          <p className="mb-2">29000000933</p>
          
          <p className="font-semibold leading-4">Coomuldesa Ahorros</p>
          <p className="font-medium leading-4">Fundación Vincent rescate animal</p>
          <p className="mb-2">12.00211494.35</p>

          <p className="font-semibold leading-4">Nequi</p>
          <p>316 414 8818</p>
        </div>
      </div>

      <div>
        <p>
          Todos los derechos reservados l Donado con
          <HeartIcon className="w-2.5 h-3.5" />
          por VASEprint 
        </p>
      </div>
    </footer>
  )
}
