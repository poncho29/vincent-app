import { ButtonLink } from '@/components/common'
import React from 'react'

export const WarningSection = () => {
  return (
    <section
      className="w-full max-w-[375px] mx-auto mb-8  
      lg:max-w-section lg:mb-14"
    >
      <div className="px-6 lg:px-12 xl:px-[100px]">
        <h3 className="title !text-green uppercase mb-4">
          ¡¡importante!!
        </h3>

        <p
          className="max-w-[325px] mx-auto paragraph text-center mb-6
          lg:max-w-[820px] lg:mb-10"
        >
          Todas las formas de apoyo mencionadas implican un compromiso mensual.
          Este enfoque garantiza que la Fundación Vincent reciba un apoyo constante y sostenible,
          lo cual es crucial para cubrir las necesidades continuas de nuestros perros y asegurar el
          funcionamiento efectivo de nuestros programas.
        </p>

        <h3 className="title mb-4">
          Beneficios para la empresa
        </h3>

        <ul className="max-w-[520px] mx-auto pl-4 list-disc paragraph mb-6">
          <li>
            <p>Visibilidad y reconocimiento en nuestras plataformas.</p>
          </li>

          <li>
            <p>Mejora la percepción de tu empresa como socialmente responsable y comprometida con el bienestar animal.</p>
          </li>
        </ul>
      </div>

      <div className="max-w-[820px] mx-auto p-6 bg-green lg:py-10 lg:rounded-xl">
        <h4
        className="max-w-[650px] mx-auto title !text-white !leading-7 mb-4
        lg:!text-2xl lg:!leading-8 lg:mb-6"
        >
          Unamos fuerzas para mejorar la vida de los perros en situación de abandono.
          Tu empresa puede hacer una gran diferencia
        </h4>

        <ButtonLink
          href="#"
          showIcon={false}
          className="w-[142px] h-[30px] mx-auto !text-green !bg-white text-base
          lg:w-[203px] lg:h-[55px] lg:text-2xl"
        >
          Inscríbete
        </ButtonLink>
      </div>
    </section>
  )
}
