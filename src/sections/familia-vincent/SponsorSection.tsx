import { pets } from '@/assets';
import { ButtonLink, Carousel } from '@/components/common';

export const SponsorSection = () => {
  return (
    <section
      className="w-full max-w-section mx-auto md:rounded-[36px]"
    >
      <h2
        className="title mb-4 lg:mb-[42px]"
      >
        Conoce a nuestros <br /> perritos apadrinables
      </h2>

      <p className='paragraph px-6 mb-4 md:px-12 lg:max-w-section xl:px-[100px]'>
        Cada uno de los perros en la Familia Vincent tiene una historia única y especial.
        Conoce a nuestros adorables amigos que están esperando por alguien como tú para ser
        su ángel guardián:
      </p>

      <Carousel pets={pets} />
    
      <ButtonLink
        href="/adoptar"
        showIcon={false}
        variant='outline'
        className="mx-auto lg:w-[203px] lg:h-[55px] lg:text-2xl"
      >
        Ver todos
      </ButtonLink>
    </section>
  )
}
