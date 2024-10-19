import { notFound } from "next/navigation";

import { ImportantDetailSection, PetDetailSection, RequirementSection } from "@/sections";

// import { pets } from "@/assets";
import { getPet } from "@/actions";

interface Props {
  params: {
    slug: string;
  }
}

export default async function PetDetailPage({ params }: Props) {
  const { slug } = params;

  // const currentPet = pets.find((pet) => pet.slug === slug);
  const pet = await getPet(slug);

  if (!pet) notFound();

  return (
    <main>
      <PetDetailSection pet={pet} />

      <RequirementSection />

      <ImportantDetailSection />
    </main>
  );
}