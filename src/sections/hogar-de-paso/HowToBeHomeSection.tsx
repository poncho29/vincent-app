import { ButtonLink } from "@/components/common"

const requirements = [
  'Ser mayor de edad',
  'Tener disposición para cuidar y darle cariño a un peludito.',
  'Contar con el apoyo y consentimiento de las personas que viven contigo.',
  'Estar dispuesto a cuidar al peludo por un período mínimo de 2 semanas.',
  'Llenar un formulario en el que pediremos datos básicos, para poder contactarte cuando lo necesitemos.'
]

export const HowToBeHomeSection = () => {
  return (
    <section
      className="w-full max-w-[375px] mx-auto mb-8 px-6 
      lg:max-w-section lg:px-12 xl:px-[100px] lg:mb-14"
    >
      <h1 className="max-w-56 mx-auto title mb-4 lg:max-w-none lg:mb-6">
        ¿Como ser hogar de paso?
      </h1>

      <ol className="list-decimal paragraph pl-4">
        {requirements.map((requirement) => (
          <li key={requirement}>
            <p>
              {requirement}
            </p>
          </li>
        ))}
      </ol>

      <ButtonLink
        href="#"
        showIcon={false}
        className="mx-auto mt-6"
      >
        Inscríbete
      </ButtonLink>
    </section>
  )
}
