import { MessageSection, PetListSection, SuccessStoriesSection } from "@/sections";

export default function AdoptPage() {
  return (
    <main className="px-6 lg:px-12 xl:px-[100px]">
      <MessageSection />

      <PetListSection />

      <SuccessStoriesSection />
  </main>
  );
}