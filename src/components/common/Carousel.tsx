'use client';

import { useScreenSize } from '@/hooks';

import { PetCard } from './PetCard';

import { Pet } from '@/interfaces';

interface Props {
  pets: Pet[];
}

export const Carousel = ({ pets }: Props) => {
  const { width } = useScreenSize();

  const widthCarousel = width >= 1024 ? (pets.length * 370) : (pets.length * 266);

  return (
    <div
      className="w-full max-w-[1240px] mx-auto overflow-scroll no-scroll py-2 pl-6 mb-6
      md:pl-12 lg:pl-[100px] lg:mb-[52px] xl:pl-0"
    >
      <div
        className='w-full flex gap-4 lg:gap-5'
        style={{ width: `${widthCarousel}px` }}
      >
        {pets.map((pet, index) => (
          <PetCard key={index} pet={pet} />
        ))}
      </div>
    </div>
  )
}
