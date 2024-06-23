import { notFound } from "next/navigation";

import { PetDetailSection } from "@/sections";

import { pets } from "@/assets";

interface Props {
  params: {
    slug: string;
  }
}

export default function PetDetailPage({ params }: Props) {
  const { slug } = params;

  const currentPet = pets.find((pet) => pet.slug === slug);

  if (!currentPet) notFound();

  return (
    <main>
      <PetDetailSection pet={currentPet} />
    </main>
  );
}