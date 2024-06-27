import { Button, ButtonLink } from "@/components/common"

export const HowWorkSection = () => {
  return (
    <section
      className="w-full max-w-[375px] mx-auto mb-8 p-6 
      lg:max-w-section lg:px-12 xl:px-[100px] lg:mb-14"
    >
      <h2 className="title mb-4 !text-start lg:mb-6">
        ¿Cómo funciona?
      </h2>

      <p className="paragraph mb-4">
        El proceso de apadrinamiento es simple y gratificante:
      </p>

      <div className="mb-4">
        <p className="paragraph mb-1">
          <span className="uppercase font-bold">paso 1: </span>
          Elige un peludo de nuestra lista de perros disponibles, puedes ir a la
          fundación o escogerlo a través de los perfiles publicados.
        </p>
        <p className="paragraph mb-1">
          <span className="uppercase font-bold">paso 2: </span>
          Mensualmente el padrino dará el aporte que considere para el mantenimiento del peludito.
          Bien sea en dinero o en especie (comida, medicamentos, materiales de aseo).
        </p>
        <p className="paragraph mb-1">
          <span className="uppercase font-bold">paso 3: </span>
          Para la entrega de aporte en dinero podrás realizar la consignación a la cuenta de
          ahorros Bancolombia Fundación Vincent rescate animal&nbsp;
          <span className="font-bold">290 000009 33</span> NIT&nbsp;
          <span className="font-bold">901539964</span>
        </p>
        <p className="paragraph mb-1">
          <span className="uppercase font-bold">paso 4: </span>
          Para la entrega de aporte en especia podrá entregarse en la Calle 11 # 15-19 Socorro Santander.
        </p>
        <p className="paragraph">
          <span className="uppercase font-bold">paso 5: </span>
          Disfruta de las actualizaciones y ve el impacto de tu apoyo
        </p>
      </div>

      <h2 className="font-bold text-center mb-6">
        “Recuerda que puedes visitar a tu apadrinado y pasearlo si lo deseas”
      </h2>

      <div className="flex flex-col items-center gap-4">
        <Button
          className="w-36 h-[30px] lg:w-56 lg:h-12"
        >
          Apadrinar hoy
        </Button>
        <ButtonLink
          href="/adoptar"
          variant="secondary"
          showIcon={false}
          className="w-52 h-[30px] lg:w-64 lg:h-12"
        >
          Conoce a los peluditos
        </ButtonLink>
      </div>
    </section>
  )
}
