import { MdPets } from "react-icons/md";

import { getAllSexes, getAllTypes } from "@/actions";

import { ImageUploader, Input, Select, Switch } from "@/components/form";
import { PageContent } from "@/components/layout";

export default async function CreatePetPage() {
  const typesOptions = await getAllTypes();
  const sexOptions = await getAllSexes();

  return (
    <PageContent
      pageName="Crear Mascota"
      pageIcon={<MdPets className="size-7 text-blackLight lg:size-10" />}
    >
      <form className="w-full">

        <div className="w-1/2">
          <Input
            id="name"
            name="name"
            placeholder="Ingrese el nombre de la mascota"
            label="Nombre de la mascota"
            inputClass="!border !border-sky"
          />

          <Input
            id="slug"
            name="slug"
            label="Apodo de la mascota"
            placeholder="Ingrese el apodo de la mascota"
            inputClass="!border !border-sky"
          />
          
          <Input
            id="race"
            name="race"
            label="Raza de la mascota"
            placeholder="Ingrese la raza de la mascota"
            inputClass="!border !border-sky"
          />

          <div className="flex justify-between gap-4 mb-4">
            <Switch
              id="adopted"
              name="adopted"
              label="¿Está adoptada?"
            />

            <Switch
              id="sterilized"
              name="sterilized"
              label="¿Está esterilizada?"
            />

            <Switch
              id="vacine"
              name="vacine"
              label="¿Está vacunada?"
            />
          </div>

          <Select 
            id="type"
            name="type"
            label="Tipo de mascota"
            options={typesOptions}
          />
          
          <Select 
            id="sex"
            name="sex"
            label="Sexo de la mascota"
            options={sexOptions}
          />

          <Select 
            id="size"
            name="size"
            label="Tamaño de la mascota"
            options={[
              { value: '', label: 'Seleccione el tamaño de la mascota' },
              { value: 'small', label: 'Pequeño' },
              { value: 'medium', label: 'Mediano' },
              { value: 'large', label: 'Grande' },
            ]}
          />
          
          <Select 
            id="stage"
            name="stage"
            label="Etapa de la mascota"
            options={[
              { value: '', label: 'Seleccione la etapa de la mascota' },
              { value: 'pedigree', label: 'Pedigree' },
              { value: 'adult', label: 'Adulto' },
              { value: 'senior', label: 'Senior' },
            ]}
          />

          <ImageUploader
            label="Imagenes de la mascota"
            // initialImages={[`${process.env.NEXT_PUBLIC_CLOUDINARY_URL_BUCKET}/vincent/qkmal3cyi5ianv8r75rl`]}
            // onImagesChange={(images) => console.log(images)}
          />
        </div>

      </form>
    </PageContent>
  );
}