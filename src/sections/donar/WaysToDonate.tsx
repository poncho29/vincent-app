import { DonateItem } from '@/components/common';

import  { WaysToDonateData } from '@/assets';

export const WaysToDonate = () => {
  return (
    <section
      className='w-full mx-auto bg-sky'
    >
      <div
        className='w-full max-w-[375px] mx-auto p-6 text-white
        lg:max-w-section lg:px-12 lg:pt-12 lg:pb-14 xl:px-[100px]'
      >
        <h2
          className='max-w-40 title !text-white mx-auto mb-5 lg:max-w-none lg:mb-8'
        >
          Formas de donar
        </h2>

        <div>
          <div className='mb-5 lg:mb-8'>
            <h4 className='title !text-white mb-3 lg:mb-4'>Donaciones económicas</h4>
            <p className='max-w-[800px] paragraph !text-white text-center mx-auto'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates fuga ea quasi:
            </p>
          </div>

          {WaysToDonateData[0].options.map((donateInfo, index) => (
            <DonateItem key={index} donateInfo={donateInfo} />
          ))}
        </div>
      </div>
    </section>
  )
}
