import Image from "next/image"

export const CompaniesResumeSection = () => {
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
        className="w-full"
      >
        <div className="mb-4">
          <h1 className="max-w-56 mx-auto title mb-4 lg:max-w-none lg:mb-6">
            Empresas comprometidas
          </h1>

          <p className="paragraph lg:text-center">
            Las empresas desempeñan un papel fundamental en el apoyo a nuestra misión de rescatar
            y cuidar perros en situación de abandono. Hay muchas maneras en las que tu empresa puede
            contribuir a nuestra causa y hacer una diferencia significativa en la vida de estos peludos.
          </p>
        </div>
      </div>
    </section>
  )
}
