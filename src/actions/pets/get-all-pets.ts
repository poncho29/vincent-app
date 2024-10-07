'use server';

import { Pet } from "@/interfaces";

interface Props {
  limit?: number;
  page?: number;
  all?: boolean;
}

export const getAllPets = async ({
  limit = 6,
  page = 1,
  all = false,
}: Props): Promise<{ pets: Pet[], totalPages: number }> => {
  if (isNaN(Number(limit)) || limit < 3) limit = 6;
  if (isNaN(Number(page)) || page < 1) page = 1;
  
  page = (page - 1) * limit;

  try {
    const URL = `${process.env.API_URL_BASE}`;

    const resp = await fetch(`${URL}/pets?limit=${limit}&offset=${page}&all=${all}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      cache: 'no-cache',
      // next: {
      //   revalidate: 60
      // }
    });

    if (!resp.ok) {
      throw new Error('Network response was not ok');
    }

    const { pets, total }: { pets: Pet[], total: number} = await resp.json();

    pets.forEach((pet: Pet) => {
      pet.images = pet.images.map((image: string) => `${process.env.CLOUDINARY_URL_BUCKET}/${image}`);
    });

    return { pets, totalPages: Math.ceil(total / limit) };
  } catch (error) {
    console.log('Error fetching pets:', error);
    return { pets: [], totalPages: 0 };
  }
}