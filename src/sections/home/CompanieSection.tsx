import { Button } from '@/components/common'
import Image from 'next/image'
import React from 'react'

export const CompanieSection = () => {
  return (
    <section
      className="w-full max-w-section flex flex-col items-center mx-auto mb-[30px] px-6 lg:mb-[65px] xl:px-[100px]"
    >
      <h2
        className="title mb-4 lg:mb-8"
      >
        Empresas <br className='lg:hidden' /> comprometidas
      </h2>

      <Image
        src="/landing/encantadogs-logo-mobile.png"
        alt="Encantadogs Logo"
        width={120}
        height={50}
        className="block mb-4 lg:hidden"
      />

      <Image
        src="/landing/encantadogs-logo.png"
        alt="Encantadogs Logo"
        width={425}
        height={175}
        className="hidden mb-11 lg:block"
      />

      <div
        className="max-w-[400px] paragraph text-center mb-4 lg:max-w-[800px] lg:mb-8"
      >
        <p>
          Gracias a cada empresa colaboradora, podemos seguir salvando vidas y construyendo
          futuros llenos de amor y responsabilidad.
        </p>
        <br />
        <p className="font-semibold">
          ¡Únete como empresa a nuestro compromiso de hacer del mundo un lugar mejor para
          nuestros amigos de cuatro patas!
        </p>
      </div>

      <Button
        showIcon={false}
        className='w-[142px] h-[30px] text-base lg:w-[203px] lg:h-[55px] lg:text-xl'
      >
        Quiero unirme
      </Button>
    </section>
  )
}
