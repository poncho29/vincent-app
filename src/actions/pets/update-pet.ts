'use server';

import { cookies } from "next/headers";

import { PetTable } from "@/interfaces";

export const updatePet = async (pet: PetTable): Promise<{ success: boolean, error: string | null }> => {
  const URL = `${process.env.API_URL_BASE}`;
  const token = cookies().get('authToken')?.value;

  const { id, ...rest } = pet;

  try {
    const resp = await fetch(`${URL}/pets/${pet.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(rest)
    });

    const data = await resp.json();

    if (data?.error) {
      throw new Error(`status: ${data.statusCode} - ${data.message}`);
    }
    
    return { success: true, error: null };
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Error updating pet';
    return { success: false, error: message };
  }
}