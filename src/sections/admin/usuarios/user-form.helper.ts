import * as Yup from 'yup';

import { UserForm } from "@/interfaces";

export const initialValues: UserForm = {
  name: '',
  lastname: '',
  email: '',
  password: '',
  phone: '',
  roles: '',
  isActive: false
}

export const validationUserSchema = Yup.object().shape({
  name: Yup.string().required('El nombre es obligatorio'),
  lastname: Yup.string().required('El apellido es obligatorio'),
  email: Yup.string().required('El correo es obligatorio'),
  password: Yup.string().optional(),
  phone: Yup.string().required('El telefono es obligatorio'),
  roles: Yup.string().required('El rol es obligatorio'),
  isActive: Yup.boolean().optional(),
});