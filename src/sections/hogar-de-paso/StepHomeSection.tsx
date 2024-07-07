import Image from 'next/image';

export const StepHomeSection = () => {
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
            Hogar de paso
          </h1>

          <p className="paragraph lg:text-center">
            Los hogares de paso son otra forma de ayudar a nuestros peludos. Consiste en brindar un espacio
            en tu hogar para acoger temporalmente a uno de nuestros peludos rescatados. En este tiempo te
            comprometes a cuidarlo y darle amor, mientras nosotros nos encargamos de su alimentación y demás 
            gastos hasta encontrarles un hogar definitivo.
          </p>
        </div>
      </div>
    </section>
  )
}
