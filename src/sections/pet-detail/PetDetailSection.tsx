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
        className='hidden pt-14 pb-16 mx-auto lg:block lg:px-12'
      />

      <div className='flex flex-col items-center'>
        <div className='w-full flex items-center mb-5 lg:hidden'>
          <ArrowBackIcon />

          <h2 className='title grow'>{ pet.name }</h2>
        </div>

        <div className='max-w-64 paragraph'>
          <Image
            src={pet.images[0]}
            alt={pet.name}
            width={240}
            height={240}
            className='mx-auto mb-5 object-fill'
          />

          <p className='mb-5'>
            ¡Hola! me llamo nala, soy tranquila y me encanta caminar
          </p>

          <div className='flex flex-col items-center gap-1 mb-5'>
            <DetailInfo detail='raza' value={pet.race} />
            <DetailInfo detail='sexo' value={pet.sex.sex} />
            <DetailInfo detail='tamaño' value={pet.size.size} />
            <DetailInfo detail='etapa' value={pet.stage.stage} />
            <p>{ pet.sterilized ? 'Esterilizado' : 'No essterilizado' }</p>
            <p>{ pet.vacine ? 'Vacunado' : 'No vacunado' }</p>
          </div>

          <div className='flex justify-center gap-5'>
            <Button>Adoptar</Button>
            <Button variant='outline'>Apadrinar</Button>
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