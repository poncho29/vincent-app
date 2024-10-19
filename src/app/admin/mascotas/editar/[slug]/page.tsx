import { MdPets } from "react-icons/md";

import {
  getAllSexes,
  getAllSizes,
  getAllStages,
  getAllTypes,
  getPet
} from "@/actions";

import {
  createSexOptionsForSelect,
  createSizeOptionsForSelect,
  createStageOptionsForSelect,
  createTypeOptionsForSelect
} from "@/utils";

import { PageContent } from "@/components/layout";
import { PetForm } from "@/sections";

interface Props {
  params: {
    slug: string;
  }
}

export default async function EditPetPage({ params }: Props) {
  const { slug } = params;

  const pet = await getPet(slug);

  if (!pet) return <div>No pet found</div>;

  const allTypesP = getAllTypes();
  const allSexesP = getAllSexes();
  const allSizesp = getAllSizes();
  const allStagesp = getAllStages();

  const [allTypes, allSexes, allSizes, allStages] = await Promise.all([
    allTypesP, allSexesP, allSizesp, allStagesp
  ]);

  const typeOptions = createTypeOptionsForSelect(allTypes);
  const sexOptions = createSexOptionsForSelect(allSexes);
  const sizeOptions = createSizeOptionsForSelect(allSizes);
  const stageOptions = createStageOptionsForSelect(allStages);

  return (
    <PageContent
      pageName="Editar Mascota"
      pageIcon={<MdPets className="size-7 text-blackLight lg:size-10" />}
    >
      <PetForm
        pet={pet}
        isEditing
        typeOptions={typeOptions}
        sexOptions={sexOptions}
        sizeOptions={sizeOptions}
        stageOptions={stageOptions}
      />
    </PageContent>
  );
}