import { MdPets } from "react-icons/md";

import { PageContent } from "@/components/layout";

export default function CreatePetPage() {
  return (
    <PageContent
      pageName="Crear Mascota"
      pageIcon={<MdPets className="size-7 text-blackLight lg:size-10" />}
    >
      <h1>Create Pet</h1>
    </PageContent>
  );
}