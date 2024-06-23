import Image from "next/image";

export const MessageSection = () => {
  return (
    <section className="w-full max-w-section mx-auto mb-8 lg:mb-14">
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

      <div className="w-full max-w-[978px] mx-auto">
        <h1 className="title mb-4 lg:mb-6">Encuentra a un amigo de por vida</h1>

        <p className="paragraph">
          En Fundación Vincent, creemos que cada perrito merece un hogar lleno de amor.
          Aquí podrás conocer a nuestros adorables peludos que están buscando una familia
          que transforme su vida.
        </p>
      </div>
    </section>
  )
}
