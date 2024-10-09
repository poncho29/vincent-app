'use client';

import { useState } from "react";

import { useRouter } from "next/navigation";

import { useFormik } from "formik";

import { Input, Select, Switch } from "@/components/form";
import { Button, Spinner } from "@/components/common";

import { initialValues, validationUserSchema } from "./user-form.helper";

import { Roles, User } from "@/interfaces";

const rolesOptions = [
  { label: 'Super admin', value: Roles.superAdmin },
  { label: 'Admin', value: Roles.admin },
  { label: 'User', value: Roles.user },
]

interface Props {
  user?: User | null;
  isEditing?: boolean;
}

export const UserForm = ({
  user,
  isEditing = false,
}: Props) => {
  const router = useRouter();
  
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationUserSchema,
    onSubmit: async (values) => {
      setIsLoading(true);

      console.log(values);

      setIsLoading(false);
    }
  });
  
  return (
    <form
      className="w-full max-w-md mx-auto lg:max-w-3xl"
      onSubmit={formik.handleSubmit}
    >
      <Input
        id="name"
        name="name"
        placeholder="Ingresa el nombre del usuario"
        label="Nombre"
        inputClass="!border !border-sky"
        disabled={isLoading}
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        touched={formik.touched.name}
        msgError={formik.errors.name}
      />
      
      <Input
        id="lastname"
        name="lastname"
        placeholder="Ingresa el apellido del usuario"
        label="Apellido"
        inputClass="!border !border-sky"
        disabled={isLoading}
        value={formik.values.lastname}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        touched={formik.touched.lastname}
        msgError={formik.errors.lastname}
      />
      
      <Input
        id="email"
        name="email"
        placeholder="Ingresa el correo electrónico"
        label="Correo electrónico"
        inputClass="!border !border-sky"
        disabled={isLoading}
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        touched={formik.touched.email}
        msgError={formik.errors.email}
      />
      
      <Input
        id="phone"
        name="phone"
        type="phone"
        placeholder="Ingresa el teléfono"
        label="Teléfono"
        inputClass="!border !border-sky"
        disabled={isLoading}
        value={formik.values.phone}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        touched={formik.touched.phone}
        msgError={formik.errors.phone}
      />

      <Select
        id="roles"
        name="roles"
        label="Rol de usuario"
        disabled={isLoading}
        options={rolesOptions}
        value={formik.values.roles}
        onChange={(e) => {
          const value = e.target.value;
          formik.setFieldValue('roles', value);
        }}
        onBlur={formik.handleBlur}
        touched={formik.touched.roles}
        msgError={formik.errors.roles}
      />

      {isEditing && (
        <Switch
          id="isActive"
          name="isActive"
          label="Estado del usuario"
          disabled={isLoading}
          checked={formik.values.isActive}
          onChange={() => formik.setFieldValue('vacine', !formik.values.isActive)}
        />
      )}

      <div className="flex justify-center gap-4">
        <Button
          type="button"
          variant="outline"
          showIcon={false}
          disabled={isLoading}
          className={isLoading ? 'opacity-50' : ''}
          onClick={() => router.push('/admin/usuarios')}
        >
          Cancelar
        </Button>

        <Button
          type="submit"
          showIcon={false}
          disabled={isLoading}
        >
          {isLoading ? <Spinner className="size-6" /> : user ? 'Actualizar' : 'Crear'}
        </Button>
      </div>
    </form>
  )
}
