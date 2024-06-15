import Link from "next/link";
import Image from "next/image";

import { HeartIcon, LocationIcon, MailIcon, PhoneIcon } from "../icons";

import { subMenuApoyanos } from "@/assets";

export const Footer = () => {
  return (
    <footer
      className="w-full bg-sky"
    >
      <div
        className="w-full h-auto max-w-section mx-auto py-8 text-white
        lg:grid lg:grid-cols-3 lg:gap-x-4 lg:px-6 lg:py-10 xl:gap-x-[140px] xl:px-[100px]"
      >
        <div className="flex flex-col items-center mb-5 lg:items-start lg:mb-0">
          <Image
            src="/landing/vincent-white-logo.png"
            alt="Vincent Logo"
            width={112}
            height={28}
            className="lg:hidden"
          />

          <Image
            src="/landing/vincent-white-logo.png"
            alt="Vincent Logo"
            width={344}
            height={83}
            className="hidden lg:block"
          />

          <div
            className="h-2.5 flex items-center gap-1.5 my-2.5 leading-[15px]
            lg:h-auto lg:my-5 lg:leading-none"
          >
            <LocationIcon className="w-2.5 h-3.5 lg:w-6 lg:h-[34px]" />
            <p className="text-sm font-medium lg:text-xl">Socorro, Santander</p>
          </div>

          <p className="text-lg font-semibold lg:text-2xl">
            “Ayúdanos a hacer la diferencia”
          </p>
        </div>
        
        <div
          className="flex flex-col items-center mb-5 lg:items-start
          lg:mb-0 lg:pl-16"
        >
          <p
            className="h-[11px] font-bold text-base leading-[22px] mb-[15px]
            lg:h-auto lg:leading-none lg:text-2xl lg:mb-7 "
          >
            Apóyanos
          </p>

          <ul
            className="text-center text-sm leading-[18px] font-medium
            lg:text-lg lg:text-start"
          >
            {subMenuApoyanos.map(({ label, path }) => (
              <li key={label} className="mb-1 hover:underline lg:last:mb-0"
              >
                <Link href={path} >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="flex flex-col items-center lg:items-start"
        >
          <div className="flex items-center gap-1.5 mb-2 lg:mb-2">
            <PhoneIcon className="w-3.5 h-[13px] lg:size-6" />
            <a
              href="tel:+573164148818"
              className="block text-sm lg:text-lg"
            >
              +57 316 414 8818
            </a>
          </div>

          <div className="flex items-center gap-1.5 mb-1.5 lg:gap-2 lg:mb-2">
            <MailIcon className="w-[13px] h-2.5 lg:size-6" />
            <a
              href="mailto:fundaciónvincent@gmail.com"
              className="block text-sm lg:text-lg"
            >
              fundaciónvincent@gmail.com
            </a>
          </div>

          <p className="font-medium mb-1.5 lg:text-lg lg:mb-3">NIT. 901539964</p>
          
          <p className="font-bold mb-2 lg:text-2xl">Cuentas de donaciones</p>

          <BankAccounts
            accountName="Bancolombia Ahorros"
            accountHolder="Fundación Vincent rescate animal"
            accountNumber="29000000933"
          />

          <BankAccounts
            accountName="Coomuldesa Ahorros"
            accountHolder="Fundación Vincent rescate animal"
            accountNumber="12.00211494.35"
          />

          <BankAccounts
            accountName="Nequi"
            accountNumber="316 414 8818"
          />
        </div>
      </div>

      <div
        className="w-full flex justify-center py-2.5 border-t border-white
        lg:py-5"
      >
        <p
          className="flex items-center text-[10px] text-white gap-1 lg:text-lg">
          Todos los derechos reservados l Donado con
          <HeartIcon className="w-2.5 h-3.5 lg:size-6" />
          por
          <Link
            href="https://www.instagram.com/vase_print/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold underline cursor-pointer"
          >
            VASEprint
          </Link> 
        </p>
      </div>
    </footer>
  )
}

interface PropsBankAccounts {
  accountName: string;
  accountHolder?: string;
  accountNumber: string;
}

const BankAccounts = ({ accountName, accountHolder, accountNumber }: PropsBankAccounts) => {

  return (
    <div
      className="text-center leading-4 mb-2 lg:text-start lg:text-lg lg:leading-6"
    >
      <p className="font-semibold">{ accountName }</p>
      <p className="font-medium">{ accountHolder }</p>
      <p>{ accountNumber }</p>
    </div>
  )
}