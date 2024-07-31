'use server';

import { cookies } from "next/headers";

import { PetTable } from "@/interfaces";

export const createPet = async (pet: PetTable): Promise<{ success: boolean, error: string | null }> => {
  const URL = `${process.env.API_URL_BASE}`;
  const token = cookies().get('authToken')?.value;

  try {
    const resp = await fetch(`${URL}/pet`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${token}`
      },
      body: JSON.stringify(pet),
      cache: "no-cache"
    });

    if (!resp.ok) {
      throw new Error('Network response was not ok');
    }
    
    console.log('Response:', resp);
    return { success: true, error: null };
  } catch (error) {
    console.log('Error fetching pets:', error);
    return { success: false, error: 'Error creating pet' };
  }
}