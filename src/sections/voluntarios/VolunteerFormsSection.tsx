
export const VolunteerFormsSection = () => {
  return (
    <section
      className="w-full max-w-[375px] mx-auto mb-8 px-6
      lg:max-w-section lg:px-12 xl:px-[100px] lg:mb-14"
    >
      <h3
        className="max-w-32 mx-auto title mb-4 lg:max-w-none"
      >
        Formas de voluntariar
      </h3>

      <ul className="flex flex-col gap-2 list-disc paragraph pl-4">
        <li className="font-bold">
          <span>Cuidado y paseo de perros: </span>
          <p className="inline font-normal">
            Ayuda a nuestros peludos a mantenerse activos y felices llevándolos a pasear, jugando con ellos,
            bañándolos  y brindándoles el amor y la atención que merecen.
          </p>
        </li>
        <li className="font-bold">
          <span>Apoyo en Eventos y Recaudación de Fondos: </span>
          <p className="inline font-normal">
            Colabora en la organización y ejecución de eventos de recaudación de fondos para apoyar a la fundación.
          </p>
        </li>
        <li className="font-bold">
          <span>Mantenimiento y Limpieza: </span>
          <p className="inline font-normal">
            Ayúdanos a que nuestras instalaciones estén limpias y seguras para nuestros peludos.
          </p>
        </li>
      </ul>
    </section>
  )
}
