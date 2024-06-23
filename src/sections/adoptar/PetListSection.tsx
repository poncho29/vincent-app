import { Button, PetCard } from "@/components/common";

import { pets } from "@/assets";

export const PetListSection = () => {
  return (
    <section className="w-full max-w-section mx-auto mb-8 lg:mb-14">
      <h2 className="title mb-6 lg:mb-12">
        Ellos están listos para ser adoptados
      </h2>

      <div
        className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-x-0 xl:grid-cols-3"
      >
        {pets.slice(0, 3).map((pet) => (
          <PetCard key={pet.id} pet={pet} className="mx-auto" />
        ))}
      </div>

      <Button className="mx-auto mt-6 lg:mt-12">
        Ver más
      </Button>
    </section>
  )
}
