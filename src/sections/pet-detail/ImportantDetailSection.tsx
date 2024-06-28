import React from 'react'

export const ImportantDetailSection = () => {
  return (
    <section
      className='w-full mx-auto'
    >
      <div
        className='w-full max-w-[375px] mx-auto p-6
        lg:max-w-section lg:px-12 lg:py-12 xl:px-[100px]'
      >
        <h2 className='mb-5 title !text-green uppercase lg:max-w-none lg:mb-8'>
          ¡¡importante!!
        </h2>

        <p className='max-w-[720px] mx-auto paragraph lg:text-center'>
          Los datos ingresados en el formulario de adopción serán verificados, si tu formulario fue aprobado,
          te llamaremos para darte las instrucciones para la entrega del peludo.
        </p>
      </div>
    </section>
  )
}
