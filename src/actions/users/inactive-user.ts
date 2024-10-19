'use server';

import { cookies } from "next/headers";

export const InactiveUser = async (id: string, body: { isActive: boolean }): Promise<{ success: boolean, error: string | null }> => {
  const URL = `${process.env.API_URL_BASE}`;
  const token = cookies().get('authToken')?.value;

  try {
    const resp = await fetch(`${URL}/auth/users/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${token}`
      },
      body: JSON.stringify(body),
    });

    const data = await resp.json();

    if (data?.error) {
      throw new Error(`status: ${data.statusCode} - ${data.message}`);
    }
    
    return { success: true, error: null };
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Error creando usuario';
    return { success: false, error: message };
  }
}