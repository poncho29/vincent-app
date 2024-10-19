import { IoLayers } from "react-icons/io5";

import { PageContent } from "@/components/layout";
import { UserForm } from "@/sections";

export default async function CreateUserPage() {
  return (
    <PageContent
      pageName="Crear Usuario"
      pageIcon={<IoLayers size={24} className="text-blackLight" />}
    >
      <UserForm />
    </PageContent>
  );
}