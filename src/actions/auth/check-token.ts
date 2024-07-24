'use server';

const BASE_URL = process.env.API_URL_BASE;

export const checkToken = async (token: string) => {
  try {
    const res = await fetch(`${BASE_URL}/auth/check-token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      throw new Error('Token is invalid or expired');
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Token validation error:', error);
    throw new Error('Token validation failed');
  }
}