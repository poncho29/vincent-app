'use server';

import { cookies } from "next/headers";

import { IResponse } from "@/interfaces";

export const deleteFile = async (id: string): Promise<IResponse<string >> => {
  const URL = `${process.env.API_URL_BASE}`;
  const token = cookies().get('authToken')?.value;

  try {
    const resp = await fetch(`${URL}/files/${id}`, {
      method: 'DELETE',
      headers: {
        'authorization': `Bearer ${token}`
      },
    });

    if (!resp.ok) {
      throw new Error('Network response was not ok');
    }
    
    const message = await resp.json();

    return {
      ok: true,
      data: message,
      error: null
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Error deleting file';
    return {
      ok: false,
      data: null,
      error: message
    };
  }
}