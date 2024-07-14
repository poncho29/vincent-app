'use client';

import { useMemo } from "react";

import { MdPets } from "react-icons/md";

import { PageContent } from "@/components/layout";
import { Button, Table } from "@/components/common";

import { pets } from "@/assets";

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

export default function PetsPage() {
  const tablePets: PetTable[] = useMemo(() => {
    return pets.map((pet) => ({
      id: pet.id,
      name: pet.name,
      adopted: pet.adopted,
      sterilized: pet.sterilized,
      vacine: pet.vacine,
      race: pet.race,
      type: pet.type.type,
      sex: pet.sex.sex,
      size: pet.size.size,
      stage: pet.stage.stage
    }))
  }, []);

  return (
    <PageContent
      pageName="Mascotas"
      pageIcon={<MdPets className="size-7 text-blackLight lg:size-10" />}
    >
      <div className="flex justify-between gap-4 w-full h-10 text-blackLight">
        <Button
          showIcon={false}
          className="w-full h-10 max-w-40"
        >
          <span className="block md:hidden">Crear</span>
          <span className="hidden md:block">Crear mascota</span>
        </Button>

        <input
          type="text"
          placeholder="Buscar..."
          className="grow max-w-sm px-4 py-2 border border-skyLight rounded-lg focus:outline-sky"  
        />
      </div>

      <Table
        data={tablePets}
        columns={petsColumns}
        controls={[
          {
            icon: 'edit',
            text: 'Editar',
            onClick: (item) => console.log(item)
          },
          {
            icon: 'delete',
            text: 'Eliminar',
            onClick: (item) => console.log(item)
          }
        ]}
      />
    </PageContent>
  );
}