'use client';

import { useState } from "react";

import { useRouter } from "next/navigation";

import { useFormik } from "formik";
import * as Yup from 'yup';

import { uploadFile } from "@/actions";

import { ImageUploader, Input, Select, Switch } from "@/components/form";
import { Button } from "@/components/common";

import { OptionSelect, PetTable } from '@/interfaces';
import { urlToFile } from "@/utils";

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
  // images: []
  images: ['vincent/qkmal3cyi5ianv8r75rl', 'vincent/pwxsgth0nd2paomn8alw']
}

export const PetForm = ({
  pet,
  typeOptions,
  sexOptions,
  sizeOptions,
  stageOptions
}: Props) => {
  const router = useRouter();

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

      const { images } = values;

      // const firstImage = images?.[0] || '';
      const remoteImages = images
        ?.filter((image) => image.includes('https'))
        .map((image) => `vincent/${image.split('/').pop()}`) || [];
      const localImages = images?.filter((image) => !image.includes('https')) || [];

      try {
        if (localImages.length > 0) {
          const preparedImages = await Promise.all(localImages.map(async (image, index) => {
            const file = await urlToFile(image, `image_${index}.jpg`);

            const formData = new FormData();
            formData.append('file', file);

            const resp = await uploadFile(formData);

            if (resp && resp.public_id) {
              return resp.public_id;
            } else {
              throw new Error('File upload failed');
            }
          }));

          values.images = [...remoteImages, ...preparedImages];
        } else {
          values.images = [...remoteImages];
        }

        console.log(values);
      } catch (error) {
        console.error('Error creando la mascota', error);
        setError('Error creando la mascota');
      } finally {
        setLoading(false);
      }
    },
  });


  return (
    <form
      className="w-full max-w-md lg:max-w-[1240px]"
      onSubmit={formik.handleSubmit}
    >
      <div className="flex flex-col gap-4 mb-6 lg:flex-row">
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
              disabled={loading}
              checked={formik.values.adopted}
              onChange={() => formik.setFieldValue('adopted', !formik.values.adopted)}
            />

            <Switch
              id="sterilized"
              name="sterilized"
              label="¿Está esterilizada?"
              disabled={loading}
              checked={formik.values.sterilized}
              onChange={() => formik.setFieldValue('sterilized', !formik.values.sterilized)}
            />

            <Switch
              id="vacine"
              name="vacine"
              label="¿Está vacunada?"
              disabled={loading}
              checked={formik.values.vacine}
              onChange={() => formik.setFieldValue('vacine', !formik.values.vacine)}
            />
          </div>
        </div>

        <div className="lg:w-1/2">
          <Select 
            id="type"
            name="type"
            label="Tipo de mascota"
            disabled={loading}
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
            disabled={loading}
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
            disabled={loading}
            options={sizeOptions}
            value={formik.values.size}
            onChange={(e) => {
              const value = e.target.value;
              formik.setFieldValue('size', value)
            }}
            onBlur={formik.handleBlur}
            touched={formik.touched.size}
            msgError={formik.errors.size}
          />
          
          <Select 
            id="stage"
            name="stage"
            label="Etapa de la mascota"
            disabled={loading}
            options={stageOptions}
            value={formik.values.stage}
            onChange={(e) => {
              const value = e.target.value;
              formik.setFieldValue('stage', value)
            }}
            onBlur={formik.handleBlur}
            touched={formik.touched.stage}
            msgError={formik.errors.stage}
          />

          <ImageUploader
            label="Imagenes de la mascota"
            disabled={loading}
            initialImages={formik.values.images}
            msgError={formik.errors.images}
            onImagesChange={(images) => {
              formik.setFieldValue('images', images);
            }}
          />
        </div>
      </div>
      
      <div className="flex justify-center gap-4">
        <Button
          type="button"
          variant="outline"
          showIcon={false}
          disabled={loading}
          onClick={() => router.push('/admin/mascotas')}
        >
          Cancelar
        </Button>

        <Button
          type="submit"
          showIcon={false}
          disabled={loading}
        >
          Crear
        </Button>
      </div>
    </form>
  )
}
