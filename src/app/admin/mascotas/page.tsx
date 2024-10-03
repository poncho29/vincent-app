import { MdEditSquare, MdPets } from "react-icons/md";

import { getAllPets } from "@/actions";

import { ButtonLink, ButtonDeleteTable } from "@/components/common";
import { PageContent } from "@/components/layout";
import { TableSSR } from "@/components/tables";

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
      <TableSSR
        data={dataTable}
        columns={petsColumns}
        btnCreate={{
          href: '/admin/mascotas/crear',
          text: 'Crear mascota',
          textMobile: 'Crear'
        }}
        controls={(item) => {
          return (
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

              <ButtonDeleteTable
                key='button-delete-pet'
                id={item.id || ''}
                text="Eliminar"
              />
            </>
          )
        }}
      />
    </PageContent>
  );
}