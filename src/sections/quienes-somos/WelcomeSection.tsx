import Image from 'next/image';

export const WelcomeSection = () => {
  return (
    <section
      className='w-full max-w-section mx-auto lg:mb-12'
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
        className='w-full max-w-[375px] mx-auto lg:max-w-none lg:flex
        lg:items-start lg:gap-12 lg:px-12 xl:px-[100px]'
      >
        <div className='px-6 lg:px-0'>
          <h2 className='title mb-5 lg:text-start'>
            Bienvenidos a fundación <br className='hidden xl:block' /> Vincent
          </h2>
          <p className='paragraph mb-6'>
            En Fundación Vincent, nos dedicamos con pasión y compromiso a rescatar,
            cuidar y encontrar hogares amorosos para perros en situación de abandono.
            Nuestra misión es brindarles una segunda oportunidad de vida a estos fieles
            compañeros, promoviendo la adopción responsable y el respeto por los animales.
          </p>

          <h2 className='title mb-5 lg:text-start'>Nuestro compromiso</h2>
          <p className='paragraph mb-6'>
            Cada peeludito que llega a Fundación Vincent es tratado con el cuidado y el respeto
            que merece. Contamos con un equipo de voluntarios que se esfuerzan por garantizar el
            bienestar físico y emocional de nuestros peludos amigos. Creemos firmemente
            en la adopción como la mejor opción y trabajamos para encontrar hogares adecuados yresponsables para cada uno de ellos.
          </p>
        </div>

        <Image
          src="/quienes-somos/our-commitment.png"
          alt="Footprints Background"
          width={375}
          height={240}
          className='lg:hidden'
        />
        
        <Image
          src="/landing/mision-section-photo.png"
          alt="Footprints Background"
          width={580}
          height={580}
          className='hidden lg:block'
        />
      </div>
    </section>
  )
}
