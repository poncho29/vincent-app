import Link from "next/link";

import { ArrowDowmIcon } from "@/components/icons";

import type { SupportOption as TSupportOption } from "./SupportSection";

interface Props {
  supportOption: TSupportOption;
}

export const SupportOption = ({ supportOption: { text, customClass, icon, href } }: Props) => {
  return (
    <Link 
      href={href}
      className="flex items-center justify-between py-2.5 px-[21.5px] rounded-[20px] bg-green
      cursor-pointer lg:w-full lg:max-w-[350px] lg:flex-col lg:gap-6 lg:py-5 lg:px-10"
    >
      <p
        className={`max-w-[192px] text-base text-white text-center font-semibold
        ${customClass} lg:text-2xl lg:leading-6`}
      >
        { text }
      </p>

      <div className="flex items-center gap-3">
        { icon }
        <ArrowDowmIcon className="w-3 h-5 text-white rotate-[-90deg] lg:hidden" />
      </div>
    </Link>
  )
}
