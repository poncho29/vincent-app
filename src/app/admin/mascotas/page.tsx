import { MdEditSquare, MdPets } from "react-icons/md";

import { getAllPets } from "@/actions";

import { SearchTable, TableSSR } from "@/components/tables";
import { PageContent } from "@/components/layout";
import { ButtonLink } from "@/components/common";
import { ButtonDeletePet } from "./components";

import { Column, Pet, PetTable } from "@/interfaces";

const petsColumns: Column<PetTable>[] = [
  {
    header: 'Nombre',
    accessor: 'name'
  },
  {
    header: 'Adoptado',
    accessor: 'adopted'
  },
  {
    header: 'Esterilizado',
    accessor: 'sterilized'
  },
  {
    header: 'Vacunado',
    accessor: 'vacine'
  },
  {
    header: 'Raza',
    accessor: 'race'
  },
  {
    header: 'Tipo',
    accessor: 'type'
  },
  {
    header: 'Sexo',
    accessor: 'sex'
  },
  {
    header: 'Tamaño',
    accessor: 'size'
  },
  {
    header: 'Etapa',
    accessor: 'stage'
  }
];

interface Props {
  searchParams: {
    limit?: number;
    page?: number;
    search?: string;
  };
}

export default async function PetsPage({ searchParams }: Props) {
  const page = searchParams.page ? Number(searchParams.page) : 1;
  const search = searchParams.search || '';

  const { pets, totalPages } = await getAllPets({ page, search });

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
      <TableSSR
        data={dataTable}
        columns={petsColumns}
        btnCreate={{
          href: '/admin/mascotas/crear',
          text: 'Crear mascota',
          textMobile: 'Crear'
        }}
        searcher={
          <SearchTable />
        }
        pagination={{totalPages}}
        controls={(item) => (
          <>
            <ButtonLink
              key='button-edit-pet'
              showIcon={false}
              className={`flex items-center gap-2 !bg-yellow-500 hover:!bg-yellow-600`}
              href={`/admin/mascotas/editar/${item.id}`}
            >
              { <MdEditSquare size={20} /> }
              <span className="text-xs lg:text-base">
                Editar
              </span>
            </ButtonLink>

            <ButtonDeletePet
              key='button-delete-pet'
              id={item.id || ''}
              text="Eliminar"
            />
          </>
        )}
      />
    </PageContent>
  );
}