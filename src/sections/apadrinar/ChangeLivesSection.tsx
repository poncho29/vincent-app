import Image from 'next/image';

export const ChangeLivesSection = () => {
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

      <div className="w-full max-w-[978px] mx-auto">
        <h1 className="title mb-4 lg:mb-6">
          ¡Apadrina y cambia vidas¡
        </h1>

        <p className="paragraph mb-4">
          Apoya a un peludito en necesidad, si no puedes adoptar, puedes ayudarlos a tener una mejor estadia en nuestro refugio.
        </p>

        <p className='paragraph'>
          El programa de apadrinamiento te permite brindar apoyo a un perro rescatado,
          asegurando que reciba el cuidado necesario mientras espera por un hogar permanente.
          Tu apoyo cubre alimentos, atención veterinaria y otros cuidados esenciales.
        </p>
      </div>
    </section>
  )
}
