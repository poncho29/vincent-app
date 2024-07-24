'use server';

import Cookies from 'js-cookie';

import { UserLogin } from "@/interfaces";

const BASE_URL = process.env.API_URL_BASE;

interface Props {
  email: string;
  password: string;
}
 
export const login = async ({ email, password }: Props) => {
  try {
    const res = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      const errorResponse = await res.json();
      throw new Error(errorResponse.message || 'Invalid credentials');
    }

    const user: UserLogin = await res.json();

    return { success: true, user };
  } catch (error) {
    let errorMessage = 'Something went wrong.';

    if (error instanceof Error) {
      errorMessage = error.message;
    } else if (typeof error === 'string') {
      errorMessage = error;
    }
    
    console.error('Login error:', errorMessage);
    return { success: false, message: errorMessage };
  }
}