import { MdPets } from "react-icons/md";

import { PageContent } from "@/components/layout";

interface Props {
  params: {
    slug: string;
  }
}

export default function EditPetPage({ params }: Props) {
  const { slug } = params;

  return (
    <PageContent
      pageName="Editar Mascota"
      pageIcon={<MdPets className="size-7 text-blackLight lg:size-10" />}
    >
      <h1>Editar Pet { slug }</h1>
    </PageContent>
  );
}