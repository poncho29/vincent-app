'use server';

import { cookies } from 'next/headers';

import { Type } from "@/interfaces";

export const getAllTypes = async (): Promise<Type[]> => {
  const URL = `${process.env.API_URL_BASE}`
  const token = cookies().get('authToken')?.value;

  try {
    const resp = await fetch(`${URL}/type-pet`, {
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

    const typesPets: Type[] = await resp.json();

    return typesPets;
  } catch (error) {
    console.log('Error fetching types of pets:', error);
    return [];
  }
}