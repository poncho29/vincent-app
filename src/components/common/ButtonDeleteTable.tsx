'use client';

import { useRouter } from 'next/navigation';

import { MdDeleteForever } from 'react-icons/md';
import toast from 'react-hot-toast';

import { deletePet } from '@/actions';

import { Button } from './Button'

interface Props {
  text: string;
  id: string;
}

export const ButtonDeleteTable = ({ id, text }: Props) => {
  const router = useRouter();
  
  const handleDeletePet = async (idPet: string) => {
    if (!idPet) {
      toast.error('Error al borrar la mascota');
      return;
    };

    const toastId = toast.loading('Borrando mascota...');
    const response = await deletePet(idPet);

    if (!response.ok) {
      toast.remove(toastId);
      toast.error('Error al borrar la mascota');
      return;
    }

    toast.remove(toastId);
    toast.success('Mascota borrada');
    router.refresh();
  }

  return (
    <Button
      showIcon={false}
      className={`flex items-center gap-2 !bg-red-500 hover:!bg-red-600`}
      onClick={() => handleDeletePet(id)}
    >
      { <MdDeleteForever size={20} /> }
      <span className="text-xs lg:text-base">
        { text }
      </span>
    </Button>
  )
}
