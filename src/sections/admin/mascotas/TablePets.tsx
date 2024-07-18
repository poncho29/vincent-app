'use client';

import { useRouter } from 'next/navigation';

import { Table } from '@/components/common';

import { Column, PetTable } from '@/interfaces';

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

export const storeSearchableFields: (keyof PetTable)[] = ['name', 'race', 'size', 'stage'];

interface Props {
  data: PetTable[];
}

export const TablePets = ({ data }: Props) => {
  const router = useRouter();

  return (
    <Table
      data={data}
      columns={petsColumns}
      searchableFields={storeSearchableFields}
      btnCreate={{
        href: '/admin/mascotas/crear',
        text: 'Crear mascota',
        textMobile: 'Crear'
      }}
      controls={[
        {
          icon: 'edit',
          text: 'Editar',
          onClick: (item) => router.push(`/admin/mascotas/editar/${item.slug}`)
        },
        {
          icon: 'delete',
          text: 'Eliminar',
          onClick: (item) => console.log(item)
        }
      ]}
    />
  )
}
