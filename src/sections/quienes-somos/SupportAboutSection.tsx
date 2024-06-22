import { ButtonLink } from "@/components/common";
import { ClowIcon, HeartIcon, MoneyIcon } from "@/components/icons";

const supportCards = [
  {
    text: 'Donar',
    href: '/donar',
    icon: <MoneyIcon className="size-10 lg:size-[70px]" />
  },
  {
    text: 'Adoptar',
    href: '/adoptar',
    icon: <HeartIcon className="w-10 h-9 lg:size-[70px]" />
  },
  {
    text: 'Apadrinar',
    href: '/apadrinar',
    icon: <ClowIcon className="w-10 h-9 lg:w-[75px] lg:h-[70px]" />
  },
]

export const SupportAboutSection = () => {
  return (
    <section
      className='mb-2.5 lg:relative lg:pt-[300px]'
    >
      <div
        className='w-full bg-green lg:bg-transparent lg:absolute lg:top-0'
      >
        <div
          className="w-full max-w-[375px] mx-auto p-6 lg:max-w-[730px] lg:bg-green
          lg:rounded-lg lg:py-[30px] lg:px-14"
        >
          <h2 className='title text-white mb-4'>
            Únete a nuestra causa
          </h2>

          <div className='paragraph text-center text-white font-medium mb-4'>
            <p>
              En Fundación Vincent, creemos que juntos podemos hacer la diferencia.
              Te invitamos a unirte a nuestra causa, ya sea adoptando, siendo voluntario
              o contribuyendo con donaciones. Cada pequeño gesto cuenta y nos ayuda a seguir
              salvando vidas.
            </p>

            <br />

            <p>
              Gracias por visitar nuestra página y por tu interés en nuestra misión.
            </p>
          </div>

          <h4
            className='title text-white mb-4 lg:max-w-[517px] lg:text-2xl lg:mx-auto'
          >
            ¡Juntos, podemos construir un futuro mejor para los perros necesitados!
          </h4>
        </div>
      </div>

      <div className='w-full bg-sky'>
        <div className="w-full max-w-section mx-auto p-6 lg:pt-32 lg:pb-10">
          <h2 className='title text-white mb-6 lg:mb-9'>Apóyanos</h2>

          <div className="flex flex-col gap-4 lg:flex-row lg:justify-center lg:gap-x-36">
            {supportCards.map(({ text, href, icon }) => (
              <div
                key={text}
                className="flex flex-col items-center gap-3 lg:gap-4"
              >
                { icon }

                <ButtonLink
                  href={href}
                  variant="outlineSecondary"
                  className="w-[142px] h-[30px] text-base lg:w-[203px] lg:h-[55px] lg:text-lg"
                >
                  { text }
                </ButtonLink>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
