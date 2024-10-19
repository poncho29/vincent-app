'use server';

import { cookies } from 'next/headers';

import { Sex } from "@/interfaces";

export const getAllSexes = async (): Promise<Sex[]> => {
  const URL = `${process.env.API_URL_BASE}`;
  const token = cookies().get('authToken')?.value;

  try {
    const resp = await fetch(`${URL}/sex`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${token}`
      },
      cache: "no-cache"
    });

    if (!resp.ok) {
      throw new Error('Network response was not ok');
    }

    const sexPets: Sex[] = await resp.json();

    return sexPets;
  } catch (error) {
    console.log('Error fetching sex of pets:', error);
    return [];
  }
}