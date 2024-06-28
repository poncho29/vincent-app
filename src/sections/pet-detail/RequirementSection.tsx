import React from 'react'

export const RequirementSection = () => {
  return (
    <section
      className='w-full mx-auto bg-green'
    >
      <div
        className='w-full max-w-[375px] mx-auto p-6
        lg:max-w-section lg:px-12 lg:py-12 xl:px-[100px]'
      >
        <h2 className='max-w-64 title !text-white mx-auto mb-5 lg:max-w-none lg:mb-8'>
          Requisitos para adoptar
        </h2>

        <ol className='paragraph !text-white list-decimal pl-6 mb-5'>
          <li>Completar y enviar el formulario de adopción.</li>
          <li>Tener una edad minima de 21 años.</li>
          <li>Presentar comprobante de identidad (cédula).</li>
          <li>Compromiso de esterilización si aún no está esterilizado/castrado.</li>
          <li>Contar con disponibilidad de tiempo y recursos para cuidar del perro.</li>
        </ol>

        <p className='paragraph !text-white'>
          Estos requisitos ayudan a asegurar que los peludos sean adoptados en hogares
          responsables que puedan proporcionarles cuidado.
        </p>
      </div>
    </section>
  )
}
