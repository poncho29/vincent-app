import { ButtonLink } from '@/components/common';

export const WhatYouNeedSection = () => {
  return (
    <section
      className="w-full max-w-[375px] mx-auto mb-8 px-6
      lg:max-w-section lg:px-12 xl:px-[100px] lg:mb-14"
    >
      <h3 className="title mb-4">
        ¿Que necesitas para ser voluntario?
      </h3>

      <ul
        className="mx-auto pl-4 list-disc paragraph mb-4"
      >
        <li>
          <p>Amar a los animales y tener actitud positiva</p>
        </li>

        <li>
          <p>Ser mayor de edad</p>
        </li>
        
        <li>
          <p>Estar dispuesto a trabajar en equipo y colaborar con otros voluntarios.</p>
        </li>
      </ul>

      <p className='paragraph mb-6'>
        Inscríbete y déjanos tus datos de contacto para informarte de eventos y jornadas de voluntariado.
      </p>

      <ButtonLink
        href="#"
        showIcon={false}
        className="mx-auto"
      >
        Inscríbete
      </ButtonLink>
    </section>
  )
}
