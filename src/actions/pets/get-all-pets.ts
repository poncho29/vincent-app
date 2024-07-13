'use server';

import { Pet } from "@/interfaces";

interface Props {
  limit?: number;
  offset?: number;
}

export const getAllPets = async ({ limit = 10, offset = 0 }: Props): Promise<Pet[]> => {
  try {
    const resp = await fetch(`${process.env.API_URL_BASE}/pets?limit=${limit}&offset=${offset}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      cache: "no-cache"
    });

    if (!resp.ok) {
      throw new Error('Network response was not ok');
    }

    const pets: Pet[] = await resp.json();

    pets.forEach((pet: Pet) => {
      pet.images = pet.images.map((image: string) => `${process.env.CLOUDINARY_URL_BUCKET}/${image}`);
    });

    return pets;
  } catch (error) {
    console.log('Error fetching pets:', error);
    return [];
  }
}