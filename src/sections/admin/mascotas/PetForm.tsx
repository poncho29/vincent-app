'use client';

import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import toast from 'react-hot-toast';
import { useFormik } from "formik";

import { createPet, updatePet, uploadFile } from "@/actions";

import { initialValues, validationSchema } from './pet-form.helper';

import { urlToFile } from "@/utils";

import { ImageUploader, Input, Select, Switch } from "@/components/form";
import { Button } from "@/components/common";

import { OptionSelect, Pet, PetForm as IPetForm } from '@/interfaces';

interface Props {
  pet?: Pet | null;
  isEditing?: boolean;
  typeOptions: OptionSelect[];
  sexOptions: OptionSelect[];
  sizeOptions: OptionSelect[];
  stageOptions: OptionSelect[];
}

export const PetForm = ({
  pet,
  isEditing = false,
  typeOptions,
  sexOptions,
  sizeOptions,
  stageOptions
}: Props) => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingEdit, setIsLoadingEdit] = useState(isEditing);

  useEffect(() => {
    if (pet) {
      delete pet.user;
      
      const parsedPet = {
        ...pet,
        sex: pet.sex.id,
        size: pet.size.id,
        type: pet.type.id,
        stage: pet.stage.id,
        images: pet.images.map((image) => ({
          id: image.split('/').pop() || '',
          url: image,
          isLocal: false
        }))
      }

      formik.setValues(parsedPet);
      setIsLoadingEdit(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pet]);
  
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema,
    onSubmit: async (values: IPetForm) => {
      setIsLoading(true);

      let imagesToUpload: string[] = [];
      const { images } = values;

      // const firstImage = images?.[0] || '';
      const remoteImages = images
        ?.filter((image) => !image.isLocal)
        .map((image) => `vincent/${image.url.split('/').pop()}`) || [];
      const localImages = images?.filter((image) => image.isLocal) || [];

      try {
        if (localImages.length > 0) {
          const preparedImages = await Promise.all(localImages.map(async (image, index) => {
            const file = await urlToFile(image.url, `image_${index}`);

            const formData = new FormData();
            formData.append('file', file);

            const resp = await uploadFile(formData);

            if (resp && resp.public_id) {
              return resp.public_id;
            } else {
              throw new Error('File upload failed');
            }
          }));

          imagesToUpload = [...remoteImages, ...preparedImages];
        } else {
          imagesToUpload = [...remoteImages];
        }

        const newPet = {
          ...values,
          images: imagesToUpload
        }

        if (!isEditing) {
          delete newPet.id;
          const resp = await createPet(newPet);
          
          if (!resp.success)
            throw new Error(resp.error || 'Error creando la mascota');

          toast.success('Mascota creada exitosamente');
        }

        const resp = await updatePet(newPet);

        if (!resp.success)
          throw new Error(resp.error || 'Error creando la mascota');

        router.push('/admin/mascotas');
      } catch (error) {
        console.error('Error creando la mascota', error);
        toast.error('Error creando la mascota');
      } finally {
        setIsLoading(false);
      }
    },
  });

  if (isLoadingEdit) {
    return <div className="w-full max-w-md lg:max-w-[1240px]">Loading...</div>
  }

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
            disabled={isLoading}
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
            disabled={isLoading}
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
            disabled={isLoading}
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
              disabled={isLoading}
              checked={formik.values.adopted}
              onChange={() => formik.setFieldValue('adopted', !formik.values.adopted)}
            />

            <Switch
              id="sterilized"
              name="sterilized"
              label="¿Está esterilizada?"
              disabled={isLoading}
              checked={formik.values.sterilized}
              onChange={() => formik.setFieldValue('sterilized', !formik.values.sterilized)}
            />

            <Switch
              id="vacine"
              name="vacine"
              label="¿Está vacunada?"
              disabled={isLoading}
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
            disabled={isLoading}
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
            disabled={isLoading}
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
            disabled={isLoading}
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
            disabled={isLoading}
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
            disabled={isLoading}
            initialImages={formik.values.images}
            msgError={formik.errors.images}
            onImagesChange={(images) => formik.setFieldValue('images', images)}
          />
        </div>
      </div>
      
      <div className="flex justify-center gap-4">
        <Button
          type="button"
          variant="outline"
          showIcon={false}
          disabled={isLoading}
          onClick={() => router.push('/admin/mascotas')}
        >
          Cancelar
        </Button>

        <Button
          type="submit"
          showIcon={false}
          disabled={isLoading}
        >
          {pet ? 'Actualizar' : 'Crear'}
        </Button>
      </div>
    </form>
  )
}