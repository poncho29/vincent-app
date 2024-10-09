import * as Yup from 'yup';

import { UserForm } from "@/interfaces";

export const initialValues: UserForm = {
  id: '',
  name: '',
  lastname: '',
  email: '',
  phone: '',
  roles: '',
  isActive: false
}

export const validationUserSchema = Yup.object().shape({
  name: Yup.string().required('El nombre es obligatorio'),
  lastname: Yup.string().required('El apellido es obligatorio'),
  email: Yup.string().required('El correo es obligatorio'),
  phone: Yup.string().required('El telefono es obligatorio'),
  roles: Yup.string().required('El rol es obligatorio'),
  isActive: Yup.boolean()
});