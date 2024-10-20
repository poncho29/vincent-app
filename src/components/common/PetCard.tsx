import React from 'react';

import Image from 'next/image';

import { ButtonLink } from './ButtonLink';
import { PetNameCard } from './PetNameCard';

import { Pet } from '@/interfaces';

interface Props {
  pet: Pet;
  className?: string;
}

export const PetCard = React.forwardRef<HTMLDivElement, Props>(({ pet, className }, ref) => {
  return (
    <div
    ref={ref}
      className={`relative w-[250px] h-[320px] rounded-3xl shadow-md bg-white
      border-t border-slate-200 lg:w-[350px] lg:h-[444px] ${ className }`}	
    >
      <Image
        src={pet.images[0]}
        alt="Nala"
        width={250}
        height={250}
        className="block no-drag rounded-3xl lg:hidden"
      />
      
      <Image
        src={pet.images[0] || '/common/default-pet.webp'}
        alt="Nala"
        width={350}
        height={350}
        className="hidden no-drag rounded-3xl lg:block"
      />

      <PetNameCard name={pet.name} />

      <div
        className="w-full absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-white
        rounded-t-[36px] border-t border-slate-200 lg:bottom-4"
      >
        <p
          className="inline-block w-56 paragraph text-center text-blackLight font-semibold
          leading-4 mb-2 pt-4 *:capitalize lg:w-full lg:mb-4"
        >
          <span>{ pet.sex.sex }</span> • &nbsp;
          <span>{ pet.size.size }</span> <br />
          <span>{ pet.race }</span>
        </p>

        <div className="flex items-center gap-5 justify-center">
          <ButtonLink href={`/adoptar/${pet.slug}`}>Adoptar</ButtonLink>
          <ButtonLink href="/apadrinar" variant="outline">Apadrinar</ButtonLink>
        </div>
      </div>
    </div>
  )
});

PetCard.displayName = 'PetCard';
