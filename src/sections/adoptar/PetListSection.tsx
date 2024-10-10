'use client';

import { useEffect, useRef, useState } from "react";

import { getAllPets } from "@/actions";

import { Button, PetCard, Spinner } from "@/components/common";

import { Pet } from "@/interfaces";

const limit = 3;

export const PetListSection = () => {
  const firstRenderRef = useRef(true);

  const [pets, setPets] = useState<Pet[]>([]);
  const [loading, setLoading] = useState(true);
  const [showButtom, setShowButtom] = useState(true);

  useEffect(() => {
    const fetchPets = async () => {
      const { pets } = await getAllPets({ limit });
      setPets(pets);
      setLoading(false);

      if (firstRenderRef.current) firstRenderRef.current = false;
    };

    fetchPets();
  }, []);

  const handleShowMore = async () => {
    setLoading(true);

    const data = await getAllPets({ limit, page: pets.length });
    const newPets = [...pets, ...data.pets];
    const lastPets = newPets.length === data.totalPages;

    if (lastPets) setShowButtom(false);

    setPets(newPets);
    setLoading(false);
  }

  return (
    <section className="w-full max-w-section mx-auto mb-8 lg:mb-14">
      <h2 className="title mb-6 lg:mb-12">
        Ellos están listos para ser adoptados
      </h2>

      {loading && firstRenderRef.current ? (
        <div className="w-full flex justify-center">
          <Spinner className="size-12" />
        </div>
      ) : (
        <>
          <div
            className={`grid grid-cols-1 gap-8 animate-fade md:grid-cols-2 md:gap-x-0 xl:grid-cols-3`}
          >
            {pets.length === 0 ? (
              <p className="text-center">No hay mascotas que mostrar</p>
            ) : (
              pets.map((pet) => (
                <PetCard key={pet.id} pet={pet} className="mx-auto" />
              ))
            )}
          </div>

          {showButtom && (
            <Button
              className="mx-auto mt-6 lg:mt-12"
              showIcon={!loading}
              onClick={handleShowMore}
            >
              { loading ? 'Cargando...' : 'Ver más' }
            </Button>
          )}
        </>
      )}      
    </section>
  )
}
