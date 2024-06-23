import Image from "next/image";

import { stories } from "@/assets";

export const SuccessStoriesSection = () => {
  return (
    <section className="w-full max-w-section mx-auto mb-8 lg:mb-14">
      <div className="w-full max-w-[504px] mx-auto mb-6 lg:mb-12">
        <h2 className="title mb-4 lg:mb-6">
          Historias de Éxito
        </h2>

        <p className="paragraph lg:text-center">
          Ellos son los peluditos que han encontrado un hogar y ahora disfrutan de mucho amor.
        </p>
      </div>

      <div
        className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-x-5 xl:grid-cols-3"
      >
        {stories.map((story) => (
          <div key={story.id} className="mx-auto">
            <Image
              src={`/common/${story.image}`}
              alt={story.image}
              width={240}
              height={240}
              className="block object-fill lg:hidden"
            />

            <Image
              src={`/common/${story.image}`}
              alt={story.image}
              width={400}
              height={400}
              className="hidden object-fill lg:block"
            />
          </div>
        ))}
      </div>

      <div
        className='w-full flex items-center justify-center gap-4 mt-8 paragraph
        *:cursor-pointer'
      >
        <span className="text-green">1</span>
        <span>2</span>
        <span>3</span>
      </div>
    </section>
  )
}
