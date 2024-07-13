'use client';

import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import { Arrow } from "@egjs/flicking-plugins";

import { PetCard } from "@/components/common";

import { pets } from '@/assets';

import "@egjs/react-flicking/dist/flicking.css";
import "@egjs/flicking-plugins/dist/arrow.css";
import './slider-pets.css';

export const SliderPets = () => {
  const plugins = [new Arrow()];

  return (
    <section
      className="w-full max-w-[1240px] mx-auto pt-5 pl-6 pb-6 cursor-pointer
      md:pl-12 md:rounded-[36px] lg:py-[65px] lg:pl-0"
    >
      <h2
        className="title mb-6 md:text-3xl lg:mb-[42px]"
      >
        Peluditos <br />
        esperando un hogar
      </h2>

      <Flicking
        align="prev"
        bounce="100%"
        circular={false}
        plugins={plugins}
      >
        {pets.map((pet, index) => (
          <PetCard key={index} pet={pet} />
        ))}

        <ViewportSlot>
          <span className="hidden flicking-arrow-prev is-circle md:block"></span>
          <span className="hidden flicking-arrow-next is-circle md:block"></span>
        </ViewportSlot>
      </Flicking>
    </section>
  )
}
