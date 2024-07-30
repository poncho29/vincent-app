import { MdPets } from "react-icons/md";

import { getAllSexes, getAllSizes, getAllStages, getAllTypes } from "@/actions";

import {
  createSexOptionsForSelect,
  createSizeOptionsForSelect,
  createStageOptionsForSelect,
  createTypeOptionsForSelect
} from "@/utils";

import { PageContent } from "@/components/layout";
import { PetForm } from "@/sections";

export default async function CreatePetPage() {
  const allTypes = await getAllTypes();
  const allSexes = await getAllSexes();
  const allSizes = await getAllSizes();
  const allStages = await getAllStages();

  const typeOptions = createTypeOptionsForSelect(allTypes);
  const sexOptions = createSexOptionsForSelect(allSexes);
  const sizeOptions = createSizeOptionsForSelect(allSizes);
  const stageOptions = createStageOptionsForSelect(allStages);

  return (
    <PageContent
      pageName="Crear Mascota"
      pageIcon={<MdPets className="size-7 text-blackLight" />}
    >
      <PetForm
        typeOptions={typeOptions}
        sexOptions={sexOptions}
        sizeOptions={sizeOptions}
        stageOptions={stageOptions}
      />
    </PageContent>
  );
}