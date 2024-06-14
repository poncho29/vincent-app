import { Footer } from "@/components/layout";

import {
  BannerSection,
  CarouselSection,
  CompanieSection,
  HelpSection,
  MisionSection,
  SupportSection
} from "@/sections";

export default function LandingPage() {
  return (
    <main className="relative">
      <BannerSection />

      <div
        className="absolute top-[227px] w-full h-full mx-auto rounded-t-3xl bg-white
        md:top-[360px] lg:top-[545px]"
      >
        <CarouselSection />

        <SupportSection />

        <MisionSection />

        <CompanieSection />

        <HelpSection />

        <Footer />
      </div>
    </main>
  );
}