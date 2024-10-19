import {
  ChangeLivesSection,
  FrequentQuestionsSection,
  HowWorkSection,
  SponsorRequirementSection
} from "@/sections";

export default function SponsorPage() {
  return (
    <main className="animate-fade">
      <ChangeLivesSection />

      <SponsorRequirementSection />

      <HowWorkSection />

      <FrequentQuestionsSection />
    </main>
  );
}