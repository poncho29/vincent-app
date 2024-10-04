'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';

import { MdDeleteForever } from 'react-icons/md';
import toast from 'react-hot-toast';

import { deletePet } from '@/actions';

import { Button, Modal, Spinner } from '@/components/common';

interface Props {
  text: string;
  id: string;
}

export const ButtonDeletePet = ({ id, text }: Props) => {
  const router = useRouter();

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleDeletePet = async () => {
    setIsLoading(true);

    if (!id) {
      setIsLoading(false);
      toast.error('Error al borrar la mascota');
      return;
    };

    const response = await deletePet(id);

    if (!response.ok) {
      setIsLoading(false);
      toast.error('Error al borrar la mascota');
      return;
    }

    setIsLoading(false);
    toast.success('Mascota borrada');
    router.refresh();
  }

  return (
    <>
      <Button
        showIcon={false}
        className={`flex items-center gap-2 !bg-red-500 hover:!bg-red-600`}
        onClick={() => setIsOpenModal(true)}
      >
        { <MdDeleteForever size={20} /> }
        <span className="text-xs lg:text-base">
          { text }
        </span>
      </Button>
      
      <Modal
        showClose={false}
        isOpen={isOpenModal}
        containerClass='flex items-center justify-center'
      >
        <div className='max-w-96 flex flex-col gap-3 bg-slate-100 rounded-xl p-6'>
          <h4 className='lg:text-xl text-center font-semibold'>
            ¿Esta seguro de eliminar esta mascota?
          </h4>

          <div className='flex justify-center gap-3'>
            <Button
              showIcon={false}
              className='!bg-red-500 hover:!bg-red-600'
              onClick={handleDeletePet}
            >
              { isLoading ? <Spinner className='size-6' /> : 'Eliminar'}
            </Button> 
            <Button showIcon={false} onClick={() => setIsOpenModal(false)} >
              Cancelar
            </Button> 
          </div>
        </div>
      </Modal>
    </>
  )
}
