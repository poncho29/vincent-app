import { Button, Carousel } from '@/components/common';

import { pets } from '@/assets';

export const CarouselSection = () => {
  return (
    <section
      className="w-full max-w-section mx-auto pt-5 pb-6 md:rounded-[36px] lg:py-[65px]"
    >
      <h2
        className="text-xl text-center leading-[22px] font-mochiypopone mb-6 md:text-3xl
        lg:text-[50px] lg:mb-[42px] lg:leading-[52px]"
      >
        Peluditos <br />
        esperando un hogar
      </h2>

      <Carousel pets={pets} />
    
      <Button
        showIcon={false}
        className="w-[140px] h-[30px] mx-auto text-base"
      >
        Ver todos
      </Button>
    </section>
  )
}
