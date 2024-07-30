'use client';

import { useState } from "react";

import { useFormik } from "formik";
import * as Yup from 'yup';

import { ImageUploader, Input, Select, Switch } from "@/components/form";

import { OptionSelect, PetTable } from '@/interfaces';

interface Props {
  pet?: PetTable | null;
  typeOptions: OptionSelect[];
  sexOptions: OptionSelect[];
  sizeOptions: OptionSelect[];
  stageOptions: OptionSelect[];
}

const initialValues: PetTable = {
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
}

export const PetForm = ({
  pet,
  typeOptions,
  sexOptions,
  sizeOptions,
  stageOptions
}: Props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object().shape({
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
    }),
    onSubmit: async (values: PetTable) => {
      setLoading(true);

      try {
        console.log(values);
      } catch (error) {
        console.error('Login error', error);
        setError('Error al iniciar sesión');
      } finally {
        setLoading(false);
      }
    },
  });


  return (
    <form className="w-full max-w-md flex flex-col gap-4 lg:max-w-[1240px] lg:flex-row">
      <div className="lg:w-1/2">
        <Input
          id="name"
          name="name"
          placeholder="Ingrese el nombre de la mascota"
          label="Nombre de la mascota"
          inputClass="!border !border-sky"
          disabled={loading}
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          touched={formik.touched.name}
          msgError={formik.errors.name}
        />

        <Input
          id="slug"
          name="slug"
          label="Apodo de la mascota"
          placeholder="Ingrese el apodo de la mascota"
          inputClass="!border !border-sky"
          disabled={loading}
          value={formik.values.slug}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          touched={formik.touched.slug}
          msgError={formik.errors.slug}
        />
        
        <Input
          id="race"
          name="race"
          label="Raza de la mascota"
          placeholder="Ingrese la raza de la mascota"
          inputClass="!border !border-sky"
          disabled={loading}
          value={formik.values.race}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          touched={formik.touched.race}
          msgError={formik.errors.race}
        />

        <div className="flex flex-wrap justify-between gap-4 mb-4">
          <Switch
            id="adopted"
            name="adopted"
            label="¿Está adoptada?"
            checked={formik.values.adopted}
            onChange={() => formik.setFieldValue('adopted', !formik.values.adopted)}
          />

          <Switch
            id="sterilized"
            name="sterilized"
            label="¿Está esterilizada?"
            checked={formik.values.adopted}
            onChange={() => formik.setFieldValue('sterilized', !formik.values.adopted)}
          />

          <Switch
            id="vacine"
            name="vacine"
            label="¿Está vacunada?"
            checked={formik.values.adopted}
            onChange={() => formik.setFieldValue('vacine', !formik.values.adopted)}
          />
        </div>
      </div>

      <div className="lg:w-1/2">
        <Select 
          id="type"
          name="type"
          label="Tipo de mascota"
          options={typeOptions}
          value={formik.values.type}
          onChange={(e) => {
            const value = e.target.value;
            formik.setFieldValue('type', value);
          }}
          onBlur={formik.handleBlur}
          touched={formik.touched.type}
          msgError={formik.errors.type}
        />
        
        <Select 
          id="sex"
          name="sex"
          label="Sexo de la mascota"
          options={sexOptions}
          value={formik.values.sex}
          onChange={(e) => {
            const value = e.target.value;
            formik.setFieldValue('sex', value);
          }}
          onBlur={formik.handleBlur}
          touched={formik.touched.sex}
          msgError={formik.errors.sex}
        />

        <Select 
          id="size"
          name="size"
          label="Tamaño de la mascota"
          options={sizeOptions}
          value={formik.values.size}
          onChange={(value) => formik.setFieldValue('size', value)}
          onBlur={formik.handleBlur}
          touched={formik.touched.size}
          msgError={formik.errors.size}
        />
        
        <Select 
          id="stage"
          name="stage"
          label="Etapa de la mascota"
          options={stageOptions}
          value={formik.values.stage}
          onChange={(value) => formik.setFieldValue('stage', value)}
          onBlur={formik.handleBlur}
          touched={formik.touched.stage}
          msgError={formik.errors.stage}
        />

        <ImageUploader
          label="Imagenes de la mascota"
          initialImages={formik.values.images}
          onImagesChange={(images) => {
            console.log('images', images);
            formik.setFieldValue('images', images);
          }}
        />
      </div>
    </form>
  )
}
