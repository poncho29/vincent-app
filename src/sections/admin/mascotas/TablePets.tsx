'use client';

import { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import toast from 'react-hot-toast';

import { deletePet, getAllPets } from '@/actions';

import { Spinner, Table } from '@/components/common';

import { Column, Pet, PetTable } from '@/interfaces';

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

export const TablePets = () => {
  const router = useRouter();

  const [data, setData] = useState<PetTable[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    handleGetPets();
  }, []);

  const handleGetPets = async () => {
    setIsLoading(true);

    const { pets } = await getAllPets({ all: true });

    const dataTable: PetTable[] = pets.map((pet: Pet) => ({
      ...pet,
      type: pet.type.type,
      sex: pet.sex.sex,
      size: pet.size.size,
      stage: pet.stage.stage
    }));

    setIsLoading(false);

    setData(dataTable);
  };

  const handleDeletePet = async (id: string | undefined) => {
    if (!id) {
      toast.error('Error al borrar la mascota');
      return;
    };

    const response = await deletePet(id);

    if (!response.ok) {
      toast.error('Error al borrar la mascota');
      return;
    }

    toast.success('Mascota borrada');

    await handleGetPets();
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spinner />
      </div>
    )
  }

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
          onClick: (item) => handleDeletePet(item.id)
        }
      ]}
    />
  )
}
