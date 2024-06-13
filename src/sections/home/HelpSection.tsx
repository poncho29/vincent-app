import { Button } from '@/components/common'
import React from 'react'

export const HelpSection = () => {
  return (
    <section
      className="w-full"
    >
      <div
        className="relative h-[218px] max-w-section mx-auto px-6 lg:mb-[65px] xl:px-[100px]"
      >
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[325px] py-5 px-4 rounded-3xl bg-green
          lg:w-[990px] lg:h-[417px] lg:py-6 lg:px-[95px]"
        >
          <h2
            className="text-xl font-mochiypopone text-center text-white mb-5
            lg:text-4xl lg:mb-6"
          >
            Necesitamos tu <br className="hidden lg:block" /> ayuda
          </h2>

          <div className="text-white text-sm text-center mb-5 lg:text-xl lg:leading-6 lg:mb-8">
            <p>
              ¡Queremos contar contigo para seguir cambiando vidas!
              En Fundación Vincent, promovemos los hogares de paso para brindar refugio temporal a nuestros queridos peludos. Si tienes espacio en tu hogar y amor para compartir de forma temporal, te invitamos a unirte a nuestra familia de Hogares de paso.
            </p>
            <br />
            <p>
              ¡Inscríbete hoy y sé parte de esta increíble labor de darles una segunda oportunidad llena de cariño y cuidado!
            </p>
          </div>

          <Button
            showIcon={false}
            className="w-[142px] h-[30px] mx-auto text-base lg:w-[203px] lg:h-[55px] lg:text-2xl"
          >
            Quiero unirme
          </Button>
        </div>
      </div>

      <div className="w-full h-[200px] bg-gray lg:h-[279px]"></div>
    </section>
  )
}
