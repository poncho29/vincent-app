import { MdPets } from "react-icons/md";

import { getAllPets } from "@/actions";

import { PageContent } from "@/components/layout";

import { TablePets } from "@/sections";

import { Pet, PetTable } from "@/interfaces";

export default async function PetsPage() {
  const { pets } = await getAllPets({ all: true });

  const dataTable: PetTable[] = pets.map((pet: Pet) => ({
    ...pet,
    type: pet.type.type,
    sex: pet.sex.sex,
    size: pet.size.size,
    stage: pet.stage.stage
  }));

  return (
    <PageContent
      pageName="Mascotas"
      pageIcon={<MdPets className="size-6 text-blackLight" />}
    >
      <TablePets data={dataTable} />
    </PageContent>
  );
}