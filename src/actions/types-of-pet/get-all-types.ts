import { OptionSelect, Type } from "@/interfaces";

export const getAllTypes = async (): Promise<OptionSelect[]> => {
  try {
    const URL = `${process.env.API_URL_BASE}`
    const resp = await fetch(`${URL}/type-pet`, {
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

    const typesPets: Type[] = await resp.json();
    console.log(typesPets);

    const typesOptions: OptionSelect[] = typesPets.map((type: Type) => ({
      value: type.id,
      label: type.type
    }));

    return typesOptions;
  } catch (error) {
    console.log('Error fetching types:', error);
    return [];
  }
}