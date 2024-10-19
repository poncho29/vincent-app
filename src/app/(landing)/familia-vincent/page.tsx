import { BannerFamilySection, ResumeSection, SponsorSection } from "@/sections";

export default function FamilyPage() {
  return (
    <main className="relative animate-fade">
      <div
        className="fixed top-[67px] w-full h-[257px] bg-bannerLandingMobile bg-cover bg-center
        bg-no-repeat -z-50 md:h-[385px] md:bg-bannerLanding lg:top-[110px] lg:h-[575px]"
      ></div>

      <BannerFamilySection />

      <div
        className="w-full h-full pb-6 mx-auto rounded-t-3xl bg-white md:rounded-t-[60px] lg:pb-12"
      >
        <ResumeSection />

        <SponsorSection />
      </div>
    </main>
  );
}