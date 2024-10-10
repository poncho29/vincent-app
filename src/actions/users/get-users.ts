'use server';

import { User } from "@/interfaces";
import { cookies } from "next/headers";

interface Props {
  limit?: number;
  page?: number;
}

type TUsersResponse = {
  users: User[];
  totalPages: number;
  errorMessage: string | null;
}

export const getUsers = async ({
  limit = 6,
  page = 1,
}: Props): Promise<TUsersResponse> => {
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
      
      if (resp.status === 403) {
        throw new Error('No tienes permisos para realizar esta acción');
      }
      
      console.log(resp);
      throw new Error('Network response was not ok');
    }

    const { users, total } = await resp.json();

    return {
      users,
      totalPages: Math.ceil(total / limit),
      errorMessage: null
    };
  } catch (error) {
    console.log('Error fetching users:', error);
    const errorMessage = error instanceof Error ? error.message : 'Error al obtener usuarios';

    return {
      users: [],
      totalPages: 0,
      errorMessage
    };
  }
}