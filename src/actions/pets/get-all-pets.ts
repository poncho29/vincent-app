'use server';

import { Pet } from "@/interfaces";

interface Props {
  limit?: number;
  offset?: number;
  all?: boolean;
}

export const getAllPets = async ({
  limit = 12,
  offset = 0 ,
  all = false,
}: Props): Promise<{ pets: Pet[], total: number }> => {
  console.log(limit, offset, all)
  try {
    const URL = `${process.env.API_URL_BASE}`;
    
    const resp = await fetch(`${URL}/pets?limit=${limit}&offset=${offset}&all=${all}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      cache: "no-cache"
    });

    if (!resp.ok) {
      throw new Error('Network response was not ok');
    }

    const { pets, total }: { pets: Pet[], total: number} = await resp.json();

    pets.forEach((pet: Pet) => {
      pet.images = pet.images.map((image: string) => `${process.env.CLOUDINARY_URL_BUCKET}/${image}`);
    });

    return { pets, total };
  } catch (error) {
    console.log('Error fetching pets:', error);
    return { pets: [], total: 0 };
  }
}