'use client';

import { useState } from "react";

import { useFormik } from "formik";
import * as Yup from 'yup';

import { Button } from "@/components/common";
import { Input } from "@/components/form";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  
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
    onSubmit: async (values) => {
      setLoading(true);

      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log(JSON.stringify(values, null, 2));
      setLoading(false);
    },
  });

  return (
    <div className="w-[400px] h-auto p-6 bg-slate-200 shadow-lg rounded-xl">
      <h1 className="title mb-6">Bienvenido</h1>

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
          type="password"
          name="password"
          label="Contraseña"
          placeholder="Ingresar contraseña"
          disabled={loading}
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
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
      </form>
    </div>
  );
}