import { MessageSection, PetListSection } from "@/sections";

export default function AdoptPage() {
  return (
    <main className="px-6 animate-fade lg:px-12 xl:px-[100px]">
      <MessageSection />

      <PetListSection />

      {/* <SuccessStoriesSection /> */}
    </main>
  );
}