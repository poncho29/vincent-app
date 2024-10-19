import { Metadata } from "next";

import { FrequentQuestionsHomeSection, HowToBeHomeSection, StepHomeSection } from "@/sections";

export const metadata: Metadata = {
  title: "Hogar de paso",
  description: "Los hogares de paso son otra forma de ayudar a nuestros peludos. Consiste en brindar un espacio en tu hogar para acoger temporalmente a uno de nuestros peludos rescatados. En este tiempo te comprometes a cuidarlo y darle amor, mientras nosotros nos encargamos de su alimentación y demás gastos hasta encontrarles un hogar definitivo."
};

export default function StepHomePage() {
  return (
    <main className="animate-fade">
      <StepHomeSection />

      <HowToBeHomeSection />

      <FrequentQuestionsHomeSection />
    </main>
  );
}