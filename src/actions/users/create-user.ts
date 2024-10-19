'use server';

import { cookies } from "next/headers";

import { UserTable } from "@/interfaces";

interface TBodyUser extends Omit<UserTable, 'id' | 'roles' | 'isActive'> {
  roles: string[],
  isActive?: boolean
};

export const createUser = async (user: TBodyUser): Promise<{ success: boolean, error: string | null }> => {
  const URL = `${process.env.API_URL_BASE}`;
  const token = cookies().get('authToken')?.value;

  try {
    const resp = await fetch(`${URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${token}`
      },
      body: JSON.stringify(user),
    });

    const data = await resp.json();
    // console.log(data)

    if (data?.error) {
      throw new Error(`Error al crear el usuario: statusCode (${data.statusCode}) - ${data.message.join(', ')}`);
    }
    
    return { success: true, error: null };
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Error creando el usuario';
    console.log(message)
    return { success: false, error: message };
  }
}