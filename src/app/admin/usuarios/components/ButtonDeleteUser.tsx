'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';

import { MdDeleteForever } from 'react-icons/md';
import toast from 'react-hot-toast';

import { updateUser } from '@/actions';

import { Button, Modal, Spinner } from '@/components/common';
import { InactiveUser } from '@/actions/users/inactive-user';
import { IoPersonAdd, IoPersonRemove } from 'react-icons/io5';

interface Props {
  text: string;
  id: string;
  isActive: boolean;
}

export const ButtonDeleteUser = ({ id, isActive, text }: Props) => {
  const router = useRouter();

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleDeleteUser = async () => {
    setIsLoading(true);

    if (!id) {
      setIsLoading(false);
      toast.error(`Error al ${text} el usuario`);
      return;
    };

    const body = { isActive: !isActive };

    const response = await InactiveUser(id, body);

    if (!response.success) {
      setIsLoading(false);
      setIsOpenModal(false);
      toast.error(`Error al ${text} el usuario`);
      return;
    }

    setIsLoading(false);
    setIsOpenModal(false);
    toast.success(`Usuario se ${isActive ? 'inactivo' : 'activo'} correctamente`);
    router.refresh();
  }

  return (
    <>
      <Button
        showIcon={false}
        className={`flex items-center gap-2 ${!isActive ? '!bg-green-500 hover:!bg-green-600' : '!bg-red-500 hover:!bg-red-600'}`}
        onClick={() => setIsOpenModal(true)}
      >
        { !isActive ? <IoPersonAdd size={20} /> : <IoPersonRemove size={20} /> }
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
            ¿Esta seguro de {text} este usuario?
          </h4>

          <div className='flex justify-center gap-3'>
            <Button
              showIcon={false}
              className='!bg-red-500 hover:!bg-red-600'
              onClick={handleDeleteUser}
            >
              { isLoading ? <Spinner className='size-6' /> : text }
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
