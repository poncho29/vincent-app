import { BannerSection, CarouselSection } from "@/sections";

export default function LandingPage() {
  return (
    <main className="relative">
      <BannerSection />

      <div
        className="absolute top-[227px] w-full h-auto mx-auto rounded-t-3xl bg-white
        md:top-[360px] lg:top-[545px]"
      >
        <CarouselSection />

        <section>
          <h1 className="tex-2xl">Seccion 3</h1>
        </section>
      </div>

    </main>
  );
}