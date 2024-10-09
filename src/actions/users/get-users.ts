'use server';

import { User } from "@/interfaces";
import { cookies } from "next/headers";

interface Props {
  limit?: number;
  page?: number;
}

export const getUsers = async ({
  limit = 6,
  page = 1,
}: Props): Promise<{ users: User[], totalPages: number }> => {
  const token = cookies().get('authToken')?.value;

  if (isNaN(Number(limit)) || limit < 3) limit = 6;
  if (isNaN(Number(page)) || page < 1) page = 1;
  
  page = (page - 1) * limit;

  try {
    const URL = `${process.env.API_URL_BASE}`;

    const resp = await fetch(`${URL}/auth/users?limit=${limit}&offset=${page}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${token}`
      },
      cache: 'no-cache',
    });

    if (!resp.ok) {
      throw new Error('Network response was not ok');
    }

    const { users, total }: { users: User[], total: number} = await resp.json();

    return { users, totalPages: Math.ceil(total / limit) };
  } catch (error) {
    console.log('Error fetching users:', error);
    return { users: [], totalPages: 0 };
  }
}