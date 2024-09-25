'use server';

import { cookies } from "next/headers";

import { FileResponse } from "@/interfaces";

export const uploadFile = async (data: FormData): Promise<FileResponse | null> => {
  const URL = `${process.env.API_URL_BASE}`;
  const token = cookies().get('authToken')?.value;

  try {
    const resp = await fetch(`${URL}/files/upload`, {
      method: 'POST',
      headers: {
        'authorization': `Bearer ${token}`
      },
      body: data,
    });

    if (!resp.ok) {
      throw new Error('Network response was not ok');
    }
    
    const file: FileResponse = await resp.json();

    return file;
  } catch (error) {
    return null;
  }
}