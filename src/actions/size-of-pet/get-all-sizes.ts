'use server';

import { cookies } from 'next/headers';

import { Size } from "@/interfaces";

export const getAllSizes = async (): Promise<Size[]> => {
  const URL = `${process.env.API_URL_BASE}`
  const token = cookies().get('authToken')?.value;

  try {
    if (!token) throw new Error('Token not found');

    const resp = await fetch(`${URL}/size`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${token}`
      },
      cache: "no-cache"
    });

    if (!resp.ok) throw new Error('Network response was not ok');

    const sizePets: Size[] = await resp.json();

    return sizePets;
  } catch (error) {
    console.log('Error fetching sizes of pets:', error);
    return [];
  }
}