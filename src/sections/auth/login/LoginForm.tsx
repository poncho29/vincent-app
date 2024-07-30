'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import { useAuth } from '@/context';

import { Button } from '@/components/common'
import { Input } from '@/components/form'

export const LoginForm = () => {
  const router = useRouter();

  const { login } = useAuth();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [togglePassword, setTogglePassword] = useState(false);
  
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email('El correo electrónico no es valido')
        .required('El correo electrónico es obligatorio'),
      password: Yup.string()
        .min(6, 'La contraseña debe tener al menos 6 caracteres')
        .required('La contraseña es obligatoria'),
    }),
    onSubmit: async ({ email, password }) => {
      setLoading(true);

      try {
        await login(email, password);
      } catch (error) {
        console.error('Login error', error);
        setError('Error al iniciar sesión');
      } finally {
        setLoading(false);
      }
    },
  });

  const handleTogglePassword = () => {
    setTogglePassword(!togglePassword);
  }
  
  return (
    <form onSubmit={formik.handleSubmit}>
      <Input
        id="email"
        type="email"
        name="email"
        label="Correo electrónico"
        placeholder="Ingresar correo electrónico"
        disabled={loading}
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        touched={formik.touched.email}
        msgError={formik.errors.email}
      />

      <Input
        id="password"
        type={togglePassword ? 'text' : 'password'}
        name="password"
        label="Contraseña"
        placeholder="Ingresar contraseña"
        disabled={loading}
        showPassword={togglePassword}
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        onShowPassword={handleTogglePassword}
        touched={formik.touched.password}
        msgError={formik.errors.password}
      />

      <Button
        type="submit"
        showIcon={false}
        disabled={loading}
        className="w-full mt-4"
      >
        {loading ? 'Espere...' : 'Ingresar'}
      </Button>

      {error && <p className="text-red-500">{error}</p>}
    </form>
  )
}
