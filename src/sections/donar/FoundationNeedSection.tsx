const needs = [
  'Purina para perro adulto y cachorro.',
  'Pollo y menudencias para dieta blanda de los viejitos.',
  'Shampoo y jabón para perritos.',
  'Desparasitantes.',
  'Camas, cobijas y toallas.',
  'Juguetes para perros.',
  'Coquitas para comida y agua.',
  'Tapetes.',
  'Guacales grandes y pequeños para perro.',
  'Collares de caminata.',
  'Elementos de aseo (detergente, desinfectante, jabon rey, antihongos, escobas, trapero, limpiones, recogedor, canecas, cepillos, bombillos, valdes).',
  'Equipo medico (gusantrol, gasas, jeringas, guantes, solución salina entre otros).'
]

export const FoundationNeedSection = () => {
  return (
    <section
      className="w-full max-w-[375px] mx-auto p-6 
      lg:max-w-section lg:p-12 xl:px-[100px] xl:pt-12 xl:pb-14"
    >
      <h2
        className="max-w-[208px] mx-auto title mb-5 lg:max-w-none lg:mb-8"
      >
        Necesidades de la fundación
      </h2>

      <ul className="pl-6 list-disc mb-6 lg:grid lg:grid-cols-2 lg:gap-x-[120px]">
        {needs.map((need) => (
          <li key={need}>
            <span className="paragraph">{ need }</span>
          </li>
        ))}
      </ul>

      <h3 className="title !text-green uppercase mb-4">
        ¡¡importante!!
      </h3>

      <p
        className="max-w-[296px] mx-auto paragraph text-center mb-6
        lg:max-w-[820px] lg:mb-10"
      >
        Si quieres realizar donación de insumos directamente en la fundación
        nos puedes contactar al WhatsApp&nbsp;
        <a href="tel:3164148818" className="font-semibold cursor-pointer">316 414 8818.</a>&nbsp;
        Todo soporte de donación
        económica (soporte de pago) por favor enviarlo al WhatsApp
        &nbsp;<span className="font-semibold cursor-pointer">316 414 8818.</span>&nbsp;
      </p>

      <div
        className="max-w-[325px] mx-auto p-6 rounded-3xl bg-green
        lg:max-w-[650px] lg:p-8"
      >
        <p className="text-white text-xl text-center font-mochiypopone lg:text-2xl">
          &ldquo; Con tu apoyo, podemos seguir brindando una segunda oportunidad a los peludos que más lo necesitan&rdquo;
          <br />
          ¡Únete a nuestra misión y salva una vida hoy!
        </p>
      </div>
    </section>
  )
}
