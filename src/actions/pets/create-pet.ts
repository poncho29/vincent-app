'use server';

import { cookies } from "next/headers";

import { PetTable } from "@/interfaces";

export const createPet = async (pet: PetTable): Promise<{ success: boolean, error: string | null }> => {
  const URL = `${process.env.API_URL_BASE}`;
  const token = cookies().get('authToken')?.value;

  try {
    const resp = await fetch(`${URL}/pets`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${token}`
      },
      body: JSON.stringify(pet)
    });

    const data = await resp.json();

    if (data?.error) {
      throw new Error(`status: ${data.statusCode} - ${data.message}`);
    }
    
    return { success: true, error: null };
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Error creando la mascota';
    return { success: false, error: message };
  }
}