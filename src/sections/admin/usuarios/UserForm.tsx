'use client';

import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import toast from "react-hot-toast";
import { useFormik } from "formik";

import { createUser, updateUser } from "@/actions";

import { Input, Select, Switch } from "@/components/form";
import { Button, Spinner } from "@/components/common";

import { initialValues, validationUserSchema } from "./user-form.helper";

import { Roles, User } from "@/interfaces";
import { generatePassword } from "@/utils";

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

  const [isLoadingEdit, setIsLoadingEdit] = useState(isEditing);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (user) {
      delete user.pets;

      const parsedUser = {
        ...user,
        password: '',
        roles: user.roles[0],
      }

      formik.setValues(parsedUser);
      setIsLoadingEdit(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationUserSchema,
    onSubmit: async (values) => {
      setIsLoading(true);

      delete values.id;
      const { roles, isActive, ...rest } = values;

      let body: { roles: string[], isActive?: boolean } & typeof rest  = {
        roles: [roles],
        ...rest,
      };

      if (!isEditing) {
        const password = generatePassword();
        body = { ...body, password };
        const resp = await createUser(body);

        if (!resp.success) {
          handleErrorToast(resp.error);
          return;
        }

        setIsLoading(false);
        toast.success('Usuario creado');
        router.push('/admin/usuarios');
      } else {
        const id = user?.id;
        if (body.password === '') delete body.password;
        body = { ...body, isActive };

        if (!id) {
          handleErrorToast('Error al actualizar el usuario');
          return;
        }

        const resp = await updateUser(id, body);

        if (!resp.success) {
          handleErrorToast(resp.error);
          return;
        }

        setIsLoading(false);
        toast.success('Usuario actualizado exitosamente.');
        router.push('/admin/usuarios');
      }
    }
  });


  const handleErrorToast = (message: string | null) => {
    toast.error(message);
    setIsLoading(false);
  }

  if (isLoadingEdit) {
    return (
      <div className="w-full max-w-md flex flex-col text-center mt-20 lg:max-w-[1240px]">
        <Spinner className="mx-auto" />
        <span className="mt-3 font-semibold">Cargando...</span>
      </div>
    )
  }
  
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
      
      {isEditing && (
        <Input
          id="password"
          name="password"
          placeholder="Ingresa la contraseña"
          label="Contraseña"
          inputClass="!border !border-sky"
          disabled={isLoading}
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          touched={formik.touched.password}
          msgError={formik.errors.password}
        />
      )}
      
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
          onChange={() => formik.setFieldValue('isActive', !formik.values.isActive)}
        />
      )}

      <div className="flex justify-center gap-4 pt-8">
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
