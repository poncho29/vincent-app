import * as Yup from 'yup';

import { PetForm, PetTable } from '@/interfaces';

export const initialValues: PetForm = {
  id: '',
  name: '',
  slug: '',
  race: '',
  adopted: false,
  sterilized: false,
  vacine: false,
  type: '',
  sex: '',
  size: '',
  stage: '',
  images: []
  // images: ['vincent/qkmal3cyi5ianv8r75rl', 'vincent/pwxsgth0nd2paomn8alw']
}

export const validationSchema = Yup.object().shape({
  name: Yup.string().required('El nombre es obligatorio'),
  slug: Yup.string().required('El apodo es obligatorio'),
  race: Yup.string().required('La raza es obligatoria'),
  type: Yup.string().required('El tipo es obligatorio'),
  sex: Yup.string().required('El sexo es obligatorio'),
  size: Yup.string().required('El tamaño es obligatorio'),
  stage: Yup.string().required('El estado es obligatorio'),
  images: Yup.array()
    .min(1, 'Debe agregar al menos una imagen')
    .required('Las imágenes son obligatorias'),
});