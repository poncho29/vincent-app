'use server';

import { cookies } from "next/headers";


export const deletePet = async (id: string) => {
  const URL = `${process.env.API_URL_BASE}`;
  const token = cookies().get('authToken')?.value;

  try {
    const resp = await fetch(`${URL}/pets/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${token}`,
      }
    });

    const data = await resp.json();

    if (data?.statusCode && data.statusCode !== 200) throw new Error(data.message);   
    
    return { ok: true, data: data, error: null };
  } catch (error) {
    const message = error instanceof Error ? error.message : error || 'Error al borrar la mascota';

    return { ok: false, error: message };
  }
}