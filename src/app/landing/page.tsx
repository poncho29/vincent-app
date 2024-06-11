import { BannerSection } from "@/sections";

import { Carrousel } from "@/components/common";

export default function LandingPage() {
  return (
    <>
      <BannerSection />

      <section
        className="relative w-full h-auto max-w-section mx-auto"
      >
        <div
          className="absolute -top-8 w-full pt-5 pl-6 rounded-t-3xl bg-white md:rounded-[36px] md:pt-[50px]"
        >
          <h2
            className="text-xl text-center leading-[22px] font-mochiypopone mb-6 md:text-3xl
            lg:text-[50px] lg:leading-[52px]"
          >
            Peluditos <br />
            esperando un hogar
          </h2>

            
          <Carrousel slides={[]} />
        </div>
      </section>
    </>
  );
}