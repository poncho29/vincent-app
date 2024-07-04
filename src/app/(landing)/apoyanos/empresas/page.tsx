import { Metadata } from "next";

import { CompaniesResumeSection } from "@/sections";

export const metadata: Metadata = {
  title: "Empresas Comprometidas",
  description: "Las empresas desempeñan un papel fundamental en el apoyo a nuestra misión de rescatar y cuidar perros en situación de abandono. Hay muchas maneras en las que tu empresa puede contribuir a nuestra causa y hacer una diferencia significativa en la vida de estos peludos."
};

export default function CompaniesPage() {
  return (
    <main>
      <CompaniesResumeSection />
    </main>
  );
}