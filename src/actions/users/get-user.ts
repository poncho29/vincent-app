'use server';

import { cookies } from "next/headers";

import { User } from "@/interfaces";

export const getUser = async (id: string): Promise<User | null> => {
  const token = cookies().get('authToken')?.value;
  
  try {
    const resp = await fetch(`${process.env.API_URL_BASE}/auth/users/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${token}`
      },
      cache: "no-cache"
    });

    if (!resp.ok) {
      console.log(resp);
      throw new Error('Network response was not ok');
    }

    const user: User = await resp.json();

    return user;
  } catch (error) {
    console.log('Error fetching user:', error);
    return null;
  }
}