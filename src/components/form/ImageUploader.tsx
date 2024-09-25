/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useState, ChangeEvent, useEffect } from 'react';

import { IoMdAlert } from 'react-icons/io';

import { ImageForm } from '@/interfaces';

// const MAX_HEIGHT = 350;
// const MAX_WIDTH = 350;

interface Props {
  label?: string;
  maxImages?: number;
  disabled?: boolean;
  initialImages?: ImageForm[];
  msgError?: string | undefined;
  onImagesChange?: (images: ImageForm[]) => void;
  onDeleteImage?: (id: string) => void;
}

export const ImageUploader = ({
  label,
  maxImages = 3,
  disabled = false,
  initialImages = [],
  msgError,
  onImagesChange,
  onDeleteImage,
}: Props) => {
  const [images, setImages] = useState<ImageForm[]>(initialImages);
  const [error, setError] = useState<string | null | undefined>(msgError);

  useEffect(() => {
    if (images.length === 0) return;

    // Envia las imagenes al componente padre
    if (onImagesChange) {
      onImagesChange(images);
    }
  }, [images]);

  useEffect(() => {
    if (msgError) setError(msgError);
  }, [msgError]);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);

      filesArray.forEach((file) => {
        const image = new Image();
        const objectUrl = URL.createObjectURL(file);

        image.onload = () => {
          // Validar las dimensiones de la imagen
          // if (image.width !== MAX_WIDTH || image.height !== MAX_HEIGHT) {
          //   setError(`La imagen debe tener un tamaño de ${MAX_WIDTH}x${MAX_HEIGHT} píxeles.`);
          //   URL.revokeObjectURL(objectUrl); // Limpiar la URL creada
          //   return;
          // }

          // Si cumple con las dimensiones, añadirla al estado
          setImages((prevImages) => {
            const newImages = prevImages.concat({
              id: objectUrl,
              url: objectUrl,
              isLocal: true,
            });

            if (newImages.length > maxImages) {
              setError(`Solo puedes subir hasta ${maxImages} imágenes.`);
              return prevImages;
            } else {
              setError(null);
              return newImages;
            }
          });
        };

        image.onerror = () => {
          setError('Error al cargar la imagen.');
          URL.revokeObjectURL(objectUrl); // Limpiar la URL creada
        };

        image.src = objectUrl;
      });

      // Restablecer el valor para permitir volver a cargar el mismo archivo
      e.target.value = '';
    }
  };

  const handleRemoveImage = (id: string) => {
    setImages((prevImages) => prevImages.filter((image) => image.id !== id));
    const imageToRemove = images.find((image) => image.id === id);

    if (onDeleteImage && !imageToRemove?.isLocal) onDeleteImage(id);

    // Revocar URL cuando se elimina la imagen
    if (imageToRemove && imageToRemove.isLocal)
      URL.revokeObjectURL(imageToRemove.url);

    // Restablecer el error cuando se elimina una imagen
    setError(null);
  };

  const renderPhotos = (photos: ImageForm[]) => {
    return photos.map((photo) => (
      <div key={photo.id} className="relative">
        <img
          alt="pet image"
          className="w-28 h-28 object-cover border-2 border-sky lg:w-32 lg:h-32"
          src={photo.url}
        />
        <button
          className="absolute -top-2 -right-2 size-4 flex items-center justify-center
          text-sm text-white p-1 bg-red-500 rounded-full"
          onClick={() => handleRemoveImage(photo.id)}
        >
          &times;
        </button>
      </div>
    ));
  };

  return (
    <div className="flex flex-col p-5 border border-sky rounded-lg">
      <div className="flex items-center justify-between gap-2">
        <label className="flex items-center text-xs font-medium sm:gap-2 md:text-sm lg:text-base">
          <span className='inline-block w-[90%]'>{label}</span>
          <IoMdAlert className='!size-5' />
        </label>

        <input
          type="file"
          id="file"
          multiple
          onChange={handleImageChange}
          className="hidden"
          accept="image/*"
          disabled={images.length >= maxImages || disabled}
        />

        <label
          htmlFor="file"
          className={`
            w-32 px-4 py-2 rounded-md text-xs text-center text-white font-semibold
            md:text-sm lg:w-40 lg:text-base
            ${images.length >= maxImages || disabled
              ? 'bg-slate-300 cursor-not-allowed'
              : 'bg-sky cursor-pointer'
            }
          `}
        >
          Seleccionar
        </label>
      </div>

      {error && <p className="text-xs text-rose-500 mb-2">{error}</p>}

      <div
        className={`flex flex-wrap justify-around gap-4 lg:flex-nowrap lg:gap-8 ${images.length > 0 ? 'mt-2' : 0}`}
      >
        {renderPhotos(images)}
      </div>
    </div>
  );
};