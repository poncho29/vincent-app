/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useState, ChangeEvent, useEffect } from 'react';

interface Props {
  label?: string;
  maxImages?: number;
  initialImages?: string[];
  onImagesChange?: (images: { id: string; url: string; isLocal: boolean }[]) => void;
}

export const ImageUploader = ({
  label,
  maxImages = 3,
  initialImages = [],
  onImagesChange
}: Props) => {
  const [images, setImages] = useState<{ id: string; url: string; isLocal: boolean }[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Convertir las imágenes iniciales a la estructura usada en el estado
    if (initialImages.length > 0) {
      const initialImagesWithId = initialImages.map((url) => ({
        id: url,
        url: url,
        isLocal: false
      }));
      setImages(initialImagesWithId);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // Llamar al callback onImagesChange cada vez que las imágenes cambien
    if (onImagesChange) {
      onImagesChange(images);
    }
  }, [images]);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) => ({
        id: URL.createObjectURL(file),
        url: URL.createObjectURL(file),
        isLocal: true
      }));
      setImages((prevImages) => {
        const newImages = prevImages.concat(filesArray);
        if (newImages.length > maxImages) {
          setError(`You can only upload up to ${maxImages} images.`);
          return prevImages;
        } else {
          setError(null);
          return newImages;
        }
      });

      // Restablecer el valor de entrada para permitir volver a cargar el mismo archivo
      e.target.value = '';
    }
  };

  useEffect(() => {
    return () => {
      images.forEach((image) => {
        if (image.isLocal) URL.revokeObjectURL(image.url);
      });
    };
  }, [images]);

  const handleRemoveImage = (id: string) => {
    setImages((prevImages) => prevImages.filter((image) => image.id !== id));
    const imageToRemove = images.find((image) => image.id === id);

    // Revocar URL cuando se elimina la imagen
    if (imageToRemove && imageToRemove.isLocal) URL.revokeObjectURL(imageToRemove.url);

    // Restablecer el error cuando se elimina una imagen
    setError(null);
  };

  const renderPhotos = (source: { id: string; url: string }[]) => {
    return source.map((photo) => (
      <div key={photo.id} className="relative m-2">
        <img
          alt="pet image"
          className="w-32 h-32 object-cover border-2 border-sky"
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
    <div className="flex flex-col">
      <div className="mb-2 flex items-center">
        <label className="mr-4 text-sm font-medium lg:text-base">{label}</label>

        <input
          type="file"
          id="file"
          multiple
          onChange={handleImageChange}
          className="hidden"
          accept="image/*"
          disabled={images.length >= maxImages}
        />

        <label
          htmlFor="file"
          className={`
            w-36 px-4 py-2 rounded-md text-sm text-white cursor-pointer lg:w-40 lg:text-base
            ${images.length >= maxImages ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-500'}
          `}
        >
          Select Images
        </label>
      </div>

      {error && <p className="text-red-500 mb-2">{error}</p>}

      <div className="flex flex-wrap">
        {renderPhotos(images)}
      </div>
    </div>
  );
};