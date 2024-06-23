import Link from 'next/link';
import Image from 'next/image';

import { Button } from '@/components/common';
import { ArrowBackIcon } from '@/components/icons';

import { Pet } from '@/interfaces';

interface Props {
  pet: Pet;
}

export const PetDetailSection = ({ pet }: Props) => {
  return (
    <section
      className='w-full max-w-section mx-auto px-6 mb-8 lg:mb-14 lg:px-12 xl:px-[100px]'
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
        className='hidden py-12 mx-auto lg:block'
      />

      <div className='flex flex-col items-center lg:items-start'>
        <div
          className='w-full max-w-64 flex items-center mb-5 lg:hidden'
        >
          <Link href='/adoptar'>
            <ArrowBackIcon />
          </Link>

          <h2 className='title grow'>{ pet.name }</h2>
        </div>

        <div
          className='max-w-64 paragraph lg:max-w-section lg:flex lg:gap-12'
        >
          <Image
            src={pet.images[0]}
            alt={pet.name}
            width={240}
            height={240}
            className='mx-auto mb-5 lg:hidden'
          />
          
          <Image
            src={pet.images[0]}
            alt={pet.name}
            width={400}
            height={400}
            className='hidden max-h-[400px] lg:block lg:px-0'
          />

          <div>
            <h2 className='hidden title !text-start mb-7 lg:block'>{ pet.name }</h2>

            <p className='mb-5 lg:mb-7'>
              ¡Hola! me llamo nala, soy tranquila y me encanta caminar
            </p>

            <div
              className='flex flex-col items-center gap-1 mb-5 lg:items-start lg:mb-7'
            >
              <DetailInfo detail='raza' value={pet.race} />
              <DetailInfo detail='sexo' value={pet.sex.sex} />
              <DetailInfo detail='tamaño' value={pet.size.size} />
              <DetailInfo detail='etapa' value={pet.stage.stage} />
              <p>{ pet.sterilized ? 'Esterilizado' : 'No esterilizado' }</p>
              <p>{ pet.vacine ? 'Vacunado' : 'No vacunado' }</p>
            </div>

            <div className='flex justify-center gap-5 lg:justify-start'>
              <Button>Adoptar</Button>
              <Button variant='outline'>Apadrinar</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

interface DetailInfoProps {
  detail: string;
  value: string;
}

export const DetailInfo = ({ detail, value }: DetailInfoProps) => {
  return (
    <p className='paragraph font-semibold capitalize'>
      <span className='font-bold'>{ detail }:</span> { value }
    </p>
  )
}