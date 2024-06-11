import { Button } from '@/components/common';

export const BannerSection = () => {
  return (
    <section
      className="w-full h-[257px] text-white bg-bannerLandingMobile bg-cover bg-center
      bg-no-repeat md:bg-bannerLanding md:h-[385px] lg:h-[565px]"
    >
      <div
        className="h-full max-w-section mx-auto flex flex-col items-end py-5 px-6 md:p-12
        lg:pt-[78px] lg:px-12 xl:px-[100px]"
      >
        <h1
          className="text-2xl font-mochiypopone mb-2.5 md:text-6xl md:leading-[70px] md:mb-5"
        >
          Fundación Vincent
        </h1>

        <h2 className="font-semibold mb-2.5 md:text-[30px] md:leading-6 md:mb-[18px]">
          ¡Donde cada ladrido cuenta!
        </h2>

        <p
          className="w-full max-w-[261px] text-sm text-end font-medium leading-[14px] sm:max-w-[385px]
          md:h-[68px] md:max-w-[662px] md:text-[22px] md:leading-6"
        >
          Únete a nosotros en nuestra misión de salvar vidas peludas y encontrar hogares llenos de amor. Juntos, hacemos la diferencia en las vidas de estos increíbles perritos.
        </p>

        <div className="flex gap-3 mt-[15px] md:mt-6 lg:gap-[50px] lg:mt-[101px]">
          <Button>Adoptar</Button>
          <Button variant="secondary">Dona</Button>
        </div>
      </div>
    </section>
  )
}
