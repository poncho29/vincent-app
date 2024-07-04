import { Metadata } from "next";

import {
  FoundationNeedSection,
  HelpSaveLivesSection,
  WaysToDonate
} from "@/sections";

export const metadata: Metadata = {
  title: "Donar - Ayudanos a salvar vidas",
  description: `Cada donación, grande o pequeña, nos ayuda a proporcionar alimentos, atención médica,
  refugio y amor a los peludos rescatados. Con tu apoyo, podemos continuar nuestra misión
  de salvar y encontrar hogares amorosos para estos maravillosos animales.`,
};

export default function DonatePage() {
  return (
    <main>
      <HelpSaveLivesSection />
  
      <WaysToDonate />

      <FoundationNeedSection />
    </main>
  );
}