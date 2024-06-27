import { Accordion } from "@/components/common"


export const FrequentQuestionsSection = () => {
  return (
    <section
      className="w-full max-w-[375px] mx-auto mb-8 p-6 
      lg:max-w-section lg:px-12 xl:px-[100px] lg:mb-14"
    >
      <h2 className="title mb-4 lg:mb-6">
        Preguntas frecuentes
      </h2>

      <div className="flex flex-col gap-4">
        <Accordion
          title="¿Cuánto cuesta apadrinar un peludo?"
          text="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
          Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor
          (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal
          manera que logró hacer un libro de textos especimen."
        />
        
        <Accordion
          title="¿Por cuánto tiempo dura el apadrinamiento?"
          text="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
          Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor
          (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal
          manera que logró hacer un libro de textos especimen."
        />
      </div>
    </section>
  )
}
