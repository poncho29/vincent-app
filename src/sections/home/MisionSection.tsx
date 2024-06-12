import Image from "next/image";

export const MisionSection = () => {
  return (
    <section
      className="w-full max-w-section mx-auto mb-[30px] px-6 lg:mb-[65px] xl:px-[100px]"
    >
      <h2
        className="text-xl font-mochiypopone text-center mb-5 lg:text-[50px] lg:leading-[44px] lg:mb-14"
      >
        Nuestra misión
      </h2>

      <div
        className="flex flex-col gap-4 lg:flex-row-reverse lg:gap-8"
      >
        <div
          className="max-w-[400px] mx-auto text-sm leading-4 lg:text-xl
          lg:max-w-none lg:grow"
        >
          <p>
            En <span className="font-semibold">Fundación Vincent</span> rescatamos, cuidamos y encontramos hogares amorosos para los perritos que han sido abandonados en las calles. Trabajamos incansablemente para proporcionarles atención médica, alimentación, y sobre todo, mucho amor y cuidado mientras esperan ser adoptados. Nos comprometemos en darles una segunda oportunidad y  encontrarles familias que les brinden un hogar para toda la vida.
          </p>
          <br />
          <p className="mb-16">
            Tratamos de reducir el abandono y fomentar la adopción consciente, creando así un futuro más feliz y seguro para cada uno de nuestros peludos amigos ¡Únete a nosotros en nuestra labor de salvar vidas y hacer que cada colita tenga un final feliz!
          </p>

          <Image
            src="/landing/footprints-background-mobile.png"
            alt="Footprints Background Mobile"
            width={710}
            height={120}
            className="hidden mx-auto lg:block"
          />
        </div>

        <Image 
          src="/landing/mision-section-photo.png"
          alt="Mision Section Photo"
          width={325}
          height={240}
          className="rounded-3xl mx-auto lg:hidden"
        />
        
        <Image 
          src="/landing/mision-section-photo.png"
          alt="Mision Section Photo"
          width={500}
          height={522}
          className="hidden rounded-3xl lg:block"
        />

        <Image
          src="/landing/footprints-background-mobile.png"
          alt="Footprints Background Mobile"
          width={325}
          height={80}
          className="mx-auto lg:hidden"
        />
      </div>
    </section>
  )
}
