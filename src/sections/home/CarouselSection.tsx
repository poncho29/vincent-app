import { ButtonLink, Carousel } from '@/components/common';

import { pets } from '@/assets';

export const CarouselSection = () => {
  return (
    <section
      className="w-full max-w-section mx-auto pt-5 pb-6 md:rounded-[36px]
      lg:py-[65px]"
    >
      <h2
        className="title mb-6 md:text-3xl lg:mb-[42px]"
      >
        Peluditos <br />
        esperando un hogar
      </h2>

      <Carousel pets={pets} />
    
      <ButtonLink
        href="/apoyanos/adoptar"
        showIcon={false}
        variant='outline'
        className="mx-auto lg:w-[203px] lg:h-[55px] lg:text-2xl"
      >
        Ver todos
      </ButtonLink>
    </section>
  )
}
