import {
  BannerSection,
  CompanieSection,
  HelpSection,
  MisionSection,
  SliderPets,
  SupportSection
} from "@/sections";

export default async function LandingPage() {
  return (
    <main 
      className="relative"
    >
      <div
        className="fixed top-[67px] w-full h-[257px] bg-bannerLandingMobile bg-cover bg-center
        bg-no-repeat -z-50 md:h-[385px] md:bg-bannerLanding lg:top-[110px] lg:h-[575px]"
      ></div>

      <BannerSection />

      <div className="w-full h-full mx-auto rounded-3xl bg-white md:rounded-[60px]">
        <SliderPets />

        <SupportSection />

        <MisionSection />

        <CompanieSection />

        <HelpSection />
      </div>
    </main>
  );
}