'use server';

import { Pet } from "@/interfaces";

interface Props {
  limit?: number;
  offset?: number;
}

const API_URL_BASE = process.env.API_URL_BASE

export const getAllPets = async ({ limit = 10, offset = 0 }: Props): Promise<Pet[]> => {
  if (isNaN(limit)) limit = 10;
  if (limit < 1) limit = 10;

  if (isNaN(offset)) offset = 0;
  if (offset < 0) offset = 0;

  try {
    const resp = await fetch(`${API_URL_BASE}/pets?limit=${limit}&offset=${offset}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!resp.ok) {
      throw new Error('Network response was not ok.');
    }

    const pets = await resp.json();

    return pets;
  } catch (error) {
    console.log('Error fetching pets:', error);
    return [];
  }
}