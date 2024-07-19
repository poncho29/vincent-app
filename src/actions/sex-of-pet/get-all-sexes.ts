import { OptionSelect, Sex } from "@/interfaces";

export const getAllSexes = async (): Promise<OptionSelect[]> => {
  try {
    const URL = `${process.env.API_URL_BASE}`
    const resp = await fetch(`${URL}/sex`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFlZTVjOTJiLWQxNTUtNGFmZC1iZTg5LWM1MjM4NGRlYzY0MyIsImlhdCI6MTcyMTM1NTQ1MywiZXhwIjoxNzIxMzYyNjUzfQ.Yig8sk5wql7Rr3cxqjSi_4A4o2IRGG7U30JX9yMvodc`
      },
      cache: "no-cache"
    });

    if (!resp.ok) {
      throw new Error('Network response was not ok');
    }

    const sexPets: Sex[] = await resp.json();

    const sexOptions: OptionSelect[] = sexPets.map((sex: Sex) => ({
      value: sex.id,
      label: sex.sex
    }));

    return sexOptions;
  } catch (error) {
    console.log('Error fetching types:', error);
    return [];
  }
}