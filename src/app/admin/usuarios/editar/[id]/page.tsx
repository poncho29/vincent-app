import { IoLayers } from "react-icons/io5";

import { getUser } from "@/actions";

import { PageContent } from "@/components/layout";
import { UserForm } from "@/sections";

interface Props {
  params: {
    id: string;
  }
}

export default async function EditUserPage({ params }: Props) {
  const { id } = params;

  const user = await getUser(id);

  return (
    <PageContent
      pageName="Editar Usuario"
      pageIcon={<IoLayers size={24} className="text-blackLight" />}
    >
      {!user ? (
        <div>No user found</div>
      ): (
        <UserForm isEditing user={user} />
      )}
    </PageContent>
  );
}