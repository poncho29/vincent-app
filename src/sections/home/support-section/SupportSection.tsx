import { ClowIcon, HeartIcon, MoneyIcon } from "@/components/icons";
import { SupportOption } from "./SupportOption";

export type SupportOption = {
  text: string;
  customClass?: string;
  icon: JSX.Element;
  href: string;
}

const supportCards: SupportOption[] = [
  {
    text: 'Haz tu donación aquí',
    customClass: 'lg:max-w-[194px]',
    icon: <MoneyIcon className="size-10 lg:size-[70px]" />,
    href: "/donar"
  },
  {
    text: 'Aporta alimentación, medicinas, cobijas, etc.',
    customClass: 'lg:max-w-[270px]',
    icon: <HeartIcon className="size-10 lg:w-[70px] lg:h-14" />,
    href: "/donar#needs"
  },
  {
    text: 'Apadrina un peludito',
    customClass: 'lg:max-w-[194px]',
    icon: <ClowIcon className="size-10 lg:w-[86px] lg:h-20" />,
    href: "/apadrinar"
  },
]

export const SupportSection = () => {
  return (
    <section
      className="w-full max-w-section mx-auto mb-[30px] px-6 lg:mb-[65px] xl:px-[100px]"
    >
      <h2 className="title mb-2 lg:mb-2.5">
        Apóyanos
      </h2>
      <h4 className="text-sm text-center mb-6 lg:text-2xl lg:leading-[44px] lg:mb-11">
        así haras diferente la vida de un peludito
      </h4>

      <div
        className="max-w-[400px] flex flex-col gap-2.5 mx-auto lg:max-w-none
        lg:flex-row lg:justify-between"
      >
        {supportCards.map((option: SupportOption) => (
          <SupportOption key={option.text} supportOption={option} />
        ))}
      </div>
    </section>
  )
}
