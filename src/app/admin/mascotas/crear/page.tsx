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