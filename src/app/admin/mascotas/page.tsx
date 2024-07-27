import { MdPets } from "react-icons/md";

import { getAllPets } from "@/actions";

import { PageContent } from "@/components/layout";

import { TablePets } from "@/sections";

import { PetTable } from "@/interfaces";

export default async function PetsPage() {
  const { pets } = await getAllPets({ all: true });

  const dataTable: PetTable[] = pets.map((pet) => ({
    id: pet.id,
    slug: pet.slug,
    name: pet.name,
    adopted: pet.adopted,
    sterilized: pet.sterilized,
    vacine: pet.vacine,
    race: pet.race,
    type: pet.type.type,
    sex: pet.sex.sex,
    size: pet.size.size,
    stage: pet.stage.stage
  }));

  return (
    <PageContent
      pageName="Mascotas"
      error={true}
      pageIcon={<MdPets className="size-7 text-blackLight lg:size-10" />}
    >
      <TablePets data={dataTable} />

      <div className="w-full h-28 bg-slate-400 mt-8"></div>
    </PageContent>
  );
}