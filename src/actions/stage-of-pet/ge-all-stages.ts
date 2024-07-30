'use server';

import { cookies } from 'next/headers';

import { Stage } from "@/interfaces";

export const getAllStages = async (): Promise<Stage[]> => {
  const URL = `${process.env.API_URL_BASE}`
  const token = cookies().get('authToken')?.value;

  try {
    if (!token) throw new Error('Token not found');

    const resp = await fetch(`${URL}/stage`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${token}`
      },
      cache: "no-cache"
    });

    if (!resp.ok) throw new Error('Network response was not ok');

    const stagePets: Stage[] = await resp.json();

    return stagePets;
  } catch (error) {
    console.log('Error fetching sizes of pets:', error);
    return [];
  }
}