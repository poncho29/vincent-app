import { ArrowDowmIcon, ClowIcon, HeartIcon, MoneyIcon } from "@/components/icons"

const supportCards = [
  {
    text: 'Haz tu donación aquí',
    customClass: 'lg:max-w-[194px]',
    icon: <MoneyIcon className="size-10 lg:size-[70px]" />
  },
  {
    text: 'Aporta alimentación, medicinas, cobijas, etc.',
    customClass: 'lg:max-w-[270px]',
    icon: <HeartIcon className="size-10 lg:w-[70px] lg:h-14" />
  },
  {
    text: 'Apadrina un peludito',
    customClass: 'lg:max-w-[194px]',
    icon: <ClowIcon className="size-10 lg:w-[86px] lg:h-20" />
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
        {supportCards.map(({ text, customClass, icon }) => (
          <div
            key={text}
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
          </div>
        ))}
      </div>
    </section>
  )
}
