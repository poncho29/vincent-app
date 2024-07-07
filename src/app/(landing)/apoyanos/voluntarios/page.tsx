import { Metadata } from "next";

import { JoinUpSection, VolunteerFormsSection, WhatYouNeedSection } from "@/sections";

export const metadata: Metadata = {
  title: "Voluntarios",
  description: "Ayuda a Crear un Futuro Mejor para Nuestros Peludos Amigos"
};

export default function VolunteersPage() {
  return (
    <main>
      <JoinUpSection />

      <WhatYouNeedSection />

      <VolunteerFormsSection />
    </main>
  );
}