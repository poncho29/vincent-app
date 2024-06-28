'use client';

import { useMultiAccordion } from "@/hooks";

import { Accordion } from "@/components/common";

import { initialQuestions } from "@/assets";

export const FrequentQuestionsSection = () => {
  const { questions, handleChangeAccordion } = useMultiAccordion({ initialQuestions });

  return (
    <section
      className="w-full max-w-[375px] mx-auto mb-8 p-6 
      lg:max-w-section lg:py-0 lg:px-12 xl:px-[100px] lg:mb-14"
    >
      <h2 className="title mb-5 lg:mb-6">
        Preguntas frecuentes
      </h2>

      <div className="flex flex-col gap-4">
        {questions.map(({ id, ...rest }) => (
          <Accordion
            key={id}
            {...rest}
            onChange={() => handleChangeAccordion(id)}
          />
        ))}
      </div>
    </section>
  )
}
