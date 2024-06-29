import Image from "next/image";

export const HelpSaveLivesSection = () => {
  return (
    <section
      className="w-full max-w-[375px] mx-auto mb-8 px-6 
      lg:max-w-section lg:px-12 xl:px-[100px] lg:mb-14"
    >
      <Image
        src="/landing/footprints-background-mobile.png"
        alt="Footprints Background"
        width={325}
        height={55}
        className='py-5 mx-auto lg:hidden'
      />
      
      <Image
        src="/quienes-somos/footprints-background.png"
        alt="Footprints Background"
        width={1240}
        height={210}
        className='hidden pt-14 pb-16 mx-auto lg:block lg:px-12'
      />

      <div
        className="w-full max-w-[880px] mx-auto"
      >
        <div>
          <h1 className="max-w-56 mx-auto title mb-4 lg:max-w-none lg:mb-6">
            ¡Ayudanos a salvar vidas¡
          </h1>

          <p className="paragraph lg:text-center">
            Cada donación, grande o pequeña, nos ayuda a proporcionar alimentos, atención médica,
            refugio y amor a los peludos rescatados. Con tu apoyo, podemos continuar nuestra misión
            de salvar y encontrar hogares amorosos para estos maravillosos animales.
          </p>
        </div>
      </div>
    </section>
  )
}
