import { Pet } from "@/interfaces";

export const getPet = async (id: string): Promise<Pet | null> => {
  try {
    const resp = await fetch(`${process.env.API_URL_BASE}/pets/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      cache: "no-cache"
    });

    if (!resp.ok) {
      throw new Error('Network response was not ok');
    }

    const pet: Pet = await resp.json();

    pet.images = pet.images.map((image: string) => `${process.env.CLOUDINARY_URL_BUCKET}/${image}`);

    return pet;
  } catch (error) {
    console.log('Error fetching pets:', error);
    return null;
  }
}
