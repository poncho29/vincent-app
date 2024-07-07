import Image from 'next/image';

export const JoinUpSection = () => {
  return (
    <section
    className="w-full max-w-[375px] mx-auto mb-8 
    lg:max-w-section lg:mb-14"
  >
    <div className="px-6 lg:px-12 xl:px-[100px]">
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
          <h1 className="max-w-72 mx-auto title mb-4 lg:max-w-none lg:mb-6">
            Únete como Voluntario: 
          </h1>

          <h2
            className="max-w-80 mx-auto title !text-green !text-base mb-4
            lg:max-w-none lg:mb-6"
          >
            “Ayuda a Crear un Futuro Mejor para Nuestros Peludos Amigos”
          </h2>

          <p className="paragraph lg:text-center">
            Voluntariar en la Fundación Vincent es una oportunidad única para marcar una diferencia
            significativa en la vida de nuestros perros. Como voluntario, no solo ayudas a mejorar la calidad de
            vida de los animales, sino que también te enriqueces personalmente al formar parte de una comunidad
            dedicada y apasionada por el bienestar animal.
          </p>
        </div>
      </div>
    </div>

    <Image
      src="/voluntarios/voluntarios-mobile.webp"
      alt="Footprints Background"
      width={375}
      height={239}
      className="mx-auto mt-4"
    />
  </section>
  )
}
