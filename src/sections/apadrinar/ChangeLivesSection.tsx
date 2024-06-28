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

      <div
        className="w-full max-w-[978px] mx-auto gap-20 lg:max-w-none lg:flex"
      >
        <div className='w-full lg:w-1/2'>
          <h1 className="title mb-4 lg:mb-6 lg:text-start">
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

        <div
          className='hidden p-6 text-white bg-green lg:block lg:w-1/2'
        >
          <h2
            className='max-w-64 title mx-auto mb-5 !text-white lg:max-w-none lg:mb-8 lg:text-start'
          >
            Beneficios de apadrinar
          </h2>

          <ol className='w-full mx-auto paragraph !text-white list-decimal pl-6 mb-5'>
            <li>Recibe actualizaciones periódicas, fotos y videos del peludo apadrinado.</li>
            <li>Puedes visitar a tu apadrinado cuando quieras.</li>
            <li>Participar en el proceso de adopción de tu apadrinado.</li>
          </ol>
        </div>
      </div>
    </section>
  )
}
